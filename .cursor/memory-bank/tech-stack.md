---
memory-type: tech-stack
use-case: Describe and justify the technologies used across all layers.
prompt-guidance:
  - Use this file when asked to justify or select technologies.
  - Keep answers aligned with the documented stack.
  - Do not invent or assume tools beyond those listed here.
priority: high
scope: project
---

# Technology Stack

This document defines the technologies used across all layers of the system, with reasoning for each choice.  
Use it as the **single source of truth** for Cursor when reasoning about frameworks, deployment, or tools.

---

## 🧱 1. Frontend

| Category | Technology | Purpose | Notes |
|-----------|-------------|----------|-------|
| Framework | **Next.js + React** | UI rendering, routing, and state management | Strong ecosystem, SSR/SSG support |
| Styling | **TailwindCSS + shadcn/ui** | Consistent, composable design system | Fast iteration, token-based styling |
| Animations | **Framer Motion** | Declarative motion and transitions | Lightweight and flexible |
| Bundler | **Vite** | Fast build tool and dev server | Improves DX and rebuild times |

**Guidelines**
- Favor composition over complexity.
- No inline CSS (use Tailwind or global tokens).
- Pages and components must stay stateless where possible.

---

## ⚙️ 2. Backend

| Category | Technology | Purpose | Notes |
|-----------|-------------|----------|-------|
| Framework | **Express.js / Node.js** | API layer and routing | Simple, fast, well-documented |
| ORM | **Prisma** | Database abstraction | Type-safe, migrations built-in |
| Database | **PostgreSQL** | Main data storage | Strong consistency, relational |
| Caching | **Redis** | Performance optimization | For sessions, queues, rate-limits |
| API Docs | **Swagger / OpenAPI** | API documentation | Auto-generated from routes |

**Guidelines**
- Each service has its own entry point.
- Avoid shared mutable state.
- Always validate inputs before persistence.

---

## ☁️ 3. Deployment & Infrastructure

| Category | Platform | Purpose | Notes |
|-----------|-----------|----------|-------|
| Frontend Hosting | **Vercel** | CDN-backed SSR deployment | Auto-optimized for Next.js |
| Backend Hosting | **Fly.io / Railway** | API hosting with scaling | Suitable for microservices |
| CI/CD | **GitHub Actions** | Continuous deployment | Runs tests and builds automatically |
| Monitoring | **Grafana + Logtail** | Observability | Real-time metrics and logs |
| Storage | **Supabase / S3** | File storage | Versioned and permissioned assets |

**Guidelines**
- Keep environment variables in `.env`.
- Never commit secrets.
- Deploy from main branch only after tests pass.

---

## 🔒 4. Security Stack

| Category | Technology | Purpose |
|-----------|-------------|----------|
| Authentication | **JWT / Session-based** | User identity and session management |
| Encryption | **AES / HTTPS (TLS 1.3)** | Data confidentiality |
| Secrets Management | **Vault / Dotenv** | Secure environment handling |
| Validation | **Zod / Joi** | Schema validation for requests |

**Rules**
- All endpoints require authentication unless explicitly public.
- All tokens must expire and refresh safely.
- Never log credentials or sensitive payloads.

---

## 🧪 5. Development Tooling

| Category | Tool | Purpose |
|-----------|------|----------|
| Version Control | **Git + GitHub** | Codebase management |
| Testing | **Vitest / Jest / Playwright** | Unit + e2e testing |
| Linting | **ESLint + Prettier** | Code consistency |
| API Mocking | **MSW (Mock Service Worker)** | Simulate API responses locally |
| Docs | **Markdown / Docusaurus** | Internal documentation |

**Guidelines**
- Tests required for all critical functions.
- Use Git branching by feature.
- Keep lint warnings at zero.

---

## 🧭 6. Summary Table

| Layer | Primary Tech | Notes |
|--------|----------------|--------|
| Frontend | Next.js + Tailwind + shadcn | Fast, modular, predictable |
| Backend | Node.js + Express + Prisma | Robust and scalable |
| Database | PostgreSQL | Reliable RDBMS |
| Caching | Redis | Low-latency cache |
| Deployment | Vercel / Fly.io | Simple, CI-integrated |
| Monitoring | Grafana + Logtail | Full observability |

---

## 🧠 7. Usage Notes
- Cursor should refer to this file when generating or evaluating code tied to specific technologies.
- When unsure about tool selection, explain trade-offs using this stack as baseline.
- Never mix alternative technologies without justification.
