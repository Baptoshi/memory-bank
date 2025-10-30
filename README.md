# Memory Bank

[![GitHub](https://img.shields.io/badge/GitHub-Baptoshi%2Fmemory--bank-blue?logo=github)](https://github.com/Baptoshi/memory-bank)
[![Version](https://img.shields.io/badge/version-1.1.1-green)]()
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)]()

A minimal, systemic web platform built to expose `.md` memory templates for the developer community.

## What is a Procedural Memory Bank?

A **procedural memory bank** is not documentation—it is a cognitive architecture. Each `.md` file represents a **reasoning boundary**, not a narrative. The system defines how AI assistants internalize context, structure thought, and execute tasks with precision and traceability.

Instead of reading instructions, the AI *activates* memory modules that shape its behavior, architecture decisions, and development workflow. This creates consistency, reduces token waste, and enforces systemic reasoning across sessions.

## Architecture

Memory Bank is not documentation — it is an **architecture of reasoning**, designed to:

- Expose, copy, and export `.md` templates directly from a clean UI.
- Demonstrate how structured memory improves AI cognition.
- Serve as a reference implementation for developers using Cursor as a reasoning environment.

## Stack

- **Frontend:** Next.js 14.2, React 18.3, TypeScript 5.5 (strict)
- **Styling:** TailwindCSS 3.4 with Bauhaus design system
- **Content:** Markdown with gray-matter + react-markdown
- **Database:** Prisma 5.18 + PostgreSQL (schema defined, migrations pending)
- **Testing:** Vitest (unit), Playwright (E2E)
- **CI/CD:** GitHub Actions
- **Hosting:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js ≥20.0.0
- npm ≥10.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/Baptoshi/memory-bank.git
cd memory-bank

# Install dependencies
npm install

# Setup environment (optional - works without database)
cp env.example .env

# Run development server
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm test             # Run Vitest unit tests
npm run test:e2e     # Run Playwright E2E tests
npm run prisma:generate  # Generate Prisma Client
```

### First Time Setup

**We recommend reading the guide first:**

Visit [http://localhost:3000/guide](http://localhost:3000/guide) after starting the dev server to understand the Memory Bank architecture and workflow.

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
├── app/
│   ├── api/              # API routes (templates, libraries, export)
│   ├── guide/            # Onboarding guide (8 steps)
│   ├── library/          # General template library
│   ├── libraries/        # Multi-domain Memory Banks
│   └── about/            # Project philosophy
├── components/
│   ├── ui/               # Button, Card, Badge primitives
│   ├── layout/           # Header, Footer, Container
│   ├── template/         # Template cards and grids
│   ├── guide/            # Guide navigation and content
│   └── domain/           # Domain selection cards
├── lib/
│   ├── memory.ts         # Template loader
│   ├── guide-data.ts     # Guide metadata
│   ├── domains.ts        # Domain definitions
│   └── types.ts          # TypeScript interfaces
├── guide/                # Guide markdown content (01-08)
├── styles/               # Global CSS + Bauhaus tokens
├── prisma/               # Database schema (for future persistence)
└── .cursor/
    └── memory-bank/      # 8 cognitive modules (architecture, design, etc.)
```

## Memory Architecture

The `.cursor/memory-bank/` directory contains eight cognitive modules that define the system's reasoning framework:

| Module | Purpose |
|--------|---------|
| `architecture.md` | System structure and data flow |
| `folder-structure.md` | Repository organization |
| `tech-stack.md` | Technological foundation |
| `design-doc.md` | Visual language and Bauhaus principles |
| `development-guidelines.md` | Coding standards and workflow |
| `implementation-plan.md` | Development roadmap |
| `development-progress.md` | Current metrics and tasks |
| `deployment-checklist.md` | Validation and deployment pipeline |

These modules are loaded by AI assistants (via Cursor) to maintain architectural consistency and systemic reasoning throughout development.

## Features

✅ **8-Step Onboarding Guide** — Interactive step-by-step walkthrough  
✅ **Template Library** — Browse and copy 8 core memory modules  
✅ **Multi-Domain Support** — Domain-specific Memory Banks (Web App, SaaS, AI Tool, etc.)  
✅ **Copy to Clipboard** — One-click template copying with visual feedback  
✅ **Markdown Export** — Download templates as `.md` files  
✅ **Bauhaus Design** — Minimalist, geometric, functional aesthetic  
✅ **Fully Typed** — TypeScript strict mode throughout  
✅ **Responsive** — Mobile-first, accessible design

## Documentation

- **[INIT.md](./INIT.md)** — Phase 1: Initialization summary
- **[IMPLEMENTATION.md](./IMPLEMENTATION.md)** — Phase 3: Implementation details
- **[GUIDE-IMPLEMENTATION.md](./GUIDE-IMPLEMENTATION.md)** — Guide system architecture
- **[PHASE-4-RUNTIME-VERIFICATION.md](./PHASE-4-RUNTIME-VERIFICATION.md)** — Build verification and deployment checklist
- **[PHASE-5-EXPANSION.md](./PHASE-5-EXPANSION.md)** — Multi-domain architecture
- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** — Common issues and solutions
- **[CHANGELOG.md](./CHANGELOG.md)** — Version history

## Routes

### Frontend
- `/` — Landing page with concept explanation
- `/guide` — Onboarding guide index
- `/guide/[step]` — Individual guide steps (01-08)
- `/library` — General template library
- `/libraries` — Domain selection
- `/libraries/[domain]` — Domain-specific templates
- `/libraries/[domain]/[slug]` — Template detail
- `/about` — Project philosophy

### API
- `GET /api/templates` — List all general templates
- `GET /api/templates/[slug]` — Single template
- `GET /api/export/[slug]` — Download template as `.md`
- `GET /api/libraries` — List all domains
- `GET /api/libraries/[domain]` — Domain templates
- `GET /api/libraries/[domain]/[slug]` — Domain template detail

## Contributing

Contributions are welcome! Please read the [Development Guidelines](.cursor/memory-bank/development-guidelines.md) before submitting a PR.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Troubleshooting

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues and solutions.

## License

MIT

## Maintainer

[Baptoshi](https://github.com/Baptoshi)

---

**Memory Bank — Systemic Architect**  
*Structure is explicit. Reasoning is traceable. The system is ready.*

