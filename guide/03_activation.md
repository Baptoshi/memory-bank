# Activation

Once your environment is ready, it’s time to activate the Memory Bank.  
Activation connects your `.cursor/memory-bank` files to your AI workspace, enabling it to reason and operate within your project’s architecture.

In this step, you’ll learn how to load memory modules, initialize behavior protocols, and verify that the system responds as intended.

---

## Step Objectives

- Understand what “activation” means in practice  
- Load the Memory Bank into Cursor or your AI IDE  
- Trigger the Systemic Architect Mode  
- Verify that behavioral rules are applied correctly  

---

## 1. Load the Memory Modules

The Memory Bank lives inside your project folder:

```
.cursor/
└── memory-bank/
    ├── architecture.md
    ├── design-doc.md
    ├── folder-structure.md
    ├── implementation-plan.md
    ├── deployment-checklist.md
    ├── development-guidelines.md
    └── tech-stack.md
```

Each file represents a *module* that defines part of your system’s logic — its architecture, design standards, workflow, and reasoning style.

Cursor (or your AI agent) reads these files on startup to build a mental model of your project.

---

## 2. Activate the Behavioral Protocol

In `.cursor/activation.md`, you define **how** the system should behave — its tone, priorities, and output discipline.

Example excerpt:

```markdown
## Behavioral Rules
- Clarity over cleverness  
- Structure over narrative  
- Each component < 100 lines  
- No hallucination or speculation  
- Output ends with "Structure generated" or "Blocked"
```

These rules shape how the AI executes reasoning tasks.  
Think of it as your “operating code of conduct.”

---

## 3. Initialize the System

To activate the Memory Bank, prompt Cursor directly from your project root:

```
## System Initialization

Mode: Systemic Architect  
Source: .cursor/memory-bank/
Action: Load all memory modules
```

Cursor (or another compatible AI) will confirm:

```
Memory internalized. Behavioral protocol active.
System ready for task execution.
```

This message means your reasoning environment is live.

---

## 4. Test the Activation

To verify it’s working, give Cursor a simple structured task:

```
## Task
Generate a basic page layout following Memory Bank design rules.
```

You should see it respond using the Bauhaus-inspired design tokens, strict component structure, and concise comments — all defined in your memory files.

If the response includes:
- consistent tone  
- strict formatting  
- “Structure generated” at the end  
then the Memory Bank is active.

---

## 5. Troubleshooting

If activation doesn’t load:
1. Check that `.cursor/memory-bank/` exists and contains all modules.  
2. Ensure `activation.md` and `startup.md` are present.  
3. Verify the directory is at the root of your project (not nested).  
4. Restart Cursor or reload your workspace.  

If the issue persists, remove temporary state files (`.cursor/cache`) and retry.

---

## Verification

✅ You have:
- Loaded all `.cursor/memory-bank/` modules  
- Activated the behavioral protocol  
- Verified Cursor responds in Systemic Architect Mode  
- Tested that reasoning matches your Memory Bank structure  

---

Next: [Step 04 → Development Phases](../04-development-phases)
