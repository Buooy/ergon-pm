# Ergon - AI Product Manager

A locally-run AI product manager that intelligently manages project context from multiple sources and generates professional Product Requirement Documents (PRDs) using Claude AI.

## Features

- 📁 **File-based Storage** - Simple, transparent project management without databases
- 📝 **Context Management** - Hierarchical markdown files for organizing project context
- 🤖 **AI-Powered PRDs** - Generate professional documents using Claude AI
- 🎨 **Modern UI** - Built with Next.js, Tailwind CSS, and Radix UI
- 🔌 **Extensible Sources** - Modular adapter system for multiple context sources

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **UI:** Radix UI + Tailwind CSS v4
- **Language:** TypeScript (strict mode)
- **AI:** Claude API (Anthropic)
- **Storage:** File-based (no database required)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Anthropic API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ergon-pm
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Add your Anthropic API key to `.env`:
```env
ANTHROPIC_API_KEY=your_api_key_here
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
ergon/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── projects/      # Project CRUD operations
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Dashboard page
├── components/            # React components
│   ├── ui/               # Radix UI components
│   ├── Dashboard.tsx     # Main dashboard
│   └── ProjectCard.tsx   # Project card component
├── lib/                   # Core utilities
│   ├── types.ts          # TypeScript interfaces
│   ├── storage.ts        # File-based storage
│   └── utils.ts          # Helper functions
└── data/                  # File-based data storage
    └── projects/         # Project directories
        └── [slug]/
            ├── project.json
            ├── context/  # Context markdown files
            └── generated/ # Generated PRDs
```

## Phase 1 Complete ✓

### Implemented Features

- ✓ Next.js 14+ setup with TypeScript and Tailwind CSS v4
- ✓ File-based project storage system
- ✓ Complete project CRUD operations
- ✓ Dashboard with project listing
- ✓ Project creation dialog
- ✓ Project deletion with confirmation
- ✓ Responsive card-based layout
- ✓ API routes for all operations

### Upcoming Phases

- **Phase 2:** Context Management (hierarchical files, markdown editor, import)
- **Phase 3:** Template System (PRD templates, selector UI)
- **Phase 4:** AI Integration (Claude API, PRD generation, streaming)
- **Phase 5:** Polish (search, error handling, keyboard shortcuts, export)

## Data Storage

All project data is stored as files in the `data/` directory:

- **Projects:** `data/projects/[slug]/project.json`
- **Context:** `data/projects/[slug]/context/*.md`
- **Generated PRDs:** `data/projects/[slug]/generated/*.md`

This makes the data:
- Easy to backup and migrate
- Version-controllable
- Human-readable
- Transparent and debuggable

## API Endpoints

- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/[slug]` - Get project details
- `PATCH /api/projects/[slug]` - Update project
- `DELETE /api/projects/[slug]` - Delete project
- `GET /api/projects/[slug]/context` - List context files
- `POST /api/projects/[slug]/context` - Create/update context file
- `DELETE /api/projects/[slug]/context` - Delete context file

## Development Guidelines

- **TypeScript:** Strict mode, no `any` types
- **Error Handling:** User-friendly messages for all errors
- **File Paths:** Always validate and sanitize
- **Server Components:** Use by default, Client Components only when needed
- **Security:** Validate inputs, prevent directory traversal

## License

ISC

## Contributing

This is currently a private project. Contributions guidelines will be added in the future.
