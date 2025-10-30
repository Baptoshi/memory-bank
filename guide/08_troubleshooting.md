# Operational Protocol

At this stage, your Memory Bank is fully functional — stable, multi-domain, and verified.  
This phase explains how to operate the system, manage reasoning sessions, and maintain consistency across all domains.

---

## Objective

The goal of the Operational Protocol is to **standardize how you interact with the system**.  
It defines how to structure tasks, how reasoning should behave, and how to ensure no drift occurs between updates.

You will learn:
- How to issue structured tasks  
- How the reasoning process flows through memory modules  
- How to verify consistency and prevent hallucination  
- How to expand safely with predictable results  

---

## 1. Understanding the Operational State

Once activated, your system runs in **Systemic Architect Mode** — a controlled reasoning environment.

### In this state:
- Cursor reads only from `.cursor/memory-bank/`  
- Language remains neutral, precise, and impersonal  
- Every response follows a 5-section structure:
  1. **Context** — Which modules apply  
  2. **Structure** — Proposed folder or data structure  
  3. **Implementation** — Actual code or files  
  4. **Integration** — How parts connect  
  5. **Verification** — What to test or confirm  

This ensures that reasoning always stays within the system’s architecture.

---

## 2. Writing a Task

All tasks follow a standardized format.

Example:

```
## Task
Design a module to handle authentication logic in the web3 domain.
```

Cursor will automatically:
- Identify the domain (`web3`)  
- Load its relevant memory modules (`architecture.md`, `development-guidelines.md`, etc.)  
- Generate an answer that matches the systemic tone  
- End with:  
  > “Structure generated. Ready for integration.”

This means the reasoning was completed successfully and aligned with your memory context.

---

## 3. Operational Rules

To maintain stability and precision, the following behavioral rules are enforced:

| Rule | Description |
|------|--------------|
| **No hallucination** | All reasoning must be traceable to memory files |
| **No speculation** | Cursor must not invent modules or patterns |
| **No redundancy** | Information that already exists should not be restated |
| **Clarity over cleverness** | Simplicity and structure take priority |
| **Silence as design** | Empty space and simplicity are part of the logic |
| **Immutability of memory** | Memory files are never edited during reasoning |

These constraints protect the system from entropy — keeping the reasoning reliable over time.

---

## 4. The Task Lifecycle

Each reasoning task moves through 5 phases automatically:

1. **Recognition**  
   Cursor identifies the domain, task type, and relevant modules.

2. **Interpretation**  
   The system reads the memory content to establish context.

3. **Synthesis**  
   Reasoning is generated using existing structures and tone rules.

4. **Validation**  
   The system checks internal consistency with memory standards.

5. **Conclusion**  
   Output is returned in the 5-section format with final state marker.

If any step fails (e.g., missing module or unclear scope), Cursor responds with:

> “Blocked. Clarification required.”

---

## 5. System Checks

Before running new reasoning sessions, validate your operational environment:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Then ensure Cursor has the latest memory internalized:

```bash
npm run generate:startup
```

This updates `.cursor/startup.md` with your most recent configuration.

---

## 6. Safe Expansion Workflow

When expanding or adding new features:
1. Add new `.md` files **only** inside the correct domain folder  
2. Reference them in your documentation index  
3. Run `npm run build` to ensure integrity  
4. Re-internalize with `generate:startup`  
5. Validate reasoning by running a test task  

Never directly edit `.cursor/memory-bank` during reasoning — always update it structurally.

---

## 7. Verifying System Consistency

To confirm that reasoning behavior has not drifted:

```
## Task
Summarize how design-doc.md defines the tone of the system.
```

The response should:
- Reference the correct domain  
- Match the tone defined in `activation.md`  
- End with “Structure generated.”  

If tone or reasoning differ, it indicates partial memory desynchronization — rerun your startup script.

---

## 8. Maintenance Schedule

To keep your Memory Bank healthy:

| Frequency | Action | Purpose |
|------------|--------|----------|
| Weekly | `npm run lint && npm run build` | Detect silent drift |
| After any edit | `npm run generate:startup` | Refresh reasoning manifest |
| Monthly | Review `.cursor/memory-bank/` | Ensure coherence |
| Before release | Run runtime verification | Confirm deploy readiness |

By following this schedule, you maintain reasoning reliability even as your project grows.

---

## 9. Deactivation Protocol

To pause the reasoning engine safely:

1. Stop your local dev server (`Ctrl + C`)  
2. Back up `.cursor/memory-bank/`  
3. Create a snapshot of `activation.md` and `startup.md`  
4. Archive the current state with a version tag  

This allows you to roll back to a previous reasoning state if needed.

---

## 10. Phase Completion

Once operational protocols are active and stable, your Memory Bank reaches **full autonomy**.  
It becomes a reproducible cognitive environment that can be reactivated instantly on any machine.

✅ Reasoning fully structured  
✅ Systemic tone consistent  
✅ Domains operational  
✅ No drift detected  
✅ Architecture stable  

---

## Closing Principle

> “Reasoning is not invention — it is structure made visible.”  

Your Memory Bank is now self-contained and scalable.  
You can deploy, expand, or replicate it across any domain without losing its integrity.

---

**System Ready.**  
Next step: Continuous evolution through modular learning and versioned expansion.
