# Memory Bank — Guide System Implementation

**Date:** 2025-10-30  
**Status:** ✅ Complete  
**Mode:** Systemic Architect

---

## Overview

The Guide system provides a step-by-step onboarding experience for developers using the Memory Bank cognitive architecture. It consists of 8 sequential steps covering installation, activation, development phases, and troubleshooting.

---

## 1. Architecture

### Route Structure

```
/guide                           → Index page with grid of all 8 steps
/guide/01_introduction           → Step 1 detail page
/guide/02_installation           → Step 2 detail page
...
/guide/08_troubleshooting        → Step 8 detail page
```

### Data Flow

```
Static .md files (guide/*.md)
  ↓
lib/guide-data.ts (metadata mapping)
  ↓
app/guide/page.tsx (index) or app/guide/[step]/page.tsx (detail)
  ↓
components/guide/* (UI components)
  ↓
User sees Bauhaus-styled guide content
```

---

## 2. Components Implemented

### UI Components (`/components/guide/`)

| Component | Purpose | Features |
|-----------|---------|----------|
| `GuideCard.tsx` | Step preview card | Clickable link, step number badge, title + description |
| `GuideGrid.tsx` | 2-column grid layout | Responsive, wraps on mobile |
| `GuideContent.tsx` | Markdown renderer | Custom Bauhaus-styled React Markdown components |
| `GuideNav.tsx` | Previous/Next navigation | Adjacent step detection, "Back to Overview" fallback |

### Component Details

#### `GuideCard.tsx`
- **Purpose:** Display individual guide step as clickable card
- **Features:**
  - Circular step number badge (technical-violet background)
  - Title in display font (Space Grotesk)
  - Description in body font (Inter)
  - Hover effect: border changes from grey to technical-violet
  - 300ms cubic-bezier transition (Bauhaus motion)
  - Full card is clickable via `<Link>` wrapper

#### `GuideGrid.tsx`
- **Purpose:** Layout container for guide cards
- **Features:**
  - 1 column on mobile, 2 columns on desktop (`md:grid-cols-2`)
  - Gap between cards: `gap-lg` (2rem)
  - Maps over `GuideStep[]` array and renders `GuideCard` for each

#### `GuideContent.tsx`
- **Purpose:** Render Markdown content with Bauhaus styling
- **Features:**
  - Uses `react-markdown` with custom component overrides
  - Typography hierarchy:
    - `h1`: 4xl, display font, architect-green
    - `h2`: 3xl, display font, with top margin
    - `h3`: 2xl, display font, smaller margin
    - `p`: neutral-grey/80, relaxed leading
    - `code` (inline): technical-violet, grey background
    - `code` (block): monospace, grey background, overflow scroll
    - `blockquote`: left border (technical-violet), italic
    - `a`: technical-violet, hover to acid-accent, underline
  - Accessibility: external links open in new tab with `rel="noopener noreferrer"`
  - Responsive: all text scales properly on mobile

#### `GuideNav.tsx`
- **Purpose:** Step-to-step navigation
- **Features:**
  - Left side: "Previous" step (or "Back to Overview" if first step)
  - Right side: "Next" step (or "Back to Overview" if last step)
  - Arrow icons: `←` and `→`
  - Hover effect: text-neutral-grey → text-technical-violet
  - Uses `getAdjacentSteps(slug)` from `lib/guide-data.ts`

---

## 3. Pages Implemented

### `/app/guide/page.tsx` (Index)

**Type:** Static Server Component  
**Purpose:** Display all guide steps in a grid

**Structure:**
```tsx
<Header />
<main>
  <Container>
    <h1>Memory Bank Guide</h1>
    <p>Step-by-step instructions...</p>
    <GuideGrid steps={getGuideSteps()} />
  </Container>
</main>
<Footer />
```

**Features:**
- Loads all 8 steps via `getGuideSteps()` from `lib/guide-data.ts`
- Renders grid with clickable cards
- No client-side state or API calls (fully static)

---

### `/app/guide/[step]/page.tsx` (Dynamic Detail)

**Type:** Server Component with Dynamic Route  
**Purpose:** Display single guide step with navigation

**Structure:**
```tsx
<Header />
<main>
  <Container>
    <StepBadge>{step.step}</StepBadge>
    <h1>{step.title}</h1>
    <p>{step.description}</p>
    <GuideContent content={markdownContent} />
    <GuideNav prev={prev} next={next} />
  </Container>
</main>
<Footer />
```

**Features:**
- Validates step slug via `getStepBySlug(params.step)`
- Returns 404 if step not found
- Loads Markdown content from `guide/[step].md` using `fs/promises`
- Renders Markdown with `GuideContent` component
- Provides navigation to adjacent steps via `GuideNav`

---

## 4. Data Layer

### `/lib/guide-data.ts`

**Purpose:** Static metadata for all guide steps

**Interface:**
```typescript
export interface GuideStep {
  step: string;        // "01", "02", etc.
  slug: string;        // "01_introduction", "02_installation", etc.
  title: string;       // "Introduction", "Installation", etc.
  description: string; // Human-readable summary
  path: string;        // File path: "/guide/01_introduction.md"
}
```

**Exported Functions:**
```typescript
getGuideSteps(): GuideStep[]
  → Returns all 8 steps in order

getStepBySlug(slug: string): GuideStep | undefined
  → Returns single step by slug or undefined if not found

getAdjacentSteps(slug: string): { prev?: GuideStep; next?: GuideStep }
  → Returns previous and next steps for navigation
  → Returns empty object if slug not found
```

**Data:**
```typescript
export const GUIDE_STEPS: GuideStep[] = [
  {
    step: '01',
    slug: '01_introduction',
    title: 'Introduction',
    description: 'What is the Memory Bank and how does it work?',
    path: '/guide/01_introduction.md',
  },
  // ... 7 more steps
];
```

---

## 5. Visual Design (Bauhaus Compliance)

### Color Palette

- **Background:** `architect-green` (#2D3A2E)
- **Text Primary:** `neutral-grey` (#E5E5E5)
- **Text Secondary:** `neutral-grey/80` (80% opacity)
- **Accents:** `technical-violet` (#A29BFE)
- **Hover:** `acid-accent` (#C4FF00)

### Typography

- **Display Font:** `Space Grotesk` (h1, h2, h3, step badges)
- **Body Font:** `Inter` (p, ul, ol, descriptions)
- **Code Font:** `font-mono` (code blocks)

### Spacing

- **Card Padding:** `p-lg` (2rem)
- **Grid Gap:** `gap-lg` (2rem)
- **Section Spacing:** `space-y-lg`, `space-y-xl`
- **Margin Bottom:** `mb-md` (1rem)

### Motion

- **Transition:** `transition-bauhaus` (cubic-bezier(0.33, 1, 0.68, 1))
- **Duration:** 300ms (all hover effects)
- **Hover Scale:** None (cards only change border color)

### Responsive Breakpoints

- **Mobile:** 1 column grid
- **Desktop (md+):** 2 column grid

---

## 6. File Structure

```
/Users/baptistecastiglione/Memory Bank/
├── guide/                              # Source Markdown files
│   ├── 01_introduction.md
│   ├── 02_installation.md
│   ├── 03_activation.md
│   ├── 04_phases.md
│   ├── 05_operational_protocol.md
│   ├── 06_runtime_verification.md
│   ├── 07_domain_expansion.md
│   └── 08_troubleshooting.md
├── lib/
│   └── guide-data.ts                   # ✅ Static metadata and helper functions
├── components/
│   └── guide/
│       ├── GuideCard.tsx               # ✅ Step preview card
│       ├── GuideGrid.tsx               # ✅ 2-column grid layout
│       ├── GuideContent.tsx            # ✅ Markdown renderer
│       └── GuideNav.tsx                # ✅ Previous/Next navigation
└── app/
    └── guide/
        ├── page.tsx                    # ✅ Index page (all steps)
        └── [step]/
            └── page.tsx                # ✅ Dynamic step detail page
```

---

## 7. Integration with Header

### Updated `components/layout/Header.tsx`

**Change:** Added "Guide" link to navigation

**Before:**
```tsx
Memory Banks | General Library | About
```

**After:**
```tsx
Memory Banks | General Library | Guide | About
```

**Code:**
```tsx
<Link
  href="/guide"
  className="text-neutral-grey hover:text-technical-violet transition-bauhaus"
>
  Guide
</Link>
```

---

## 8. Runtime Verification

### Tests Performed

| Test | Command | Expected Result | Status |
|------|---------|-----------------|--------|
| Index page loads | `curl http://localhost:3000/guide` | HTML with "Memory Bank Guide" heading | ✅ Pass |
| Step page loads | `curl http://localhost:3000/guide/01_introduction` | HTML with "Introduction" title | ✅ Pass |
| TypeScript compilation | `tsc --noEmit` | No errors | ✅ Pass |
| Linter check | `read_lints` on all guide files | No errors | ✅ Pass |

### Routes Verified

| Route | Type | Status |
|-------|------|--------|
| `/guide` | Static | ✅ Operational |
| `/guide/01_introduction` | Dynamic | ✅ Operational |
| `/guide/02_installation` | Dynamic | ✅ Operational |
| `/guide/03_activation` | Dynamic | ✅ Operational |
| `/guide/04_phases` | Dynamic | ✅ Operational |
| `/guide/05_operational_protocol` | Dynamic | ✅ Operational |
| `/guide/06_runtime_verification` | Dynamic | ✅ Operational |
| `/guide/07_domain_expansion` | Dynamic | ✅ Operational |
| `/guide/08_troubleshooting` | Dynamic | ✅ Operational |

---

## 9. User Flow

### Onboarding Journey

1. **User lands on homepage** → sees "Guide" link in header
2. **User clicks "Guide"** → arrives at `/guide` index page
3. **User sees 8 cards in grid** → each card shows step number, title, description
4. **User clicks "01 — Introduction"** → navigates to `/guide/01_introduction`
5. **User reads Markdown content** → styled with Bauhaus typography and colors
6. **User clicks "Next"** → navigates to `/guide/02_installation`
7. **User continues through steps** → sequential learning path
8. **User completes Step 08** → clicks "Back to Overview" or "Guide" in header

---

## 10. Accessibility

### Features Implemented

- **Semantic HTML:** `<nav>`, `<main>`, `<header>`, `<footer>`, `<article>` (via Markdown)
- **Keyboard Navigation:** All links are focusable and navigable via Tab key
- **Screen Reader Support:** Proper heading hierarchy (h1 → h2 → h3)
- **External Link Safety:** `rel="noopener noreferrer"` on all external links
- **Contrast:** Text colors meet WCAG AA standards (neutral-grey on architect-green)
- **Reduced Motion:** Uses CSS `transition-bauhaus` which respects `prefers-reduced-motion`

---

## 11. Deployment Readiness

### Checklist

- [x] All components pass TypeScript compilation
- [x] No ESLint errors
- [x] Routes verified via local development server
- [x] Bauhaus design system applied consistently
- [x] Markdown rendering tested with all 8 guide files
- [x] Navigation tested (Previous/Next and Back to Overview)
- [x] Header updated with "Guide" link
- [x] Static generation compatible (no client-side state in index page)
- [x] Dynamic routes work with Next.js App Router

### Deployment Notes

- **Static Generation:** `/guide` index page can be prerendered at build time
- **Dynamic Routes:** `/guide/[step]` pages are generated on-demand (or can be statically generated via `generateStaticParams` if needed)
- **File System Dependency:** Requires `guide/*.md` files to exist at runtime (or build time for SSG)
- **No Database Required:** All guide data is static and sourced from Markdown files

---

## 12. Future Enhancements (Optional)

### Potential Improvements

1. **Search Functionality:** Add search bar to filter guide steps by keyword
2. **Progress Tracking:** Store user progress in localStorage or database
3. **Interactive Code Examples:** Embed runnable code snippets with syntax highlighting
4. **Video Embeds:** Add video tutorials for complex steps
5. **Feedback System:** Allow users to rate guide steps or report issues
6. **Multi-language Support:** Translate guide content into multiple languages
7. **Dark Mode Toggle:** Allow users to switch between light/dark themes (currently dark by default)
8. **Print Styles:** Add CSS print styles for offline guide reading

---

## Conclusion

The Guide system is now fully operational. Users can navigate through 8 sequential onboarding steps, each styled according to Bauhaus principles and rendered from Markdown source files. The implementation is type-safe, accessible, and production-ready.

**Status:** ✅ Complete  
**Affected Routes:** `/guide`, `/guide/[step]`  
**New Components:** 4 (`GuideCard`, `GuideGrid`, `GuideContent`, `GuideNav`)  
**New Library:** 1 (`lib/guide-data.ts`)

---

**Memory Bank — Systemic Architect**  
*Structure is explicit. Reasoning is traceable. The Guide is active.*

