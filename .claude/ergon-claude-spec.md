# Ergon - AI Product Manager

## Project Overview

Ergon is a locally-run AI product manager that intelligently manages project context from multiple sources and generates professional Product Requirement Documents (PRDs). It uses a hierarchical, file-based context management system and leverages Claude AI for intelligent document generation.

**Key Philosophy:** Simple, file-based, extensible, and developer-friendly.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **UI Library:** Radix UI primitives
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **AI:** Claude API (Anthropic)
- **State Management:** React Context + hooks
- **File System:** Node.js `fs` module
- **Database:** None (file-based storage)

---

## Architecture

### Core Principles
1. **File-based context storage** - Everything stored as `.md` files in a structured directory
2. **Modular source system** - Easy to add new context sources (GitHub, Google Drive, etc.)
3. **Template-based generation** - Multiple PRD templates for different use cases
4. **Local-first** - Runs entirely on localhost, no authentication needed
5. **Hierarchical organization** - Projects → Contexts → Generated Documents

### Directory Structure

```
ergon/
├── app/                          # Next.js app directory
│   ├── layout.tsx
│   ├── page.tsx                  # Main dashboard
│   ├── projects/
│   │   └── [projectId]/
│   │       ├── page.tsx          # Project detail view
│   │       └── context/
│   │           └── page.tsx      # Context management
│   ├── generate/
│   │   └── [projectId]/
│   │       └── page.tsx          # PRD generation interface
│   └── api/
│       ├── projects/
│       │   ├── route.ts          # List/create projects
│       │   └── [projectId]/
│       │       ├── route.ts      # Get/update/delete project
│       │       └── context/
│       │           └── route.ts  # Context operations
│       ├── generate/
│       │   └── route.ts          # Generate PRD
│       └── filesystem/
│           └── route.ts          # File system operations
├── components/
│   ├── ui/                       # Radix UI components
│   ├── ProjectCard.tsx
│   ├── ContextTree.tsx
│   ├── TemplateSelector.tsx
│   ├── PRDPreview.tsx
│   └── MarkdownEditor.tsx
├── lib/
│   ├── context-manager.ts        # Core context management logic
│   ├── sources/
│   │   ├── base.ts               # Base source interface
│   │   ├── filesystem.ts         # Local filesystem source
│   │   └── index.ts              # Source registry
│   ├── templates/
│   │   ├── base.ts               # Template interface
│   │   ├── standard-prd.ts
│   │   ├── technical-spec.ts
│   │   ├── feature-brief.ts
│   │   └── index.ts
│   ├── ai/
│   │   ├── claude-client.ts      # Claude API wrapper
│   │   └── prompts.ts            # Prompt templates
│   └── utils.ts
├── data/                         # File-based data storage
│   └── projects/
│       └── [project-slug]/
│           ├── project.json      # Project metadata
│           ├── context/          # Context markdown files
│           │   ├── overview.md
│           │   ├── requirements/
│           │   ├── research/
│           │   └── technical/
│           └── generated/        # Generated PRDs
│               └── [timestamp]-[template].md
└── public/
```

---

## Core Features

### 1. Project Management

**Data Structure (project.json):**
```typescript
interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  contextSources: ContextSource[];
}

interface ContextSource {
  id: string;
  type: 'filesystem' | 'github' | 'gdrive'; // Extensible
  config: Record<string, any>;
  enabled: boolean;
}
```

**Features:**
- Create/read/update/delete projects
- Each project gets its own directory in `data/projects/`
- Automatic slug generation from project name
- Project metadata stored in `project.json`

### 2. Hierarchical Context Management

**Context Storage:**
- All context stored as `.md` files in `data/projects/[slug]/context/`
- Hierarchical folder structure (user can create folders)
- Each `.md` file represents a context piece
- Support for organizing context by category (requirements, research, technical, etc.)

**Context Operations:**
- Add/edit/delete context files
- Organize into folders
- Full-text search across all context
- View context tree structure
- Import context from local filesystem

**File Format:**
```markdown
---
title: User Authentication Requirements
type: requirement
tags: [auth, security, mvp]
createdAt: 2024-01-01T00:00:00Z
updatedAt: 2024-01-02T00:00:00Z
---

# Content here
```

### 3. Context Source System (Modular)

**Base Interface:**
```typescript
interface ContextSourceAdapter {
  type: string;
  name: string;
  
  // Initialize connection
  connect(config: Record<string, any>): Promise<void>;
  
  // Fetch context from source
  fetchContext(): Promise<ContextItem[]>;
  
  // Sync context to local storage
  sync(projectSlug: string): Promise<void>;
  
  // Configuration UI (optional)
  getConfigSchema(): JSONSchema;
}

interface ContextItem {
  title: string;
  content: string;
  metadata: Record<string, any>;
  path: string;
}
```

**Initial Implementation:**
- **Filesystem Source:** Browse and import local files/directories
  - File picker interface
  - Support for .md, .txt, and code files
  - Automatic organization based on directory structure

**Future Sources (stubbed interfaces):**
- GitHub: Issues, PRs, README files
- Google Drive: Docs, Sheets
- Notion: Pages and databases
- Jira: Tickets and epics

### 4. PRD Template System

**Base Template Interface:**
```typescript
interface PRDTemplate {
  id: string;
  name: string;
  description: string;
  category: 'product' | 'technical' | 'feature';
  
  // Sections that make up the template
  sections: TemplateSection[];
  
  // Generate prompt for Claude
  generatePrompt(context: string, userInput: Record<string, any>): string;
  
  // Optional: Custom input fields
  customFields?: CustomField[];
}

interface TemplateSection {
  id: string;
  title: string;
  description: string;
  required: boolean;
}

interface CustomField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'multiselect';
  required: boolean;
  options?: string[];
}
```

**Initial Templates:**

1. **Standard PRD**
   - Executive Summary
   - Problem Statement
   - Goals and Objectives
   - User Personas
   - Requirements (Functional & Non-functional)
   - User Stories
   - Success Metrics
   - Timeline & Milestones
   - Risks & Assumptions

2. **Technical Specification**
   - Overview
   - System Architecture
   - Technical Requirements
   - API Specifications
   - Data Models
   - Security Considerations
   - Performance Requirements
   - Testing Strategy
   - Deployment Plan

3. **Feature Brief**
   - Feature Overview
   - User Problem
   - Proposed Solution
   - User Flow
   - Design Considerations
   - Technical Considerations
   - Success Metrics
   - Timeline

4. **Lean Canvas PRD**
   - Problem
   - Solution
   - Key Metrics
   - Unique Value Proposition
   - Unfair Advantage
   - Channels
   - Customer Segments
   - Cost Structure
   - Revenue Streams

### 5. AI-Powered PRD Generation

**Generation Flow:**
1. User selects project
2. System aggregates all context from `context/` directory
3. User selects template
4. User fills in any custom fields (optional)
5. System generates prompt with:
   - All project context (concatenated .md files)
   - Template structure
   - User inputs
6. Send to Claude API
7. Stream response back to UI
8. Save generated PRD to `generated/` directory with timestamp

**Claude Integration:**
```typescript
interface GeneratePRDRequest {
  projectSlug: string;
  templateId: string;
  customInputs?: Record<string, any>;
  additionalInstructions?: string;
}

interface GeneratePRDResponse {
  content: string;
  templateUsed: string;
  generatedAt: string;
  contextUsed: string[];
  tokenCount?: number;
}
```

**Prompt Structure:**
```
You are an expert product manager helping to create a [TEMPLATE_NAME].

## Project Context
[All context from .md files, organized by folder]

## Template Structure
[Template sections and descriptions]

## User Requirements
[Custom fields from user input]

## Additional Instructions
[User's additional instructions]

Generate a comprehensive [TEMPLATE_NAME] following the template structure above. Use the project context to inform your document, ensuring all details are relevant and specific to this project.
```

---

## UI/UX Design

### Main Dashboard (`/`)
- **Header:** "Ergon" logo, "New Project" button
- **Project Grid:** Cards showing:
  - Project name
  - Description (truncated)
  - Last updated
  - Number of context files
  - Quick actions: View, Generate PRD, Delete
- **Empty State:** "Create your first project" with illustration

### Project Detail View (`/projects/[projectId]`)
- **Tabs:**
  1. Overview
  2. Context Management
  3. Generated PRDs

**Overview Tab:**
- Project metadata (editable)
- Context source configuration
- Recent activity
- Quick stats (# of context files, # of generated PRDs)

**Context Management Tab:**
- **Left Sidebar:** Folder tree view of context files
  - Collapsible folders
  - File icons by type
  - Context menu (right-click): New file, New folder, Delete, Rename
- **Main Area:** Markdown editor for selected file
  - Live preview
  - Metadata editor (frontmatter)
  - Save/Cancel buttons
- **Top Bar:** 
  - Search context
  - Import from filesystem button
  - New file/folder buttons

**Generated PRDs Tab:**
- List of generated PRDs
  - Timestamp
  - Template used
  - Preview (first 200 chars)
- Actions: View, Download, Regenerate, Delete

### PRD Generation View (`/generate/[projectId]`)
- **Step 1: Select Template**
  - Grid of template cards
  - Preview of sections on hover
- **Step 2: Configure**
  - Custom fields from template
  - Additional instructions textarea
  - Context preview (collapsible)
- **Step 3: Generate**
  - Loading state with progress
  - Stream response in real-time
  - Markdown preview
- **Step 4: Review & Save**
  - Edit generated PRD
  - Save to project
  - Download as .md or PDF

---

## UI Components (Radix UI)

Build these reusable components:

1. **ProjectCard** - Card display for projects
2. **ContextTree** - Hierarchical file/folder tree
3. **MarkdownEditor** - Split view editor with preview
4. **TemplateCard** - Template selection card
5. **PRDPreview** - Rendered markdown preview
6. **FileImporter** - File system browser dialog
7. **ContextSearch** - Search with highlighting
8. **GenerationProgress** - Streaming generation UI

Use Radix primitives:
- Dialog (for modals)
- Dropdown Menu (for context menus)
- Tabs
- Card
- Button
- Input/Textarea
- Select
- ScrollArea
- Separator

---

## Implementation Phases

### Phase 1: Foundation (MVP)
1. Set up Next.js project with TypeScript and Tailwind
2. Install and configure Radix UI
3. Create basic file structure
4. Implement file-based project storage
5. Build main dashboard with project CRUD
6. Create project detail view

### Phase 2: Context Management
1. Implement hierarchical context file system
2. Build ContextTree component
3. Create MarkdownEditor component
4. Implement context file CRUD operations
5. Add filesystem source adapter
6. Build file import functionality

### Phase 3: Template System
1. Define template interface
2. Implement 4 initial templates
3. Build template selector UI
4. Create template configuration forms

### Phase 4: AI Integration
1. Set up Claude API client
2. Implement context aggregation
3. Build prompt generation system
4. Create generation UI with streaming
5. Implement PRD storage and viewing

### Phase 5: Polish
1. Add search functionality
2. Improve error handling
3. Add loading states and animations
4. Implement keyboard shortcuts
5. Add export functionality (PDF)
6. Create documentation

### Phase 6: Extensibility (Future)
1. Add GitHub source adapter
2. Add Google Drive source adapter
3. Create plugin system for custom templates
4. Add settings/preferences

---

## Configuration

### Environment Variables
```env
# Claude API
ANTHROPIC_API_KEY=your_api_key_here

# Application
NODE_ENV=development
PORT=3000

# Data Storage (optional, defaults to ./data)
DATA_DIR=./data
```

### Default Configuration
```json
{
  "app": {
    "name": "Ergon",
    "version": "1.0.0",
    "dataDir": "./data"
  },
  "ai": {
    "model": "claude-sonnet-4-20250514",
    "maxTokens": 4096,
    "temperature": 0.7
  },
  "editor": {
    "autoSave": true,
    "autoSaveDelay": 2000
  }
}
```

---

## Key Technical Decisions

1. **Why file-based storage?**
   - Simple, transparent, version-controllable
   - Easy to backup and migrate
   - No database overhead for local app
   - Easy to inspect and debug

2. **Why markdown for context?**
   - Human-readable
   - Easy to edit in any editor
   - Good for version control
   - Supports frontmatter for metadata
   - Natural fit for AI context

3. **Why modular source system?**
   - Easy to add new sources later
   - Clean separation of concerns
   - Testable in isolation
   - Allows for source-specific features

4. **Why template-based generation?**
   - Different products need different PRD formats
   - Reusable and consistent
   - Easy to add custom templates
   - Structured output

---

## Development Guidelines

1. **TypeScript:** Use strict mode, no `any` types
2. **Error Handling:** Always handle errors gracefully with user-friendly messages
3. **Loading States:** Show appropriate loading UI for all async operations
4. **File Operations:** Always validate file paths and handle file system errors
5. **API Routes:** Use proper HTTP status codes and error responses
6. **Security:** Validate all user inputs, sanitize file paths
7. **Performance:** Lazy load context files, paginate large lists
8. **Accessibility:** Follow WCAG guidelines, proper ARIA labels

---

## Getting Started Instructions

### Prerequisites
- Node.js 18+
- npm or yarn
- Anthropic API key

### Initial Setup
1. Create Next.js project: `npx create-next-app@latest ergon --typescript --tailwind --app`
2. Install dependencies: `npm install @radix-ui/react-* date-fns gray-matter marked`
3. Set up environment variables
4. Create initial directory structure
5. Implement Phase 1 features

### Development Workflow
1. Run dev server: `npm run dev`
2. Access at `http://localhost:3000`
3. Data stored in `./data` directory
4. Logs visible in terminal

---

## Success Criteria

The MVP is complete when:
- [ ] Can create and manage multiple projects
- [ ] Can add/edit/delete context files in hierarchical structure
- [ ] Can import files from local filesystem
- [ ] Can select from 4 different PRD templates
- [ ] Can generate PRDs using Claude API
- [ ] Generated PRDs are saved and viewable
- [ ] All UI components are functional and responsive
- [ ] Error handling is robust
- [ ] Code is well-documented

---

## Future Enhancements

- [ ] GitHub integration for issues/PRs
- [ ] Google Drive integration
- [ ] Notion integration
- [ ] Custom template creator UI
- [ ] Version history for PRDs
- [ ] Collaborative features (if deployed)
- [ ] PDF export with styling
- [ ] Context analytics (token usage, coverage)
- [ ] AI suggestions for missing context
- [ ] Template marketplace

---

## Notes for Claude Code

- Build incrementally, test each feature before moving on
- Use TypeScript strict mode throughout
- Implement proper error boundaries in React
- Add comprehensive logging for debugging
- Create reusable utility functions
- Follow Next.js App Router best practices
- Use Server Components where appropriate, Client Components only when needed
- Optimize for local development experience
- Keep the file-based storage simple and transparent

Good luck building Ergon! 🏛️
