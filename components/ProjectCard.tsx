'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Project } from '@/lib/types'
import { formatRelativeTime, truncate } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { FileText, Trash2, FolderOpen, MoreVertical, ExternalLink, Calendar, Layers } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface ProjectCardProps {
  project: Project
  onDelete?: (slug: string) => void
}

export function ProjectCard({ project, onDelete }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="group relative bg-white rounded-2xl border-2 border-border overflow-hidden shadow-editorial shadow-editorial-hover transition-all duration-300 hover:border-primary/20 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-80" />

      {/* Header section with asymmetric layout */}
      <div className="p-6 pb-4 flex-1">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            {/* Project name - editorial typography */}
            <Link
              href={`/projects/${project.slug}`}
              className="block group/title"
            >
              <h3 className="font-display text-2xl font-semibold mb-2 text-foreground group-hover/title:text-primary transition-colors leading-tight">
                {project.name}
                <ExternalLink className={`inline-block ml-2 h-4 w-4 transition-all ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
              </h3>
            </Link>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-sm">
              {truncate(project.description || 'No description provided yet', 120)}
            </p>
          </div>

          {/* Actions dropdown */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <MoreVertical className="h-5 w-5" />
                <span className="sr-only">Project options</span>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[180px] bg-white rounded-xl border border-border shadow-editorial-lg p-1.5 z-50"
                sideOffset={5}
              >
                <DropdownMenu.Item asChild>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-muted cursor-pointer outline-none"
                  >
                    <FolderOpen className="mr-2 h-4 w-4" />
                    Open Project
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    href={`/generate/${project.slug}`}
                    className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-muted cursor-pointer outline-none"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Generate PRD
                  </Link>
                </DropdownMenu.Item>
                {onDelete && (
                  <>
                    <DropdownMenu.Separator className="my-1.5 h-px bg-border" />
                    <DropdownMenu.Item
                      onSelect={() => {
                        if (confirm('Are you sure you want to delete this project? This cannot be undone.')) {
                          onDelete(project.slug)
                        }
                      }}
                      className="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-destructive/10 text-destructive cursor-pointer outline-none"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Project
                    </DropdownMenu.Item>
                  </>
                )}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        {/* Metadata section with visual hierarchy */}
        <div className="flex items-center gap-4 py-3 border-t border-b border-border/50">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Layers className="h-4 w-4 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground">
                {project.contextSources.length}
              </div>
              <div className="text-xs text-muted-foreground">
                {project.contextSources.length === 1 ? 'Source' : 'Sources'}
              </div>
            </div>
          </div>

          <div className="h-10 w-px bg-border" />

          <div className="flex items-center gap-2 text-sm flex-1 min-w-0">
            <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <div className="text-muted-foreground truncate">
              {formatRelativeTime(project.updatedAt)}
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons - asymmetric layout */}
      <div className="p-6 pt-4 bg-gradient-to-b from-transparent to-muted/20">
        <div className="flex items-center gap-3">
          <Link href={`/projects/${project.slug}`} className="flex-1">
            <Button
              variant="outline"
              className="w-full border-2 hover:border-primary hover:bg-primary/5 transition-all font-medium"
            >
              <FolderOpen className="mr-2 h-4 w-4" />
              Open
            </Button>
          </Link>
          <Link href={`/generate/${project.slug}`} className="flex-1">
            <Button
              className="w-full bg-primary hover:bg-primary/90 shadow-editorial transition-all font-medium group/btn"
            >
              <FileText className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
              Generate
            </Button>
          </Link>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/5 to-transparent rounded-tr-full" />
      </div>
    </article>
  )
}
