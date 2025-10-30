# Domain Expansion

Once your Memory Bank is stable and verified, you can begin expanding it into multiple domains.  
This phase is about **scaling knowledge**, not code — allowing the system to reason across different areas while keeping a consistent architecture.

---

## Objective

Domain Expansion allows you to:

- Duplicate the Memory Bank structure for a new subject or use case  
- Keep all systemic rules, tone, and behavior consistent  
- Enable independent reasoning across multiple contexts  
- Prepare for cross-domain interaction and collaboration  

Each domain becomes a **specialized Memory Bank** — connected in principle, but autonomous in reasoning.

---

## 1. Create a New Domain Bank

Every domain lives in its own folder under `.cursor/memory-bank/`.

For example:

```
.cursor/
└── memory-bank/
    ├── general/
    │   ├── architecture.md
    │   ├── design-doc.md
    │   └── ...
    ├── ai-models/
    │   ├── architecture.md
    │   ├── design-doc.md
    │   └── ...
    └── web3/
        ├── architecture.md
        ├── design-doc.md
        └── ...
```

Each folder represents a self-contained reasoning domain — with its own architecture, design, and implementation documents.

---

## 2. Copy the Core Structure

Start by duplicating the **8 core files** from your general Memory Bank:

```
architecture.md  
folder-structure.md  
tech-stack.md  
design-doc.md  
development-guidelines.md  
implementation-plan.md  
development-progress.md  
deployment-checklist.md
```

Place them inside the new domain folder and adapt their content to fit the domain’s purpose.  
Keep their structure intact — only change **details**, not **format**.

---

## 3. Define the Domain Identity

Inside the new folder, create a short `domain.md` file to describe what this domain covers.

Example:

```markdown
# Domain: Web3 Infrastructure

Focus: Secure staking, validator orchestration, and node operations.  
Tone: Technical, precise, reliability-focused.  
Architecture: Modular services with distributed validators.  
Primary Goal: Maintain uptime and verifiable trust.
```

This helps Cursor distinguish the reasoning context when switching between domains.

---

## 4. Update the Activation Protocol

Open `.cursor/activation.md` and declare your new domains:

```markdown
## Domains Registered

- general
- ai-models
- web3
```

This tells Cursor which cognitive systems are part of your architecture.

Each domain will then load its own memory set when prompted.

---

## 5. Test Domain Switching in Cursor

To verify that domain reasoning works correctly, use a prompt like:

```
## Task
Explain how architecture.md in the “web3” domain differs from the general domain.
```

Cursor should:
- Load the correct `web3/architecture.md` file  
- Compare its reasoning with the `general` one  
- Maintain the same systemic tone and structure  

If Cursor mixes reasoning between domains, check that each `.md` file has unique, clearly defined headers.

---

## 6. Create Domain-Specific Routes

For each new domain, extend your frontend routes.  
Example structure:

```
app/
└── libraries/
    ├── page.tsx
    ├── [domain]/
    │   ├── page.tsx
    │   └── [slug]/
    │       └── page.tsx
```

Each `[domain]/` folder maps to one Memory Bank, allowing users to browse its specific templates.

You can use the same UI components — only the data source changes.

---

## 7. Integrate with the API Layer

Update your API to handle domain-based routing.

```typescript
// /api/libraries/[domain]/route.ts
import { NextResponse } from 'next/server';
import { getTemplatesByDomain } from '@/lib/templates';

export async function GET(req: Request, { params }: { params: { domain: string } }) {
  const templates = await getTemplatesByDomain(params.domain);
  return NextResponse.json({ status: 'ok', data: templates });
}
```

Each domain has its own collection of templates — linked to its reasoning model.

---

## 8. Cross-Domain Reasoning

Once multiple domains are active, you can create **meta-queries** that bridge them.

For example:

```
## Task
Compare how the design-doc.md in “web3” and “ai-models” handle modular components.
```

Cursor should interpret this as:
- Load both memory contexts  
- Align reasoning based on their shared system rules  
- Return a comparison grounded in both architectures  

This enables higher-level reasoning and hybrid knowledge synthesis.

---

## 9. Verify Structure

Run a structure validation to confirm all files are present:

```bash
find .cursor/memory-bank -type f | grep ".md"
```

You should see a full list of domains, each with its eight core memory files.

---

## 10. Domain Expansion Checklist

✅ Each new domain folder created  
✅ 8 memory modules copied and adapted  
✅ domain.md file added  
✅ Activation protocol updated  
✅ Cursor can switch reasoning contexts  
✅ Routes and APIs reflect domain separation  
✅ Cross-domain reasoning tested successfully  

---

## 11. Completion

You now have a **multi-domain Memory Bank** — a modular, scalable cognitive architecture.

Each domain can evolve independently, yet still operate within the same systemic language.  
This allows teams or projects to grow without fragmenting their reasoning logic.

---

Next: [Step 08 → Operational Protocol](../08-operational-protocol)
