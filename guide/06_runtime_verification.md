# Runtime Verification

Before expanding into multiple domains, you must ensure that the Memory Bank actually runs as intended.  
This phase is about confirming that every route, component, and reasoning layer works together — exactly as designed.

---

## Objective

Runtime Verification ensures that your Memory Bank:

- Runs locally without errors or inconsistencies  
- Matches the design and behavioral rules defined in your memory files  
- Returns valid outputs across all API endpoints  
- Responds correctly to reasoning prompts in Cursor  
- Is ready for deployment and further modular expansion  

When this step is complete, your system is considered stable and production-ready.

---

## 1. Start the Runtime

Run your local environment:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

Check that:
- Every page loads without error  
- Navigation links work correctly  
- The guide pages show their markdown content  
- The UI follows your Bauhaus layout (colors, spacing, transitions)  
- The browser console shows no warnings  

If you notice anything unexpected, trace it back to your `.cursor/memory-bank` rules first — not the code.  
Most inconsistencies originate from architectural drift.

---

## 2. Type & Lint Verification

Before building, make sure your codebase is both clean and type-safe.

```bash
npm run lint
npx tsc --noEmit
```

- **Lint** enforces naming, formatting, and consistency  
- **TypeScript** confirms interface and prop integrity  

If either fails, fix issues before continuing.  
This step ensures your logic matches the structure documented in `development-guidelines.md`.

---

## 3. Build for Production

Once everything is clean:

```bash
npm run build
```

The build should finish without warnings or errors.  
If successful, you’ve confirmed that the system can be deployed safely.

---

## 4. Design Consistency Check

The Memory Bank’s design system is functional, not decorative.  
Run through this checklist visually:

| Element | Expected | Check |
|----------|-----------|--------|
| Background | `architect-green` | Layout and guide cards |
| Accent | `technical-violet` | Titles, highlights |
| Hover | `acid-accent` | Buttons, links |
| Motion | 300ms `transition-bauhaus` | All interactive elements |

If any visual component differs, it means the implementation has drifted from `design-doc.md`.

---

## 5. Test API Routes

Check that all your endpoints respond correctly:

```bash
curl http://localhost:3000/api/templates
curl http://localhost:3000/api/templates/architecture
curl http://localhost:3000/api/export/architecture
```

You should receive:
- Valid JSON responses  
- Proper HTTP status codes (200 OK)  
- Correct schema (no missing or extra fields)

This ensures data flow aligns with your architecture.

If Prisma is installed, also verify database readiness:

```bash
npx prisma generate
npx prisma studio
```

---

## 6. Verify Reasoning Runtime in Cursor

Your Memory Bank isn’t only a codebase — it’s a reasoning engine.  
To verify its cognitive runtime, open Cursor and type:

```
## Task
Explain how the implementation layer respects the design-doc.md rules.
```

Cursor should:
- Respond with a neutral, systemic tone  
- Reference `.cursor/memory-bank` modules directly  
- End its response with “Structure generated.”  

If it does, your reasoning protocol is functioning as intended.

---

## 7. Environment Setup Validation

Confirm that your environment variables are properly configured:

```bash
cp .env.example .env
```

Then fill in the required values in `.env`.

Next, verify installed dependencies:

```bash
npm list --depth=0
```

You should see all expected packages (Next.js, Prisma, React, Tailwind, etc.) with no missing peers.

---

## 8. Deployment Simulation

To simulate production locally:

```bash
npm run build && npm start
```

Then reopen [http://localhost:3000](http://localhost:3000)  
The behavior should match your development environment — no missing assets, fonts, or layout shifts.

If identical, your runtime is stable and ready for deployment.

---

## 9. Final Verification Checklist

✅ Application builds and runs without warnings  
✅ TypeScript passes with zero errors  
✅ Visual design matches Bauhaus system  
✅ All routes and APIs respond correctly  
✅ Cursor reasoning aligns with memory modules  
✅ Environment variables configured correctly  
✅ Local production simulation behaves as expected  

---

## 10. Phase Completion

Once every verification passes, log your status:

```bash
echo "Runtime verified. The system is ready for deployment." >> .cursor/status.log
```

This marks the transition to **Phase 7 — Domain Expansion**,  
where you’ll duplicate this stable foundation to build new, specialized Memory Banks.

---

Next: [Step 07 → Domain Expansion](../07-domain-expansion)
