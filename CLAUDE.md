# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ergon is a locally-run AI product manager that manages project context from multiple sources and generates professional Product Requirement Documents (PRDs). It uses file-based context management and leverages Claude AI for intelligent document generation.

**Core Philosophy:** Simple, file-based, extensible, developer-friendly.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **UI:** Radix UI primitives + Tailwind CSS
- **Language:** TypeScript (strict mode)
- **AI:** Claude API (Anthropic)
- **Storage:** File-based (no database)

## Architecture Principles

### 1. File-Based Storage System
- **All data stored as files** in `data/` directory
- Projects stored as `data/projects/[slug]/project.json`
- Context stored as `.md` files in hierarchical folders
- Generated PRDs saved to `generated/` with timestamps
- **Critical:** Always validate file paths and handle filesystem errors gracefully

### 2. Modular Source System
The application uses an adapter pattern for context sources:

```typescript
interface ContextSourceAdapter {
  type: string;
  connect(config: Record<string, any>): Promise<void>;
  fetchContext(): Promise<ContextItem[]>;
  sync(projectSlug: string): Promise<void>;
  getConfigSchema(): JSONSchema;
}
```

**Location:** `lib/sources/`
- `base.ts` - Base interface
- `filesystem.ts` - Local filesystem implementation
- Future: GitHub, Google Drive, Notion adapters

### 3. Template-Based PRD Generation
Templates define PRD structure and Claude prompts:

```typescript
interface PRDTemplate {
  id: string;
  sections: TemplateSection[];
  generatePrompt(context: string, userInput: any): string;
  customFields?: CustomField[];
}
```

**Location:** `lib/templates/`
- 4 initial templates: Standard PRD, Technical Spec, Feature Brief, Lean Canvas
- Each template generates specialized Claude prompts
- Context aggregation: All `.md` files from `context/` directory concatenated

### 4. Next.js App Router Structure
- **Server Components by default** - Use Client Components only when needed (interactivity, hooks)
- API routes in `app/api/` for all filesystem and AI operations
- Route structure mirrors feature organization:
  - `/` - Dashboard (project list)
  - `/projects/[projectId]` - Project detail (tabs: overview, context, generated PRDs)
  - `/generate/[projectId]` - PRD generation wizard

## Development Commands

```bash
# Development
npm run dev          # Start dev server on localhost:3000

# Build & Production
npm run build        # Production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking (if configured)
```

## Key Implementation Patterns

### Context File Management
- **Markdown files with frontmatter:**
```markdown
---
title: User Authentication Requirements
type: requirement
tags: [auth, security, mvp]
createdAt: 2024-01-01T00:00:00Z
---

# Content here
```
- Use `gray-matter` for frontmatter parsing
- Lazy load context files for performance
- Implement search across all context files

### AI Integration Pattern
**Location:** `lib/ai/claude-client.ts`

```typescript
// Prompt structure for PRD generation:
// 1. System message with PM role
// 2. Project context (all .md files)
// 3. Template structure
// 4. User inputs
// 5. Additional instructions

// Always stream responses for better UX
// Save generated PRDs to data/projects/[slug]/generated/
```

### File System Operations
**Location:** `app/api/filesystem/route.ts`

- **Always sanitize file paths** - prevent directory traversal
- Validate file extensions before operations
- Handle errors with user-friendly messages
- Return proper HTTP status codes (200, 400, 404, 500)

## Component Architecture

### Radix UI Components to Build
1. **ProjectCard** - Dashboard project display
2. **ContextTree** - Hierarchical file/folder tree with context menus
3. **MarkdownEditor** - Split view editor with live preview
4. **TemplateCard** - Template selection with section preview
5. **PRDPreview** - Rendered markdown display
6. **FileImporter** - Filesystem browser dialog
7. **GenerationProgress** - Streaming generation UI

**Use Radix primitives:** Dialog, Dropdown Menu, Tabs, Card, Button, Input, Select, ScrollArea

### State Management
- **React Context + hooks** for app-level state
- Server Components for data fetching where possible
- Client Components only for interactivity
- No external state management library needed

## Critical Implementation Notes

### Environment Variables
```env
ANTHROPIC_API_KEY=your_api_key_here
NODE_ENV=development
DATA_DIR=./data  # Optional, defaults to ./data
```

### TypeScript Standards
- **Strict mode enabled** - No `any` types
- Define interfaces for all data structures
- Type all API responses and requests
- Use discriminated unions for source adapters and templates

### Error Handling Strategy
- Filesystem errors → Graceful degradation with user notification
- API errors → Retry logic with exponential backoff
- Claude API errors → Show error, allow regeneration
- Validation errors → Inline form validation feedback

### Performance Considerations
- Lazy load context files (don't load all at once)
- Paginate large lists (generated PRDs, context files)
- Debounce search and auto-save operations
- Stream Claude API responses for better perceived performance

### Security Requirements
- **Validate all user inputs** - file names, paths, project names
- **Sanitize file paths** - prevent directory traversal attacks
- Run filesystem operations with minimal privileges
- No user authentication needed (local app)

## Data Flow Patterns

### Project Creation Flow
1. User creates project → Generate slug from name
2. Create `data/projects/[slug]/` directory
3. Create `project.json` with metadata
4. Create `context/` and `generated/` subdirectories
5. Initialize with default context source (filesystem)

### PRD Generation Flow
1. Select project → Load all context from `context/` directory
2. Select template → Show template sections and custom fields
3. User input → Additional instructions, custom field values
4. Generate prompt → Combine context + template + inputs
5. Call Claude API → Stream response to UI
6. Save PRD → `generated/[timestamp]-[template].md`

### Context Import Flow
1. User selects filesystem source
2. Browse local files/directories
3. Select files to import (.md, .txt, code files)
4. Copy to `context/` with preserved directory structure
5. Parse and add frontmatter if missing

## Testing Strategy (When Implementing Tests)
- Unit tests for core logic: context-manager.ts, template generation
- Integration tests for API routes
- E2E tests for critical flows: project creation, PRD generation
- Mock filesystem operations in tests
- Mock Claude API responses

## Common Pitfalls to Avoid
- ❌ Don't load all context files eagerly - use pagination/lazy loading
- ❌ Don't use Client Components unless necessary - default to Server Components
- ❌ Don't store sensitive data in project.json - it's just metadata
- ❌ Don't forget to handle concurrent file operations - use proper locking if needed
- ❌ Don't make Claude API calls from Client Components - use API routes
- ✅ Always validate file paths before filesystem operations
- ✅ Use absolute paths for file operations
- ✅ Handle all promise rejections
- ✅ Provide loading states for all async operations

## Phase-Based Implementation

The project is designed to be built in phases. Refer to `.claude/ergon-claude-spec.md` for detailed phase breakdown:

**Phase 1 (Foundation):** Next.js setup, file storage, basic CRUD
**Phase 2 (Context):** Hierarchical files, markdown editor, import functionality
**Phase 3 (Templates):** Template system, selector UI, configuration forms
**Phase 4 (AI):** Claude integration, streaming, PRD generation
**Phase 5 (Polish):** Search, error handling, keyboard shortcuts, export

Complete one phase before moving to the next. Test thoroughly at each phase boundary.

## Design System & UI/UX Concept

### Design Philosophy
**Professional · Efficient · Human-Centered**

Ergon's design system is crafted specifically for product managers who need to work efficiently across multiple projects. The interface prioritizes clarity, speed, and accessibility while maintaining a modern, professional aesthetic.

### Key Design Principles

1. **Clarity Over Complexity** - Clean layouts with clear information hierarchy
2. **Speed & Efficiency** - Optimized workflows for common PM tasks
3. **Progressive Disclosure** - Show what's needed, hide what's not
4. **Consistent Interactions** - Familiar patterns throughout the application
5. **Accessible by Default** - WCAG 2.1 AA compliance across all components

### Design System Overview

**Color Palette:**
- **Primary:** Indigo (#4f46e5) - Trust, intelligence, professionalism
- **Accent:** Emerald (#10b981) - Success, progress, completion
- **Semantic:** Clear status colors (success, warning, error, info)
- **Dark Mode:** Refined slate-based palette with proper contrast

**Typography:**
- **Font:** Inter - Clean, readable, professional
- **Scale:** Modular 1.250 ratio (Major Third)
- **Hierarchy:** 5 levels of heading + body text variants

**Spacing System:**
- **Base Unit:** 4px for precise control
- **Common Values:** 4, 8, 12, 16, 24, 32, 48, 64px
- **Consistent:** Applied uniformly across all components

**Component Design:**
- Elevated cards with subtle shadows
- Hover states with smooth transitions
- Color-coded status indicators
- Contextual actions on hover
- Loading states for async operations

**Accessibility Features:**
- 4.5:1+ contrast ratios
- Focus-visible indicators
- Keyboard navigation support
- ARIA labels and live regions
- Screen reader optimizations
- Reduced motion support

**Micro-interactions:**
- Spring-based easing (smooth, natural feel)
- Button ripple effects
- Card elevation on hover
- Smooth modal animations
- Progress indicators
- Toast notifications

### Implementation Files

**Complete Design Documentation:**
- `claudedocs/ergon-design-system.md` - Full design system specification
  - Color palette and semantic tokens
  - Typography scale and usage
  - Spacing system and layout grid
  - Component specifications
  - Animation and transitions
  - Accessibility guidelines
  - Dark mode implementation

- `claudedocs/design-implementation-guide.md` - Quick implementation guide
  - Ready-to-use CSS with design tokens
  - Enhanced component code examples
  - Accessibility checklist
  - Performance optimization tips
  - Common patterns reference

### Design Implementation Priority

**Phase 1 (Foundation):** ✓ Complete
- Basic layout structure
- Component primitives (Button, Card)
- Color system integration

**Phase 2 (Enhancement):** Next
- Enhanced ProjectCard with status indicators
- Improved Dashboard layout
- Toast notification system
- Loading states

**Phase 3 (Refinement):** Future
- Micro-interactions and animations
- Dark mode toggle
- Accessibility audit
- Responsive optimization

**Phase 4 (Polish):** Future
- User testing feedback
- Animation refinement
- Performance optimization
- Advanced theming

### Design Goals

**For Product Managers:**
- Quick project overview at a glance
- Efficient context switching
- Clear status and progress tracking
- Easy template selection
- Streamlined PRD generation

**For Developers:**
- Consistent component API
- Reusable design tokens
- Clear documentation
- Type-safe implementations
- Performance-optimized

**For Accessibility:**
- Keyboard-first navigation
- Screen reader friendly
- High contrast support
- Reduced motion option
- Clear focus indicators

---

## Reference Documentation
- Full specification: `.claude/ergon-claude-spec.md`
- Design system: `claudedocs/ergon-design-system.md`
- Implementation guide: `claudedocs/design-implementation-guide.md`
- Next.js App Router: https://nextjs.org/docs/app
- Radix UI: https://www.radix-ui.com/primitives/docs/overview/introduction
- Claude API: https://docs.anthropic.com/en/api/getting-started
