# Ergon Design System - Implementation Guide

Quick reference guide for implementing the Ergon design system in the codebase.

---

## Quick Start: Updated globals.css

Replace the current `/app/globals.css` with this enhanced version:

```css
@import "tailwindcss";

@theme {
  /* ========================================
     COLOR SYSTEM
     ======================================== */

  /* Brand Colors */
  --color-brand-primary: #4f46e5;
  --color-brand-primary-hover: #4338ca;
  --color-brand-primary-light: #eef2ff;
  --color-brand-accent: #10b981;
  --color-brand-warning: #f59e0b;
  --color-brand-error: #ef4444;

  /* Light Mode Colors */
  --color-background: #ffffff;
  --color-foreground: #111827;
  --color-surface: #f9fafb;
  --color-surface-elevated: #ffffff;

  /* Primary */
  --color-primary: #4f46e5;
  --color-primary-foreground: #ffffff;

  /* Secondary */
  --color-secondary: #f4f4f5;
  --color-secondary-foreground: #18181b;

  /* Muted */
  --color-muted: #f4f4f5;
  --color-muted-foreground: #6b7280;

  /* Accent */
  --color-accent: #f4f4f5;
  --color-accent-foreground: #18181b;

  /* Destructive */
  --color-destructive: #ef4444;
  --color-destructive-foreground: #ffffff;

  /* Borders */
  --color-border: #e5e7eb;
  --color-border-light: #f3f4f6;
  --color-input: #e5e7eb;
  --color-ring: #4f46e5;

  /* Card */
  --color-card: #ffffff;
  --color-card-foreground: #111827;

  /* Status Colors */
  --color-success: #10b981;
  --color-success-bg: #d1fae5;
  --color-warning: #f59e0b;
  --color-warning-bg: #fef3c7;
  --color-error: #ef4444;
  --color-error-bg: #fee2e2;
  --color-info: #3b82f6;
  --color-info-bg: #dbeafe;

  /* ========================================
     SPACING SYSTEM
     ======================================== */

  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */

  /* ========================================
     TYPOGRAPHY
     ======================================== */

  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* ========================================
     BORDER RADIUS
     ======================================== */

  --radius-sm: 0.25rem;  /* 4px */
  --radius: 0.5rem;      /* 8px - default */
  --radius-md: 0.5rem;   /* 8px */
  --radius-lg: 0.75rem;  /* 12px */
  --radius-xl: 1rem;     /* 16px */
  --radius-full: 9999px;

  /* ========================================
     SHADOWS
     ======================================== */

  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* Colored Shadows */
  --shadow-primary: 0 8px 16px -4px rgba(79, 70, 229, 0.2);
  --shadow-success: 0 8px 16px -4px rgba(16, 185, 129, 0.2);

  /* ========================================
     TRANSITIONS
     ======================================== */

  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 350ms;

  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ========================================
   DARK MODE
   ======================================== */

@media (prefers-color-scheme: dark) {
  @theme {
    --color-background: #0f172a;
    --color-foreground: #f1f5f9;
    --color-surface: #1e293b;
    --color-surface-elevated: #334155;

    --color-primary: #6366f1;
    --color-primary-foreground: #ffffff;

    --color-secondary: #334155;
    --color-secondary-foreground: #f1f5f9;

    --color-muted: #334155;
    --color-muted-foreground: #94a3b8;

    --color-accent: #334155;
    --color-accent-foreground: #f1f5f9;

    --color-border: #334155;
    --color-border-light: #475569;
    --color-input: #334155;
    --color-ring: #6366f1;

    --color-card: #1e293b;
    --color-card-foreground: #f1f5f9;

    /* Adjust shadows for dark mode */
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4);
  }
}

/* Manual dark mode toggle support */
[data-theme="dark"] {
  color-scheme: dark;
}

/* ========================================
   BASE STYLES
   ======================================== */

* {
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-background);
  color: var(--color-foreground);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ========================================
   UTILITY CLASSES
   ======================================== */

/* Typography */
.text-balance {
  text-wrap: balance;
}

.text-pretty {
  text-wrap: pretty;
}

/* Focus styles for accessibility */
.focus-ring:focus-visible {
  outline: 2px solid var(--color-ring);
  outline-offset: 2px;
}

/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* ========================================
   ANIMATIONS
   ======================================== */

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ========================================
   COMPONENT FOUNDATIONS
   ======================================== */

/* Enhanced card hover */
.card-interactive {
  transition: all var(--duration-normal) var(--ease-in-out);
}

.card-interactive:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Button base */
.btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all var(--duration-fast) var(--ease-out);
  cursor: pointer;
}

.btn-base:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-base:active:not(:disabled) {
  transform: scale(0.98);
}

/* Input base */
.input-base {
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  transition: all var(--duration-fast) var(--ease-out);
}

.input-base:focus {
  outline: none;
  border-color: var(--color-ring);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

/* Status indicators */
.status-active::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-success);
  margin-right: 0.5rem;
}

.status-warning::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-warning);
  margin-right: 0.5rem;
}

.status-error::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-error);
  margin-right: 0.5rem;
}
```

---

## Component Update Examples

### 1. Enhanced Button Component

Update `/components/ui/button.tsx`:

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-border",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",
        success:
          "bg-success text-white shadow-sm hover:opacity-90 hover:shadow-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### 2. Enhanced Card Component

Update `/components/ui/card.tsx`:

```typescript
import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  bordered?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, bordered = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg bg-card text-card-foreground shadow-sm transition-all duration-250",
        bordered && "border border-border-light",
        hover && "hover:shadow-lg hover:-translate-y-1 cursor-pointer",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2 p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

### 3. Enhanced ProjectCard

Update `/components/ProjectCard.tsx`:

```typescript
'use client'

import Link from 'next/link'
import { Project } from '@/lib/types'
import { formatRelativeTime, truncate } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Trash2, FolderOpen, MoreVertical, Star } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

interface ProjectCardProps {
  project: Project
  onDelete?: (slug: string) => void
  onFavorite?: (slug: string) => void
}

export function ProjectCard({ project, onDelete, onFavorite }: ProjectCardProps) {
  return (
    <Card hover className="relative group">
      {/* Status indicator bar at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
        style={{
          background: 'linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-accent))'
        }}
      />

      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="flex-1">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-primary transition-colors"
            >
              {project.name}
            </Link>
          </CardTitle>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="More options"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[160px] bg-surface-elevated border border-border rounded-lg shadow-lg p-1"
                sideOffset={5}
              >
                <DropdownMenu.Item
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent cursor-pointer outline-none"
                  onClick={() => onFavorite?.(project.slug)}
                >
                  <Star className="h-4 w-4" />
                  <span>Favorite</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-px bg-border my-1" />
                <DropdownMenu.Item
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-destructive/10 text-destructive cursor-pointer outline-none"
                  onClick={() => onDelete?.(project.slug)}
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        <CardDescription>
          {truncate(project.description || 'No description', 100)}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <FolderOpen className="h-4 w-4" />
            <span>{project.contextSources.length} source{project.contextSources.length !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileText className="h-4 w-4" />
            <span>0 PRDs</span>
          </div>
        </div>

        <div className="mt-3 text-xs text-muted-foreground">
          Updated {formatRelativeTime(project.updatedAt)}
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild size="sm" variant="outline" className="flex-1">
          <Link href={`/projects/${project.slug}`}>
            <FolderOpen className="h-4 w-4" />
            Open
          </Link>
        </Button>
        <Button asChild size="sm" variant="default" className="flex-1">
          <Link href={`/generate/${project.slug}`}>
            <FileText className="h-4 w-4" />
            Generate PRD
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
```

---

## Quick Wins: Immediate Visual Improvements

### 1. Add Page Container

Create `/components/layout/Container.tsx`:

```typescript
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function Container({ size = 'xl', className, children, ...props }: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
```

### 2. Add Page Header Component

Create `/components/layout/PageHeader.tsx`:

```typescript
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  action?: React.ReactNode
  breadcrumbs?: React.ReactNode
  className?: string
}

export function PageHeader({
  title,
  description,
  action,
  breadcrumbs,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-8", className)}>
      {breadcrumbs && (
        <div className="mb-3">
          {breadcrumbs}
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground text-lg">
              {description}
            </p>
          )}
        </div>

        {action && (
          <div className="flex-shrink-0">
            {action}
          </div>
        )}
      </div>
    </div>
  )
}
```

### 3. Update Dashboard to Use New Components

Update `/components/Dashboard.tsx`:

```typescript
// Add at top
import { Container } from './layout/Container'
import { PageHeader } from './layout/PageHeader'

// Replace the main return with:
return (
  <Container>
    <PageHeader
      title="Projects"
      description="Manage your product projects and contexts"
      action={
        <Button onClick={() => setShowCreateDialog(true)}>
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      }
    />

    {projects.length === 0 ? (
      <div className="flex items-center justify-center min-h-[400px] border-2 border-dashed border-border rounded-lg bg-surface/50">
        <div className="text-center p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <FolderOpen className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
          <p className="text-muted-foreground mb-6 max-w-sm">
            Create your first project to start managing context and generating PRDs
          </p>
          <Button onClick={() => setShowCreateDialog(true)}>
            <Plus className="h-4 w-4" />
            Create Your First Project
          </Button>
        </div>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onDelete={handleDelete}
          />
        ))}
      </div>
    )}

    {/* Dialog remains the same */}
  </Container>
)
```

---

## Accessibility Checklist

- [ ] All interactive elements have focus-visible states
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 for normal text)
- [ ] All images have alt text
- [ ] Form inputs have associated labels
- [ ] ARIA labels for icon-only buttons
- [ ] Keyboard navigation works for all features
- [ ] Screen reader announcements for dynamic content
- [ ] Skip to content link implemented
- [ ] Error messages are descriptive and linked to inputs
- [ ] Loading states announced to screen readers

---

## Performance Optimization

### Image Optimization
```typescript
import Image from 'next/image'

<Image
  src="/project-icon.png"
  alt="Project icon"
  width={64}
  height={64}
  loading="lazy"
  placeholder="blur"
/>
```

### Component Lazy Loading
```typescript
import dynamic from 'next/dynamic'

const MarkdownEditor = dynamic(() => import('./MarkdownEditor'), {
  loading: () => <LoadingSkeleton />,
  ssr: false,
})
```

### Font Optimization
Update `/app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

---

## Testing Your Implementation

### Visual Regression Testing
```bash
# Install Playwright
npm install -D @playwright/test

# Create tests/visual.spec.ts
test('dashboard matches design', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page).toHaveScreenshot('dashboard.png')
})
```

### Accessibility Testing
```bash
# Install axe
npm install -D @axe-core/playwright

# Add to tests
import { injectAxe, checkA11y } from 'axe-playwright'

test('dashboard is accessible', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await injectAxe(page)
  await checkA11y(page)
})
```

---

## Common Patterns Reference

### Loading States
```typescript
{loading ? (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
  </div>
) : (
  <Content />
)}
```

### Empty States
```typescript
<div className="text-center p-8 border-2 border-dashed border-border rounded-lg bg-surface/50">
  <Icon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
  <h3 className="text-lg font-semibold mb-2">No items found</h3>
  <p className="text-muted-foreground mb-4">Get started by creating your first item</p>
  <Button>Create Item</Button>
</div>
```

### Status Badges
```typescript
const statusColors = {
  active: 'bg-success/10 text-success border-success/20',
  draft: 'bg-warning/10 text-warning border-warning/20',
  archived: 'bg-muted text-muted-foreground border-border',
}

<span className={cn(
  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
  statusColors[status]
)}>
  {status}
</span>
```

---

## Resources

- Design System Document: `/claudedocs/ergon-design-system.md`
- Tailwind Docs: https://tailwindcss.com/docs
- Radix UI Primitives: https://www.radix-ui.com/primitives
- Accessibility Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Color Contrast Checker: https://colourcontrast.cc/
