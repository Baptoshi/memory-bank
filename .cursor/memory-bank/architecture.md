---
memory-type: architecture
use-case: Describe and reason about system architecture, data flow, and interactions between layers.
prompt-guidance:
  - Use this document when asked to describe structure, relationships, or logic flow.
  - Do not invent components beyond what is explicitly listed.
  - Keep explanations concise and based on documented layers.
priority: high
scope: project
---

# System Architecture

This file defines how the application is structured across layers and how data moves between them.  
Use this reference to ensure architectural consistency and token efficiency.

---

## 🧱 1. Layer Overview

| Layer | Description | Example Tech |
|-------|--------------|---------------|
| **Frontend** | User-facing layer for UI rendering and interaction. | React, Next.js |
| **Backend** | Business logic, validation, and data processing. | Node.js, Express |
| **Services** | Optional modules for AI, analytics, or background jobs. | Python, Go, Workers |
| **Database / Storage** | Persistent layer for structured or unstructured data. | PostgreSQL, Redis |

**Principles**
- Keep modules independent and stateless.
- Use clear interfaces (API or events) between layers.
- Avoid unnecessary cross-dependencies.

---

## 🔁 2. Data Flow
```
[User] → [Frontend] → [Backend] → [Service/DB] → [Response → Frontend]
```

**Rules**
- Each arrow represents a verified API or service call.
- Do not assume implicit communication between layers.
- Responses must return typed, predictable payloads.

---

## ⚙️ 3. Component Roles

### Frontend
- Handles presentation, routing, and data fetch.
- Consumes APIs exposed by backend.
- Responsible for UX consistency and accessibility.
- Must remain agnostic of backend logic.

### Backend
- Central orchestration layer.
- Validates inputs, processes requests, and enforces rules.
- Manages integration between database and services.
- Should expose versioned API endpoints (`/v1/...`).

### Services (Optional)
- Perform isolated computations (e.g., ML inference, background queue).
- Communicate asynchronously with backend when possible.
- Must never contain user-facing logic.

### Database / Storage
- Maintains data integrity and long-term persistence.
- Use schema migrations to evolve safely.
- All access goes through backend (never directly from frontend).

---

## 🔒 4. Security Practices
- All communications over HTTPS.
- Validate every input on backend.
- Apply least privilege principle to credentials.
- Avoid storing sensitive data unless encrypted.
- Sanitize logs and error outputs.

---

## 📈 5. Scalability Principles
- Frontend: Use SSR or static builds when possible.
- Backend: Stateless instances with load balancers.
- Services: Queue-based scaling (RabbitMQ, Kafka, etc.).
- Database: Vertical first, then read replicas.
- Cache frequently accessed queries.

---

## 🧩 6. Integration Rules
- Use REST or GraphQL for frontend ↔ backend.
- Use message queues or webhooks for async jobs.
- Document all API endpoints in `/docs/api/`.
- Keep each integration explicit and minimal.

---

## 🧠 7. Usage Notes
- When reasoning about architecture, limit scope to these four layers.
- If new components are proposed, describe their data flow first.
- Never assume hidden services, implicit calls, or unlisted technologies.
