import { NextRequest, NextResponse } from 'next/server'
import { getContextFiles, getContextFile, saveContextFile, deleteContextFile } from '@/lib/storage'

interface RouteContext {
  params: Promise<{
    slug: string
  }>
}

/**
 * GET /api/projects/[slug]/context
 * List all context files for a project
 */
export async function GET(request: NextRequest, context: RouteContext) {
  try {
    const { slug } = await context.params
    const { searchParams } = new URL(request.url)
    const dir = searchParams.get('dir') || ''

    const files = await getContextFiles(slug, dir)
    return NextResponse.json(files)
  } catch (error: any) {
    console.error('Error fetching context files:', error)
    return NextResponse.json(
      { error: 'Failed to fetch context files', message: error.message },
      { status: 500 }
    )
  }
}

/**
 * POST /api/projects/[slug]/context
 * Create or update a context file
 */
export async function POST(request: NextRequest, context: RouteContext) {
  try {
    const { slug } = await context.params
    const body = await request.json()
    const { path: filePath, ...file } = body

    if (!filePath || typeof filePath !== 'string') {
      return NextResponse.json(
        { error: 'File path is required' },
        { status: 400 }
      )
    }

    const savedFile = await saveContextFile(slug, filePath, file)
    return NextResponse.json(savedFile, { status: 201 })
  } catch (error: any) {
    console.error('Error saving context file:', error)
    return NextResponse.json(
      { error: 'Failed to save context file', message: error.message },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/projects/[slug]/context
 * Delete a context file
 */
export async function DELETE(request: NextRequest, context: RouteContext) {
  try {
    const { slug } = await context.params
    const { searchParams } = new URL(request.url)
    const filePath = searchParams.get('path')

    if (!filePath) {
      return NextResponse.json(
        { error: 'File path is required' },
        { status: 400 }
      )
    }

    await deleteContextFile(slug, filePath)
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error deleting context file:', error)
    return NextResponse.json(
      { error: 'Failed to delete context file', message: error.message },
      { status: 500 }
    )
  }
}
