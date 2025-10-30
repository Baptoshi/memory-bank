---
memory-type: guidelines
use-case: Define engineering standards, coding philosophy, and workflow discipline.
prompt-guidance:
  - Use this file when reasoning about code style, structure, or development workflow.
  - Always follow these rules before generating or modifying code.
  - Never override conventions defined here unless explicitly instructed.
priority: high
scope: project
---

# Development Guidelines

These guidelines define how all code, commits, and documentation should be written across the project.  
Their purpose is to make the repository predictable, maintainable, and token-efficient for both humans and AI assistants.

---

## 🧠 1. Core Principles
| Principle | Description |
|------------|-------------|
| **Consistency > Cleverness** | Prefer clear, repeatable patterns over smart hacks. |
| **Readability First** | Code is read 10× more than written. Optimize for clarity. |
| **Small, Composable Units** | Keep functions and components focused on one task. |
| **Document Intent** | Explain *why* a decision was made, not just *what* it does. |
| **Convention over Configuration** | Follow established patterns before adding complexity. |

---

## 🧩 2. Code Quality Rules
- Enforce **ESLint + Prettier** in CI.
- No inline styles or magic numbers.
- Each function < 50 lines (prefer splitting).
- Each file exports a single default entity.
- No unused imports, dead code, or TODOs left in main branch.
- Write variable and function names that *read like English sentences*.

**Example**
```js
// ✅ Good
const getUserProfile = async (id) => await db.user.findById(id);

// ❌ Avoid
const getU = (x) => db.u.find(x);
```

---

## 🧪 3. Testing Standards
| Type | Tool | Scope |
|-------|------|--------|
| Unit | Vitest / Jest | Individual functions and components |
| Integration | Playwright / Cypress | Combined modules and API routes |
| E2E | Playwright | Full user flows |

**Rules**
- All critical components require at least one test.
- Avoid snapshot testing unless necessary.
- Each test name must describe the intent, not the function name.

---

## 🔀 4. Version Control
| Area | Rule |
|-------|------|
| **Branch naming** | `feature/`, `fix/`, `refactor/`, `docs/` prefixes only. |
| **Commits** | Use conventional commits (`feat:`, `fix:`, `chore:`). |
| **PRs** | One logical change per PR. |
| **Links** | Every PR must reference an issue or task. |

**Example**
```
feat: add caching to user profile route
```

---

## 🧰 5. Code Review
- PRs should be under 400 lines when possible.
- Add concise PR descriptions (“what changed” / “why”).
- Every review comment should aim to teach or clarify intent.
- “Nitpicks” go in a separate section or follow-up PR.
- If a review triggers confusion → update documentation.

---

## 🧑‍💻 6. Documentation Discipline
- Update related `.md` files in `memory-bank/` after major refactors.
- Every architectural change must be logged in `architecture.md`.
- If adding a new feature, document it in `implementation-plan.md`.
- Avoid duplicate explanations across files; prefer linking.

---

## ⚡ 7. Performance & Maintainability
- Avoid premature optimization — profile first.
- Cache results only for measurable bottlenecks.
- Prefer async/await over nested callbacks.
- Keep dependencies minimal; prefer built-in solutions.
- Review bundle size periodically.

---

## 🧩 8. Error Handling
| Context | Rule |
|----------|------|
| **Frontend** | Display clear user-facing messages; avoid stack traces. |
| **Backend** | Centralize error logging middleware. |
| **Services** | Use structured logs (timestamp, context, error code). |
| **Database** | Gracefully handle null/undefined responses. |

All errors should contain context (what failed, where, why).

---

## 🔒 9. Security Practices
- Never log secrets or credentials.
- Always validate user input (frontend + backend).
- Escape user-provided data in templates.
- Keep dependencies up-to-date monthly.
- Run dependency audit in CI.

---

## 🧠 10. Usage Notes
- Cursor uses this file as a behavioral reference for code generation and refactoring.
- All generated code should comply with these conventions automatically.
- If multiple conventions exist, prefer the one defined here.
