'use client'

import { useState, useEffect } from 'react'
import { Project } from '@/lib/types'
import { ProjectCard } from './ProjectCard'
import { Button } from './ui/button'
import { Plus, Loader2, FolderOpen, FileText } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

export function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [creating, setCreating] = useState(false)
  const [formData, setFormData] = useState({ name: '', description: '' })

  useEffect(() => {
    loadProjects()
  }, [])

  async function loadProjects() {
    try {
      const response = await fetch('/api/projects')
      if (response.ok) {
        const data = await response.json()
        setProjects(data)
      }
    } catch (error) {
      console.error('Failed to load projects:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleCreate() {
    if (!formData.name.trim()) return

    setCreating(true)
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const newProject = await response.json()
        setProjects([...projects, newProject])
        setShowCreateDialog(false)
        setFormData({ name: '', description: '' })
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to create project')
      }
    } catch (error) {
      console.error('Failed to create project:', error)
      alert('Failed to create project')
    } finally {
      setCreating(false)
    }
  }

  async function handleDelete(slug: string) {
    if (!confirm('Are you sure you want to delete this project? This cannot be undone.')) {
      return
    }

    try {
      const response = await fetch(`/api/projects/${slug}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setProjects(projects.filter(p => p.slug !== slug))
      } else {
        alert('Failed to delete project')
      }
    } catch (error) {
      console.error('Failed to delete project:', error)
      alert('Failed to delete project')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary animate-glow-pulse" />
      </div>
    )
  }

  return (
    <div>
      {/* Section header with stats */}
      <div className="mb-10 md:mb-16 animate-slide-right">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6 md:gap-8 mb-6">
          <div className="flex-1">
            <h2 className="display-lg mb-2 md:mb-3 font-display">Your Projects</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
              Organize context, manage sources, and generate professional PRDs
            </p>
          </div>

          <Button
            onClick={() => setShowCreateDialog(true)}
            className="bg-gradient-jade hover:shadow-jade transition-all duration-300 px-5 py-3 md:px-6 md:py-6 text-sm md:text-base font-medium whitespace-nowrap self-start sm:self-auto"
          >
            <Plus className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            New Project
          </Button>
        </div>

        {/* Stats bar */}
        {projects.length > 0 && (
          <div className="flex flex-wrap items-center gap-4 md:gap-6 px-5 py-4 md:px-8 md:py-5 bg-surface-elevated/80 backdrop-blur-sm rounded-2xl border border-border shadow-atmospheric">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                <FolderOpen className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-foreground font-display">{projects.length}</div>
                <div className="text-xs md:text-sm text-secondary-foreground font-body">Active Projects</div>
              </div>
            </div>

            <div className="hidden sm:block h-8 md:h-10 w-px bg-border/50" />

            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                <FileText className="h-4 w-4 md:h-5 md:w-5 text-accent" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-foreground font-display">
                  {projects.reduce((sum, p) => sum + p.contextSources.length, 0)}
                </div>
                <div className="text-xs md:text-sm text-secondary-foreground font-body">Context Sources</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {projects.length === 0 ? (
        <div className="flex items-center justify-center min-h-[500px] animate-scale-in">
          <div className="text-center max-w-md">
            {/* Empty state illustration */}
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-gradient-mesh animate-glow-pulse" />
                <FolderOpen className="h-16 w-16 text-primary/60 relative z-10" />
              </div>
              <div className="absolute top-0 right-1/4 w-4 h-4 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="absolute bottom-0 left-1/4 w-3 h-3 rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>

            <h3 className="display-md mb-3 font-display">Start Your First Project</h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed font-body">
              Create a project to organize context from multiple sources
              and generate professional product requirement documents.
            </p>
            <Button
              onClick={() => setShowCreateDialog(true)}
              className="bg-gradient-jade hover:shadow-jade transition-all duration-300 px-8 py-6 text-base font-medium"
            >
              <Plus className="mr-2 h-5 w-5" />
              Create Your First Project
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 lg:gap-12 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard
                project={project}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      )}

      <Dialog.Root open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[520px] translate-x-[-50%] translate-y-[-50%] rounded-3xl border border-border bg-card p-8 shadow-jade data-[state=open]:animate-scale-in relative overflow-hidden">
            {/* Atmospheric gradient overlay */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />

            <div className="mb-6 relative z-10">
              <Dialog.Title className="display-md mb-2 font-display">
                New Project
              </Dialog.Title>
              <Dialog.Description className="text-base text-muted-foreground font-body">
                Create a new product project to organize context and generate PRDs.
              </Dialog.Description>
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="text-sm font-semibold block mb-3 text-foreground font-body">
                  Project Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-border bg-surface rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base text-foreground font-body placeholder:text-muted-foreground"
                  placeholder="My Product"
                  disabled={creating}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && formData.name.trim()) {
                      handleCreate()
                    }
                  }}
                />
              </div>

              <div>
                <label htmlFor="description" className="text-sm font-semibold block mb-3 text-foreground font-body">
                  Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-border bg-surface rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none text-base text-foreground font-body placeholder:text-muted-foreground"
                  placeholder="What are you building?"
                  rows={4}
                  disabled={creating}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-border/50 relative z-10">
              <Button
                variant="outline"
                onClick={() => setShowCreateDialog(false)}
                disabled={creating}
                className="px-6 py-2.5 font-medium border-2 border-border hover:border-primary hover:bg-primary/10"
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreate}
                disabled={!formData.name.trim() || creating}
                className="bg-gradient-jade hover:shadow-jade transition-all duration-300 px-6 py-2.5 font-medium"
              >
                {creating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Project
                  </>
                )}
              </Button>
            </div>

            <Dialog.Close className="absolute right-6 top-6 rounded-lg p-2 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
              <span className="sr-only">Close</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
