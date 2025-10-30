# Implementation Layer

Once the Memory Bank is active, the next step is to transform structure into execution.  
This phase focuses on building actual components, routes, and logic — always respecting the principles defined in your `.cursor/memory-bank` files.

Implementation in a Memory Bank context is not about speed — it’s about **precision**.  
Every file, line, and interaction should reflect the architecture that was documented and activated earlier.

---

## Step Objectives

- Learn how to apply memory modules in code  
- Create atomic and reusable components  
- Implement routes and layouts aligned with your architecture  
- Maintain design consistency using Bauhaus principles  

---

## 1. Understand the System Context

Before writing a single component, revisit your core memory modules:

```
.cursor/memory-bank/
├── architecture.md
├── design-doc.md
├── folder-structure.md
└── development-guidelines.md
```

These files define how to organize logic, name components, apply spacing, and handle interaction.  
They act as **your runtime compass**.

**Example:**
If `design-doc.md` says *“all transitions use 300 ms cubic-bezier(0.33, 1, 0.68, 1)”*, that rule becomes part of your code, not a suggestion.

---

## 2. Establish Atomic Design

The implementation layer follows a strict atomic hierarchy:

```
components/
├── ui/          # Buttons, inputs, tags
├── layout/      # Header, Footer, Container
├── guide/       # Step cards, navigation, content blocks
└── shared/      # Utilities and wrappers
```

Each component:
- stays under **100 lines**,  
- has **one responsibility**,  
- uses **semantic HTML**,  
- and is **typed with TypeScript**.

This makes every part of the system predictable and testable.

---

## 3. Apply the Bauhaus Design System

Follow your color tokens and typography scale exactly as defined in `design-doc.md`:

| Token | Role | Example |
|--------|------|----------|
| `bg-architect-green` | Background | Layout sections |
| `text-neutral-grey` | Body text | Paragraphs |
| `text-technical-violet` | Accent | Headings and highlights |
| `text-acid-accent` | Hover | Interactive states |

**Typography Hierarchy**
- Display: `Space Grotesk`, 48 px / 36 px / 24 px  
- Body: `Inter`, 16 px / line-height 1.5  
- Small: `Inter`, 13 px / line-height 1.3  

This keeps visual rhythm and recognizability consistent across modules.

---

## 4. Implement Pages and Routes

Use the App Router to define structure clearly:

```
app/
├── layout.tsx
├── page.tsx
├── guide/
│   ├── page.tsx
│   └── [step]/
│       └── page.tsx
└── api/
    └── templates/
        └── route.ts
```

Each page imports components from the correct domain folder, never repeating logic.  
Avoid ad-hoc components — extend existing ones instead.

**Best Practice**
```tsx
// Correct — using Container and GuideCard
<Container>
  <GuideGrid steps={steps} />
</Container>
```

---

## 5. Integrate Data and Logic

When dynamic content is needed, integrate it through static lib files or Prisma models (if database active):

```
lib/
└── guide-data.ts
```

Use Zod for schema validation when parsing data, keeping logic declarative and safe.

```ts
import { z } from "zod";

const GuideSchema = z.object({
  step: z.string(),
  title: z.string(),
  description: z.string(),
  path: z.string(),
});
```

---

## 6. Testing and Verification

Before deploying any new component:

1. **Run lint and types**
   ```
   npm run lint
   npx tsc --noEmit
   ```
2. **Run visual check**
   ```
   npm run dev
   # Verify spacing, color, typography, and transitions
   ```
3. **Ensure reasoning coherence**
   Ask Cursor:
   ```
   ## Task
   Verify if this new component follows memory-bank guidelines.
   ```
   It should confirm compliance or point to inconsistencies.

---

## 7. When Implementation Is Complete

You are done with Phase 5 when:

- All routes render without errors  
- Components follow atomic hierarchy  
- Visuals match design tokens  
- Behavior matches memory rules  
- Cursor outputs end with `Structure generated`  

---

## Verification

✅ You have:
- Built working routes and components  
- Enforced Bauhaus design system  
- Maintained atomic structure  
- Verified compliance through Cursor reasoning  

---

Next: [Step 06 → Runtime Verification](../06-runtime-verification)
