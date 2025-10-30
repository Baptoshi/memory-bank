# Memory Bank

A minimal, systemic web platform built to expose `.md` memory templates for the developer community.

## Architecture

Memory Bank is not documentation — it is an **architecture of reasoning**, designed to:

- Expose, copy, and export `.md` templates directly from a clean UI.
- Demonstrate how structured memory improves AI cognition.
- Serve as a reference implementation for developers using Cursor as a reasoning environment.

## Stack

- **Frontend:** Next.js 14, React 19, TypeScript (strict)
- **Styling:** TailwindCSS with Bauhaus-inspired design system
- **Backend:** Node.js, Express, Prisma ORM
- **Database:** PostgreSQL
- **Hosting:** Vercel (frontend), Railway (backend)

## Getting Started

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Design Philosophy

The project follows a **Bauhaus–systemic aesthetic**:

- Minimal, geometric, and balanced.
- Silence, order, and hierarchy replace ornament.
- Text and interface both express thought.

**Tone:** calm, precise, impersonal.  
**Goal:** to make structure perceptible.

## Project Structure

```
memory-bank/
├── app/              # Next.js routes and pages
├── components/       # UI primitives and composites
├── lib/              # System logic and utilities
├── styles/           # Global CSS and design tokens
├── prisma/           # Database schema and migrations
└── .cursor/          # Cognitive memory modules
    └── .memorybank/  # Architecture, design, development docs
```

## Memory Architecture

The `.cursor/.memorybank/` directory contains eight cognitive modules that define the system's reasoning framework:

- `architecture.md` — System structure and data flow
- `folder-structure.md` — Repository organization
- `tech-stack.md` — Technological foundation
- `design-doc.md` — Visual language and principles
- `development-guidelines.md` — Coding standards
- `implementation-plan.md` — Roadmap and phases
- `development-progress.md` — Current metrics and tasks
- `deployment-checklist.md` — Validation pipeline

## License

MIT

## Maintainer

Reputable Tech

