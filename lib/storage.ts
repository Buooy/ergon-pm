import fs from 'fs/promises'
import path from 'path'
import { Project, ContextFile, GeneratedPRD } from './types'
import { sanitizePath, generateSlug } from './utils'
import matter from 'gray-matter'

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data')
const PROJECTS_DIR = path.join(DATA_DIR, 'projects')

/**
 * Ensure data directory exists
 */
export async function ensureDataDir(): Promise<void> {
  await fs.mkdir(PROJECTS_DIR, { recursive: true })
}

/**
 * Get all projects
 */
export async function getAllProjects(): Promise<Project[]> {
  await ensureDataDir()

  try {
    const entries = await fs.readdir(PROJECTS_DIR, { withFileTypes: true })
    const projectDirs = entries.filter(entry => entry.isDirectory())

    const projects = await Promise.all(
      projectDirs.map(async (dir) => {
        const projectPath = path.join(PROJECTS_DIR, dir.name, 'project.json')
        try {
          const data = await fs.readFile(projectPath, 'utf-8')
          return JSON.parse(data) as Project
        } catch (error) {
          console.error(`Error reading project ${dir.name}:`, error)
          return null
        }
      })
    )

    return projects.filter((p): p is Project => p !== null)
  } catch (error) {
    console.error('Error reading projects directory:', error)
    return []
  }
}

/**
 * Get a single project by slug
 */
export async function getProject(slug: string): Promise<Project | null> {
  const sanitizedSlug = sanitizePath(slug)
  const projectPath = path.join(PROJECTS_DIR, sanitizedSlug, 'project.json')

  try {
    const data = await fs.readFile(projectPath, 'utf-8')
    return JSON.parse(data) as Project
  } catch (error) {
    return null
  }
}

/**
 * Create a new project
 */
export async function createProject(name: string, description: string): Promise<Project> {
  await ensureDataDir()

  const slug = generateSlug(name)
  const projectDir = path.join(PROJECTS_DIR, slug)

  // Check if project already exists
  try {
    await fs.access(projectDir)
    throw new Error(`Project with slug "${slug}" already exists`)
  } catch (error: any) {
    if (error.code !== 'ENOENT') throw error
  }

  const project: Project = {
    id: crypto.randomUUID(),
    name,
    slug,
    description,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    contextSources: [
      {
        id: crypto.randomUUID(),
        type: 'filesystem',
        config: {},
        enabled: true,
      }
    ],
  }

  // Create project directories
  await fs.mkdir(path.join(projectDir, 'context'), { recursive: true })
  await fs.mkdir(path.join(projectDir, 'generated'), { recursive: true })

  // Write project.json
  await fs.writeFile(
    path.join(projectDir, 'project.json'),
    JSON.stringify(project, null, 2),
    'utf-8'
  )

  return project
}

/**
 * Update a project
 */
export async function updateProject(slug: string, updates: Partial<Project>): Promise<Project> {
  const project = await getProject(slug)
  if (!project) throw new Error(`Project "${slug}" not found`)

  const updated: Project = {
    ...project,
    ...updates,
    id: project.id, // Prevent ID change
    slug: project.slug, // Prevent slug change
    updatedAt: new Date().toISOString(),
  }

  const projectPath = path.join(PROJECTS_DIR, slug, 'project.json')
  await fs.writeFile(projectPath, JSON.stringify(updated, null, 2), 'utf-8')

  return updated
}

/**
 * Delete a project
 */
export async function deleteProject(slug: string): Promise<void> {
  const sanitizedSlug = sanitizePath(slug)
  const projectDir = path.join(PROJECTS_DIR, sanitizedSlug)

  await fs.rm(projectDir, { recursive: true, force: true })
}

/**
 * Get all context files for a project
 */
export async function getContextFiles(projectSlug: string, dir: string = ''): Promise<ContextFile[]> {
  const sanitizedSlug = sanitizePath(projectSlug)
  const sanitizedDir = sanitizePath(dir)
  const contextDir = path.join(PROJECTS_DIR, sanitizedSlug, 'context', sanitizedDir)

  try {
    const entries = await fs.readdir(contextDir, { withFileTypes: true })
    const files: ContextFile[] = []

    for (const entry of entries) {
      const entryPath = path.join(sanitizedDir, entry.name)

      if (entry.isDirectory()) {
        // Recursively get files from subdirectories
        const subFiles = await getContextFiles(projectSlug, entryPath)
        files.push(...subFiles)
      } else if (entry.name.endsWith('.md')) {
        const filePath = path.join(contextDir, entry.name)
        const content = await fs.readFile(filePath, 'utf-8')
        const { data, content: markdownContent } = matter(content)

        files.push({
          path: entryPath,
          title: data.title || entry.name.replace('.md', ''),
          type: data.type || 'general',
          tags: data.tags || [],
          createdAt: data.createdAt || new Date().toISOString(),
          updatedAt: data.updatedAt || new Date().toISOString(),
          content: markdownContent,
        })
      }
    }

    return files
  } catch (error) {
    return []
  }
}

/**
 * Get a single context file
 */
export async function getContextFile(projectSlug: string, filePath: string): Promise<ContextFile | null> {
  const sanitizedSlug = sanitizePath(projectSlug)
  const sanitizedPath = sanitizePath(filePath)
  const fullPath = path.join(PROJECTS_DIR, sanitizedSlug, 'context', sanitizedPath)

  try {
    const content = await fs.readFile(fullPath, 'utf-8')
    const { data, content: markdownContent } = matter(content)

    return {
      path: sanitizedPath,
      title: data.title || path.basename(filePath, '.md'),
      type: data.type || 'general',
      tags: data.tags || [],
      createdAt: data.createdAt || new Date().toISOString(),
      updatedAt: data.updatedAt || new Date().toISOString(),
      content: markdownContent,
    }
  } catch (error) {
    return null
  }
}

/**
 * Create or update a context file
 */
export async function saveContextFile(
  projectSlug: string,
  filePath: string,
  file: Partial<ContextFile>
): Promise<ContextFile> {
  const sanitizedSlug = sanitizePath(projectSlug)
  const sanitizedPath = sanitizePath(filePath)
  const fullPath = path.join(PROJECTS_DIR, sanitizedSlug, 'context', sanitizedPath)

  // Ensure parent directory exists
  await fs.mkdir(path.dirname(fullPath), { recursive: true })

  const now = new Date().toISOString()
  const contextFile: ContextFile = {
    path: sanitizedPath,
    title: file.title || path.basename(filePath, '.md'),
    type: file.type || 'general',
    tags: file.tags || [],
    createdAt: file.createdAt || now,
    updatedAt: now,
    content: file.content || '',
  }

  // Create markdown file with frontmatter
  const fileContent = matter.stringify(contextFile.content, {
    title: contextFile.title,
    type: contextFile.type,
    tags: contextFile.tags,
    createdAt: contextFile.createdAt,
    updatedAt: contextFile.updatedAt,
  })

  await fs.writeFile(fullPath, fileContent, 'utf-8')

  return contextFile
}

/**
 * Delete a context file
 */
export async function deleteContextFile(projectSlug: string, filePath: string): Promise<void> {
  const sanitizedSlug = sanitizePath(projectSlug)
  const sanitizedPath = sanitizePath(filePath)
  const fullPath = path.join(PROJECTS_DIR, sanitizedSlug, 'context', sanitizedPath)

  await fs.rm(fullPath, { force: true })
}

/**
 * Get all generated PRDs for a project
 */
export async function getGeneratedPRDs(projectSlug: string): Promise<GeneratedPRD[]> {
  const sanitizedSlug = sanitizePath(projectSlug)
  const generatedDir = path.join(PROJECTS_DIR, sanitizedSlug, 'generated')

  try {
    const files = await fs.readdir(generatedDir)
    const prdFiles = files.filter(f => f.endsWith('.md'))

    const prds = await Promise.all(
      prdFiles.map(async (file) => {
        const filePath = path.join(generatedDir, file)
        const content = await fs.readFile(filePath, 'utf-8')
        const { data } = matter(content)

        return {
          id: crypto.randomUUID(),
          projectSlug,
          templateId: data.templateId || 'unknown',
          filename: file,
          content,
          generatedAt: data.generatedAt || new Date().toISOString(),
          contextUsed: data.contextUsed || [],
        } as GeneratedPRD
      })
    )

    return prds.sort((a, b) =>
      new Date(b.generatedAt).getTime() - new Date(a.generatedAt).getTime()
    )
  } catch (error) {
    return []
  }
}

/**
 * Save a generated PRD
 */
export async function saveGeneratedPRD(
  projectSlug: string,
  templateId: string,
  content: string,
  contextUsed: string[]
): Promise<GeneratedPRD> {
  const sanitizedSlug = sanitizePath(projectSlug)
  const generatedDir = path.join(PROJECTS_DIR, sanitizedSlug, 'generated')
  await fs.mkdir(generatedDir, { recursive: true })

  const now = new Date()
  const timestamp = now.toISOString().replace(/[:.]/g, '-')
  const filename = `${timestamp}-${templateId}.md`
  const filePath = path.join(generatedDir, filename)

  const fileContent = matter.stringify(content, {
    templateId,
    generatedAt: now.toISOString(),
    contextUsed,
  })

  await fs.writeFile(filePath, fileContent, 'utf-8')

  return {
    id: crypto.randomUUID(),
    projectSlug,
    templateId,
    filename,
    content: fileContent,
    generatedAt: now.toISOString(),
    contextUsed,
  }
}
