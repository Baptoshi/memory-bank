# Memory Bank — Changelog

All notable changes to this project will be documented in this file.

---

## [1.1.1] - 2025-10-30

### Added
- **Landing Page Content:** Added "What is a Procedural Memory Bank?" section explaining the cognitive architecture concept
- **Guide CTA:** Added prominent "Read the Guide First →" link to encourage onboarding

### Changed
- **Landing Page CTA:** Simplified to single "Browse Templates" button (removed "Explore Memory Banks" - feature not ready yet)

### Fixed
- **UI Crash:** Resolved CSS not loading issue by clearing corrupted `.next` cache
- **Troubleshooting:** Added comprehensive `TROUBLESHOOTING.md` with 12 common issues and solutions

### Removed
- **Filter Bar:** Removed type filters from general library page (`/library`) - filters were not relevant for memory templates

---

## [1.1.0] - 2025-10-30

### Added — Guide System

**New Routes:**
- `/guide` — Index page with 8-step onboarding grid
- `/guide/[step]` — Dynamic route for individual guide steps

**New Components:**
- `components/guide/GuideCard.tsx` — Step preview card with number badge
- `components/guide/GuideGrid.tsx` — 2-column responsive grid
- `components/guide/GuideContent.tsx` — Markdown renderer with Bauhaus styling
- `components/guide/GuideNav.tsx` — Previous/Next step navigation

**New Library:**
- `lib/guide-data.ts` — Static metadata and helper functions for 8 guide steps

**UI Updates:**
- Added "Guide" link to global header navigation

**Documentation:**
- `GUIDE-IMPLEMENTATION.md` — Complete implementation and design documentation

---

## [1.0.0] - 2025-10-30

### Added — Core System

**Phase 1: Initialization**
- Internalized 8 cognitive modules from `.cursor/memory-bank/`
- Created Next.js project structure with App Router
- Configured TypeScript, ESLint, Prettier, Tailwind CSS
- Defined Bauhaus design system (colors, typography, spacing, motion)
- Set up Prisma ORM with PostgreSQL schema

**Phase 2: Design Layer**
- Created design system documentation (`design-doc.md`)
- Implemented UI primitives (`Button`, `Card`, `Badge`)
- Built layout components (`Container`, `Header`, `Footer`)
- Defined color palette (architect-green, technical-violet, neutral-grey, acid-accent)
- Configured Space Grotesk and Inter fonts

**Phase 3: Implementation**
- Built template library system (`/library`, `/library/[slug]`)
- Implemented API routes (`/api/templates`, `/api/templates/[slug]`, `/api/export/[slug]`)
- Created template components (`TemplateCard`, `TemplateGrid`, `FilterBar`, `TemplateDetail`)
- Added copy-to-clipboard functionality with visual feedback
- Implemented Markdown parsing with gray-matter
- Created About page and custom 404 page

**Phase 4: Runtime Verification**
- Verified production build (exit code 0)
- Tested all routes and API endpoints
- Confirmed Bauhaus design compliance
- Generated environment configuration (`.env.example`)
- Documented deployment readiness checklist
- Created `PHASE-4-RUNTIME-VERIFICATION.md`

**Phase 5: Domain Expansion**
- Implemented multi-domain Memory Bank architecture
- Created domain selection page (`/libraries`)
- Built domain-specific routes (`/libraries/[domain]`, `/libraries/[domain]/[slug]`)
- Added 6 domain presets (Web App, SaaS, AI Tool, Crypto, Data Dashboard, Landing)
- Created domain-specific API routes
- Implemented `DomainCard` component with accent colors
- Created `PHASE-5-EXPANSION.md`

---

## Design System

### Colors
- **architect-green** (#2D3A2E) — Primary background
- **technical-violet** (#A29BFE) — Accents and CTAs
- **neutral-grey** (#E5E5E5) — Text primary
- **acid-accent** (#C4FF00) — Hover states

### Typography
- **Display:** Space Grotesk (Google Font)
- **Body:** Inter (Google Font)
- **Code:** System monospace

### Motion
- **Transition:** cubic-bezier(0.33, 1, 0.68, 1) (300ms)
- **Hover:** Border color changes, no scale transforms

### Spacing
- **xs:** 0.25rem (4px)
- **sm:** 0.5rem (8px)
- **md:** 1rem (16px)
- **lg:** 2rem (32px)
- **xl:** 4rem (64px)

---

## Technology Stack

### Frontend
- **Next.js** 14.2.0 (App Router, SSR/SSG)
- **React** 18.3.0
- **TypeScript** 5.5.0 (strict mode)
- **Tailwind CSS** 3.4.0 (custom design tokens)

### Backend
- **Node.js** ≥20.0.0
- **Prisma** 5.18.0 (ORM for PostgreSQL)
- **Zod** 3.23.0 (schema validation)

### Content
- **gray-matter** 4.0.3 (Markdown frontmatter parsing)
- **react-markdown** 9.0.1 (Markdown rendering)

### Development
- **ESLint** 8.57.0 (Next.js config)
- **Prettier** 3.3.0
- **Vitest** 1.6.0 (unit tests)
- **Playwright** 1.45.0 (E2E tests)

---

## File Structure

```
memory-bank/
├── .cursor/
│   ├── memory-bank/          # 8 cognitive modules (.md)
│   ├── activation.md          # Behavioral protocol
│   └── startup.md             # Boot manifest
├── app/
│   ├── api/
│   │   ├── templates/         # General template API
│   │   ├── libraries/         # Domain API
│   │   └── export/            # Template export
│   ├── guide/                 # ✨ NEW: Onboarding guide
│   │   ├── page.tsx
│   │   └── [step]/page.tsx
│   ├── libraries/             # Multi-domain Memory Banks
│   │   ├── page.tsx
│   │   ├── [domain]/page.tsx
│   │   └── data/              # Domain-specific templates
│   ├── library/               # General template library
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── about/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
├── components/
│   ├── ui/                    # Primitives
│   ├── layout/                # Global layout
│   ├── template/              # Template views
│   ├── domain/                # Domain cards
│   ├── guide/                 # ✨ NEW: Guide components
│   └── CopyButton.tsx
├── lib/
│   ├── memory.ts              # Template loader
│   ├── domains.ts             # Domain metadata
│   ├── domains-memory.ts      # Domain template loader
│   ├── guide-data.ts          # ✨ NEW: Guide metadata
│   ├── types.ts
│   ├── utils.ts
│   └── constants.ts
├── guide/                     # ✨ NEW: Guide content (.md)
│   ├── 01_introduction.md
│   ├── 02_installation.md
│   ├── 03_activation.md
│   ├── 04_phases.md
│   ├── 05_operational_protocol.md
│   ├── 06_runtime_verification.md
│   ├── 07_domain_expansion.md
│   └── 08_troubleshooting.md
├── prisma/
│   └── schema.prisma
├── tests/
│   ├── unit/
│   └── e2e/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## Routes

### Frontend Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Landing page |
| `/libraries` | Static | Domain index |
| `/libraries/[domain]` | Dynamic | Domain-specific library |
| `/libraries/[domain]/[slug]` | Dynamic | Domain template detail |
| `/library` | Client | General template library |
| `/library/[slug]` | Server | Template detail view |
| `/guide` | Static | ✨ Guide index |
| `/guide/[step]` | Dynamic | ✨ Guide step page |
| `/about` | Static | Project philosophy |
| `/404` | Static | Not found |

### API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/templates` | GET | List all general templates |
| `/api/templates/[slug]` | GET | Single template |
| `/api/export/[slug]` | GET | Download template |
| `/api/libraries` | GET | List all domains |
| `/api/libraries/[domain]` | GET | Domain templates |
| `/api/libraries/[domain]/[slug]` | GET | Domain template detail |

---

## Contributors

- **Systemic Architect** (Memory Bank AI)
- **Baptiste Castiglione** (Project Owner)

---

## License

Private — Not yet open source

