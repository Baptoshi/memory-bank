---
memory-type: folder-structure
use-case: Define and reason about folder hierarchy, naming conventions, and placement of files.
prompt-guidance: 
  - Use this document when asked to generate, navigate, or refactor file structures.
  - Do not invent folders not listed here.
  - Keep structure consistent with this reference.
priority: high
scope: project
---

# Folder Structure

This file defines the canonical folder organization for the project.  
It ensures all generated files, commands, and explanations remain consistent and token-efficient.

---

## 🧱 1. Root Layout
```
[project-name]/
├── frontend/              # Client app (UI/UX layer)
├── backend/               # API + business logic
├── [service-name]/        # Optional service (AI, analytics, worker)
├── docs/                  # Documentation
├── memory-bank/           # Cursor knowledge base (.md files)
├── .github/               # Workflows and issue templates
├── LICENSE
├── README.md
└── package.json
```
**Rules**
- All names lowercase, kebab-case (`my-feature`, `user-auth`).
- Keep each folder domain-specific.
- Avoid nesting beyond 3 levels.
- Do not store binary assets outside `public/` or `docs/images/`.

---

## 🎨 2. Frontend
```
frontend/
├── public/                # Static assets (favicon, images, fonts)
├── src/
│   ├── components/        # UI building blocks
│   │   ├── common/        # Shared UI (Button, Card, etc.)
│   │   └── [feature]/     # Feature-specific components
│   ├── pages/             # Routed views
│   ├── hooks/             # Custom React hooks
│   ├── context/           # React context providers
│   ├── services/          # API calls and clients
│   ├── utils/             # Helper functions
│   ├── styles/            # Global styles (Tailwind, globals.css)
│   ├── App.jsx
│   └── index.jsx
├── .env.example
├── tailwind.config.js
└── vite.config.js
```
**Frontend conventions**
- All React components are functional and live in their own folder.
- Use relative imports inside `src/` only.
- No business logic inside components.

---

## ⚙️ 3. Backend
```
backend/
├── src/
│   ├── controllers/       # Request handlers
│   ├── models/            # Database schemas
│   ├── routes/            # REST or GraphQL endpoints
│   ├── services/          # Domain logic
│   ├── middleware/        # Auth, rate-limit, etc.
│   ├── utils/             # Shared helpers
│   ├── config/            # DB, env, and server setup
│   ├── app.js             # Express app config
│   └── server.js          # Entry point
├── tests/                 # Unit and integration tests
└── .env.example
```
**Backend conventions**
- Every route must have its controller.
- Configs belong under `config/`.
- Keep logic stateless when possible.

---

## 🧩 4. Services (Optional)
```
[service-name]/
├── src/
│   ├── handlers/          # Request entry points
│   ├── models/            # Internal data models
│   ├── utils/             # Helper functions
│   └── index.js
└── serverless.yml         # Only if deployed serverlessly
```
Use this only for isolated microservices or AI pipelines.

---

## 🧠 5. Memory Bank
```
memory-bank/
├── design-doc.md
├── architecture.md
├── tech-stack.md
├── implementation-plan.md
├── deployment-checklist.md
├── progress.md
├── development-guidelines.md
└── [feature]-integration.md
```
**Purpose**
- Provide structured context to Cursor.
- Do not edit in code generation sessions; update manually.
- Keep filenames descriptive (e.g. `ai-service-integration.md`).

---

## 📘 6. Documentation
```
docs/
├── api/
│   ├── endpoints.md
│   └── ...
├── development/
│   ├── setup.md
│   └── workflows.md
├── user/
│   ├── getting-started.md
│   └── features.md
└── images/
```
**Tips**
- Keep `.md` docs short and task-oriented.
- Prefer linking to memory-bank for project-specific knowledge.

---

## 🧰 7. GitHub Configuration
```
.github/
├── workflows/
│   ├── ci.yml
│   ├── deploy.yml
│   └── ...
└── ISSUE_TEMPLATE.md
```
Automate tests, lint, deploys, and PR validations.

---

## ✅ Usage Notes
- Cursor uses this structure to understand where to generate files.
- When unsure where a file belongs, prefer the most domain-specific folder.
- Avoid hallucinating directories; rely only on this reference.
