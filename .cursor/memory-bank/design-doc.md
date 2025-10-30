---
memory-type: design
use-case: Describe visual, interactive, and accessibility rules for the app.
prompt-guidance:
  - Use this file when reasoning about UI/UX, layout, or component styling.
  - Never invent colors, fonts, or layouts not defined here.
  - Keep all answers visually minimal and coherent with these principles.
priority: medium
scope: project
---

# Design System

This document defines the visual and interaction foundations of the project.  
Cursor should use it to ensure all UI elements and layouts follow the same visual logic.

---

## 🧭 1. Core Principles
- **Minimalist** — Reduce visual noise. Only show what helps user flow.
- **Modular** — Reuse consistent building blocks (buttons, cards, modals).
- **Functional Motion** — Use animations to clarify, not decorate.
- **Hierarchy** — Emphasize what matters visually through contrast and spacing.
- **Accessibility-first** — Every interaction must be navigable via keyboard or screen reader.

---

## 📐 2. Layout System
| Property | Rule | Description |
|-----------|------|--------------|
| Grid | 12-column, fluid | Responsive and adaptive |
| Spacing | 4px base unit | Use multiples of 4 |
| Padding | 16–32px | Generous whitespace for readability |
| Radius | 24px | For all interactive or card surfaces |
| Breakpoints | Mobile / Tablet / Desktop | Scale typographically |

**Rules**
- Prefer vertical rhythm over complex layout tricks.
- Keep layout consistent across pages.
- Limit absolute positioning unless necessary.

---

## 🔤 3. Typography
| Element | Font | Size | Weight | Usage |
|----------|------|------|--------|--------|
| H1 | Inter / SF Pro Display | 32px | 700 | Page titles |
| H2 | Inter / SF Pro Display | 24px | 600 | Section titles |
| Body | Inter / SF Pro Text | 16px | 400 | Main text |
| Caption | Inter / SF Pro Text | 14px | 400 | Secondary labels |

**Guidelines**
- Never use more than two font families.
- Keep line-height around 1.4–1.6 for readability.
- Avoid text shadows and outlines.

---

## 🎛️ 4. Components

### Buttons
| Variant | Purpose | Style |
|----------|----------|--------|
| Primary | Main actions | Solid, filled background |
| Secondary | Supportive actions | Outline border |
| Ghost | Minimal actions | Transparent background |
| Disabled | Inactive state | 40% opacity, no hover |

Rules:
- Always maintain accessible contrast ratios.
- Use motion only for hover/press feedback (fade, scale ≤1.05x).

### Cards
- Rounded corners (24px radius)
- Soft shadow or border to indicate elevation
- Contain max one primary CTA

### Modals
- Centered on screen, dimmed backdrop
- Escape key closes modal
- Focus trap required

### Inputs
- Clear labels or placeholders
- Highlighted border on focus
- Always validate before submission

### Sidebar / Navigation
- Vertical list of sections
- Active item bolded or colored
- Collapsible on mobile

---

## 🌈 5. Color Palette
| Token | Example | Usage |
|--------|----------|--------|
| `--bg-primary` | #DAF064 | Main background or hero |
| `--ink-primary` | #1A1F14 | Text and dark surfaces |
| `--surface` | #F9FAF5 | Cards and panels |
| `--accent` | #A0B03D | CTA highlights |

**Rules**
- Always use tokens instead of hardcoded colors.
- Maintain contrast ratio > 4.5:1 for text.

---

## 🧩 6. Animation & Motion
- Use **Framer Motion** for controlled animations.
- Keep durations between `120–240ms`.
- Apply easing: `ease-in-out`.
- Animate only:
  - component entrances
  - button hovers
  - modal openings

Never animate text color or size changes.

---

## ♿ 7. Accessibility Standards
- Keyboard navigation: `Tab`, `Enter`, `Esc` supported globally.
- Screen readers: use `aria-label`, `aria-expanded`, and `aria-describedby` correctly.
- Focus ring visible at all times.
- Provide dark mode with consistent contrast.

---

## 🧠 8. Usage Notes
- Cursor should use this file to align UI generation with project’s design system.
- Avoid speculative design suggestions or unlisted variants.
- When designing new components, reuse spacing, typography, and tokens defined here.
