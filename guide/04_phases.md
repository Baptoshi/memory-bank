# Development Phases

The Memory Bank framework divides your project into a series of development phases.  
Each phase focuses on a specific layer of the system — from foundation setup to runtime verification and expansion.

This structure keeps your work consistent, predictable, and scalable.  
It ensures that every new feature follows the same architectural discipline that defines your system.

---

## Step Objectives

- Understand the 5 Memory Bank development phases  
- Learn how each phase builds upon the previous one  
- See how phases guide Cursor’s reasoning and output  
- Know when to transition between them  

---

## 1. Phase 1 — Initialization

**Goal:** Establish the foundation of your Memory Bank system.  

This is where you define the project’s purpose, structure, and core rules.  
During this phase, you create your memory modules:

```
.cursor/memory-bank/
├── folder-structure.md
├── design-doc.md
├── architecture.md
└── development-guidelines.md
```

Each of these defines *how the system thinks*, not just how it’s built.  
It’s your blueprint for reasoning.

**Deliverables:**
- Folder structure confirmed  
- Core memory modules created  
- Naming conventions set  

---

## 2. Phase 2 — Implementation Layer

**Goal:** Build functional architecture aligned with memory constraints.  

Here, you create the first working version of the system using the logic defined in Phase 1.  
You generate pages, components, and layouts — all following the Bauhaus design and your module rules.

**Deliverables:**
- Working `/guide` route system  
- Modular component architecture  
- Reusable design tokens applied  

---

## 3. Phase 3 — Activation Layer

**Goal:** Enable the Memory Bank reasoning system.  

During this phase, you connect `.cursor/memory-bank/` to your IDE (like Cursor) and define the behavioral protocol that governs how reasoning occurs.

**Deliverables:**
- Activation protocol defined  
- Cursor responds in Systemic Architect Mode  
- Tasks executed using internalized memory rules  

---

## 4. Phase 4 — Runtime Verification

**Goal:** Ensure the system runs consistently and predictably.  

You verify that every component, route, and reasoning pattern follows the structure of your Memory Bank.  
This phase includes dependency audits, environment checks, and visual verification.

**Deliverables:**
- Build succeeds without errors  
- Design consistency validated  
- All routes and APIs functional  
- Phase report generated  

---

## 5. Phase 5 — Domain Expansion

**Goal:** Extend your system across multiple domains.  

Once the core architecture is stable, you can create new Memory Banks for other domains — each with its own reasoning layer and guide structure.

**Deliverables:**
- Multi-domain Memory Bank structure  
- Shared templates for scalability  
- Cross-domain reasoning alignment  

---

## How Cursor Uses Phases

Cursor reads your current phase from the **Phase Tracker** in `.cursor/memory-bank/status.md`  
and adjusts its reasoning accordingly:

- In Phase 1–2 → focus on structure and architecture  
- In Phase 3 → focus on behavior and activation  
- In Phase 4 → focus on testing and verification  
- In Phase 5 → focus on expansion and abstraction  

This allows it to apply the right logic for the right moment, improving precision and reducing wasted context.

---

## Verification

✅ You now understand:
- The 5 Memory Bank phases and their purpose  
- How each one connects to Cursor’s reasoning model  
- When to move from one phase to another  
- How to keep your project aligned as it grows  

---

Next: [Step 05 → Implementation Layer](../05-implementation-layer)
