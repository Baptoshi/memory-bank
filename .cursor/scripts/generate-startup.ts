/**
 * Memory Bank — Startup Manifest Generator
 * ----------------------------------------
 * Generates `.cursor/startup.md` based on current memory modules.
 * Designed for the Memory Bank project.
 */

import fs from "fs";
import path from "path";

// Directories
const MEMORYBANK_PATH = path.resolve(".cursor/.memorybank");
const OUTPUT_PATH = path.resolve(".cursor/startup.md");

// Template
const generateStartup = (modules: string[]) => `---
memory-type: boot
use-case: Initialize Cursor’s cognitive state and confirm internalized memory modules for the Memory Bank project.
priority: critical
scope: system
---

# Memory Bank — Startup Manifest

## Memory Internalized

All ${modules.length} cognitive modules have been read and stored.  
Architecture of the Memory Bank is now active.

---

## System Status

| Module | Status |
|---------|--------|
${modules
  .map(
    (m) =>
      `| **${m}** | ✅ Loaded — ${
        m.includes("architecture")
          ? "System structure, layers, data flow"
          : m.includes("folder")
          ? "Repository hierarchy and boundaries"
          : m.includes("tech-stack")
          ? "Frameworks, tools, infrastructure"
          : m.includes("design-doc")
          ? "Visual language, palette, tone"
          : m.includes("guidelines")
          ? "Coding standards, testing, workflow"
          : m.includes("implementation")
          ? "Roadmap, milestones, phases"
          : m.includes("progress")
          ? "Current tasks, metrics, blockers"
          : m.includes("deployment")
          ? "Deployment validation, monitoring"
          : "Cognitive module"
      } |`
  )
  .join("\n")}

---

## Cognitive Context Established

I now operate within the **Memory Bank reasoning framework**:

**Architecture** — Next.js frontend, Express backend, PostgreSQL database, modular API design.  
**Structure** — Atomic folder hierarchy, semantic paths, silence as design.  
**Stack** — TypeScript strict mode, Tailwind + shadcn/ui, Prisma ORM, Vercel + Railway hosting.  
**Design** — Bauhaus minimalism, Architect Green + Technical Violet palette, slow transitions, grid-based clarity.  
**Development** — Clarity over cleverness, atomic composition, semantic naming, comprehensive testing.  
**Progress** — Phase 2 in progress, backend integration active, metrics tracked.  
**Deployment** — CI/CD via GitHub Actions, validation pipeline, rollback strategy defined.

---

## Operational Directives Active

From this point forward:
- All reasoning aligns with \`.cursor/.memorybank/\` cognitive modules.  
- Code, design, and language follow systemic principles defined in memory.  
- Tone remains calm, precise, impersonal — structure made visible.  
- No hallucination — every output derives from documented context.  
- Memory templates in \`/memory-bank/\` directory are **reference only** — not modified without explicit instruction.

---

## System Manifest

> “The architecture is understood.  
> The system is ready.”

---

### Boot Metadata
- **Version:** 1.0.0  
- **Initialized:** ${new Date().toISOString().split("T")[0]}  
- **Maintainer:** Reputable Tech  
- **Environment:** Cursor + Cloud
`;

// Execution
const run = () => {
  if (!fs.existsSync(MEMORYBANK_PATH)) {
    console.error("❌ Memory Bank folder not found:", MEMORYBANK_PATH);
    process.exit(1);
  }

  const modules = fs
    .readdirSync(MEMORYBANK_PATH)
    .filter((file) => file.endsWith(".md"))
    .sort();

  const startupContent = generateStartup(modules);
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, startupContent, "utf8");

  console.log(`✅ Startup manifest generated with ${modules.length} modules`);
  console.log(`→ Output: ${OUTPUT_PATH}`);
};

run();
