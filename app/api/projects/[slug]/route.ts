import { NextRequest, NextResponse } from 'next/server'
import { getProject, updateProject, deleteProject } from '@/lib/storage'

interface RouteContext {
  params: Promise<{
    slug: string
  }>
}

/**
 * GET /api/projects/[slug]
 * Get a single project
 */
export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const { slug } = await context.params
    const project = await getProject(slug)

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(project)
  } catch (error: any) {
    console.error('Error fetching project:', error)
    return NextResponse.json(
      { error: 'Failed to fetch project', message: error.message },
      { status: 500 }
    )
  }
}

/**
 * PATCH /api/projects/[slug]
 * Update a project
 */
export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const { slug } = await context.params
    const body = await request.json()

    const project = await updateProject(slug, body)
    return NextResponse.json(project)
  } catch (error: any) {
    console.error('Error updating project:', error)

    if (error.message.includes('not found')) {
      return NextResponse.json(
        { error: error.message },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to update project', message: error.message },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/projects/[slug]
 * Delete a project
 */
export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    const { slug } = await context.params
    await deleteProject(slug)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error deleting project:', error)
    return NextResponse.json(
      { error: 'Failed to delete project', message: error.message },
      { status: 500 }
    )
  }
}
