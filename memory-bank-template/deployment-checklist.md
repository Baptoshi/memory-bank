---
memory-type: deployment
use-case: Define and verify the deployment workflow, from build to post-release validation.
prompt-guidance:
  - Use this document when generating deployment scripts, CI/CD pipelines, or verifying production readiness.
  - Do not assume undeclared environments or platforms.
  - Always ensure all validation steps are checked before marking deployment complete.
priority: medium
scope: project
---

# Deployment Checklist

This document standardizes the deployment process for all environments — ensuring consistency, reliability, and full observability.

---

## 🧱 1. Environment Setup
| Step | Description | Responsible | Status |
|------|--------------|-------------|--------|
| Prepare environment variables | Load from `.env` or secret manager | DevOps | ⏳ |
| Check credentials and permissions | Validate CI/CD tokens and SSH keys | DevOps | ⏳ |
| Validate staging infrastructure | Ensure staging mirrors production | Backend | ⏳ |
| Review configuration files | Ensure paths, ports, and endpoints match | Team Lead | ⏳ |

**Guidelines**
- Never commit `.env` or credentials.
- All configs must pass environment diff before production.

---

## ⚙️ 2. Build & Test
| Step | Description | Status |
|------|--------------|--------|
| Run unit tests | Validate core logic | ✅ |
| Run integration tests | Validate frontend-backend connection | ✅ |
| Run E2E tests | Validate full user flow | 🟡 |
| Run Lighthouse audit | Validate performance and accessibility | ⏳ |

**Rules**
- Build must succeed with no warnings or failing tests.
- Skip deployments if build status ≠ 0.
- Store build artifacts for rollback verification.

---

## 🚀 3. Deployment Process
| Step | Action | Tool / Platform | Status |
|------|--------|------------------|--------|
| Deploy frontend | Push to **Vercel** | GitHub Actions | ⏳ |
| Deploy backend | Deploy to **Fly.io / Railway** | CI/CD pipeline | ⏳ |
| Migrate database | Apply Prisma migrations | Prisma CLI | ⏳ |
| Deploy auxiliary services | AI workers / cron jobs / queues | Docker / PM2 | ⏳ |

**Guidelines**
- Tag each deployment commit with version (e.g., `v1.3.0`).
- Use “green-blue” strategy or pre-warmed containers.
- Each deploy must produce a health check report.

---

## 🧩 4. Validation
| Area | Validation Step | Expected Result |
|-------|------------------|----------------|
| UI | Home, dashboard, and settings load correctly | ✅ |
| API | All routes return 2xx responses | ✅ |
| Auth | Login and logout flows operational | ✅ |
| Performance | Response time < 300ms | ✅ |
| Security | HTTPS and headers configured | ✅ |

**Checklist**
- [ ] Verify core user journeys (create, edit, delete).
- [ ] Confirm error boundaries and fallbacks.
- [ ] Check console logs → no 4xx/5xx client errors.

---

## 📊 5. Post-Deployment Monitoring
| Tool | Purpose | Threshold |
|------|----------|-----------|
| Grafana | Metrics, uptime | 99.9% uptime |
| Logtail / Datadog | Error tracking | < 0.1% error rate |
| Sentry | Frontend exception monitoring | 0 criticals |
| Healthchecks.io | Heartbeat for background jobs | Consistent pings |

**Guidelines**
- Enable alerts for downtime or API degradation.
- Validate logging retention and alert rules monthly.

---

## 🔁 6. Rollback & Recovery
| Trigger | Action | Responsible |
|----------|---------|--------------|
| Failed deployment | Rollback to last successful build | DevOps |
| Critical outage | Revert infrastructure snapshot | Cloud Admin |
| Database issue | Restore last backup (daily) | DBA |
| Security breach | Rotate all credentials immediately | Security Lead |

**Checklist**
- [ ] Verify rollback builds locally before redeployment.
- [ ] Keep last 3 backups of DB and app images.
- [ ] Run post-rollback smoke tests.

---

## 🧠 7. Usage Notes
- Cursor should use this file when reasoning about deployment automation or production readiness.
- Never skip sections — each represents a required safety layer.
- Keep all fields measurable (no “ensure everything works”).
