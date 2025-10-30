# Installation

Before using the Memory Bank, you need to set up your development environment.  
This step ensures your system can interpret, run, and expand the Memory Bank structure correctly.

You’ll install the required dependencies, create your environment files, and verify that the system boots without errors.

---

## Step Objectives

- Prepare your local environment  
- Install all dependencies  
- Configure your `.env` file  
- Verify that the project runs successfully  

---

## Prerequisites

- Node.js 20 or higher  
- npm 10 or higher  
- Git installed  
- A PostgreSQL instance (local or remote)  
- VS Code or Cursor as your IDE  

If you’re using Cursor, make sure the project is connected to your `.cursor` folder — it will automatically load your Memory Bank files.

---

## 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/memory-bank.git
cd memory-bank
```

---

## 2. Install Dependencies

```bash
npm install
```

This installs everything listed in `package.json`, including:

- Next.js (frontend framework)  
- Prisma (database ORM)  
- TailwindCSS (styling)  
- TypeScript (type safety)  
- Vitest & Playwright (testing)  

---

## 3. Environment Configuration

Copy the example environment file and set your variables:

```bash
cp .env.example .env
```

Then open `.env` and edit the values:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/memorybank"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

You can leave optional fields (like Sentry or Plausible) empty for now.

---

## 4. Generate Prisma Client

```bash
npx prisma generate
```

---

## 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
You should see the Memory Bank homepage with the guide overview.

---

## Verification

✅ You have:
- Installed all dependencies  
- Configured your `.env` file  
- Generated the Prisma client  
- Successfully started the local server  

---

Next: [Step 03 → Activation](../03-activation)
