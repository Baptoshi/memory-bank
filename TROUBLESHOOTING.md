# Memory Bank — Troubleshooting Guide

Common issues and their solutions.

---

## Issue 1: UI Shows No Styles (White Background, Black Text)

### Symptoms
- Homepage displays with default browser styles
- No Bauhaus colors (architect-green background missing)
- Text appears in default black instead of neutral-grey
- Links are blue instead of technical-violet

### Root Cause
Next.js `.next` cache is corrupted or CSS compilation failed.

### Solution
```bash
# 1. Stop the dev server
pkill -f "next dev"

# 2. Clear the Next.js cache
rm -rf .next

# 3. Restart dev server
npm run dev

# 4. Wait 5-8 seconds for compilation
# 5. Refresh browser (CMD+R or CTRL+R)
```

### Verification
```bash
# Check if CSS is being served
curl -I http://localhost:3000/_next/static/css/app/layout.css

# Should return:
# HTTP/1.1 200 OK
# Content-Type: text/css; charset=UTF-8

# Check if Bauhaus colors are in CSS
curl -s http://localhost:3000/_next/static/css/app/layout.css | grep "architect-green"

# Should return color definitions
```

---

## Issue 2: TypeScript Errors After Adding New Files

### Symptoms
- `tsc --noEmit` fails with module not found errors
- IDE shows red squiggly lines under imports

### Root Cause
TypeScript hasn't picked up new files or path aliases aren't resolving.

### Solution
```bash
# Restart TypeScript server in VSCode/Cursor
# CMD+Shift+P → "TypeScript: Restart TS Server"

# Or manually rebuild
npm run build
```

---

## Issue 3: API Routes Return 404

### Symptoms
- `/api/templates` returns 404
- `/api/libraries` returns 404

### Root Cause
- Route files not in correct location
- Server didn't pick up new routes

### Solution
```bash
# Verify route files exist
ls -la app/api/templates/route.ts
ls -la app/api/libraries/route.ts

# Restart dev server
pkill -f "next dev" && npm run dev
```

---

## Issue 4: Fonts Not Loading (System Fonts Display Instead)

### Symptoms
- Text displays in system sans-serif instead of Space Grotesk/Inter
- Font appears jagged or inconsistent

### Root Cause
- Google Fonts API blocked or slow
- Font variables not applied to HTML element

### Solution
```bash
# Check app/layout.tsx
# Ensure both fonts are imported and applied:

import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ variable: '--font-inter', ... });
const spaceGrotesk = Space_Grotesk({ variable: '--font-clash-display', ... });

<html className={`${inter.variable} ${spaceGrotesk.variable}`}>
```

---

## Issue 5: Build Fails with "Module Not Found"

### Symptoms
- `npm run build` exits with error code 1
- Error: "Cannot find module 'X'"

### Root Cause
- Missing dependency in `package.json`
- Node modules not installed

### Solution
```bash
# Reinstall all dependencies
rm -rf node_modules package-lock.json
npm install

# Verify specific package
npm list react-markdown
npm list gray-matter
```

---

## Issue 6: Port 3000 Already in Use

### Symptoms
- `npm run dev` fails with "EADDRINUSE"
- Cannot start server

### Root Cause
- Previous Next.js process still running
- Another app using port 3000

### Solution
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

---

## Issue 7: Markdown Content Not Rendering

### Symptoms
- Guide pages show empty content
- Template detail pages blank

### Root Cause
- Markdown files missing or path incorrect
- `fs.readFile` permissions issue

### Solution
```bash
# Verify Markdown files exist
ls -la guide/*.md
ls -la .cursor/memory-bank/*.md

# Check file permissions
chmod 644 guide/*.md

# Verify path resolution in code
# Should use: path.join(process.cwd(), 'guide', ...)
```

---

## Issue 8: Prisma Client Not Generated

### Symptoms
- Import error: `@prisma/client` not found
- TypeScript error on `PrismaClient`

### Root Cause
- Prisma Client not generated after schema changes

### Solution
```bash
# Generate Prisma Client
npx prisma generate

# Or use npm script
npm run prisma:generate

# Verify installation
npm list @prisma/client
```

---

## Issue 9: ESLint Errors in Production Build

### Symptoms
- `npm run build` fails with ESLint errors
- "react/no-unescaped-entities" error

### Root Cause
- Quotes or apostrophes in JSX not properly escaped

### Solution
```tsx
// Replace unescaped quotes with HTML entities
❌ "The system is ready"
✅ &ldquo;The system is ready&rdquo;

// Or use single quotes in JSX
❌ It's ready
✅ It&apos;s ready
```

---

## Issue 10: Dev Server Slow or Unresponsive

### Symptoms
- Page loads take >5 seconds
- Hot reload not working

### Root Cause
- Too many files being watched
- Node.js memory limit reached

### Solution
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run dev

# Clear all caches
rm -rf .next node_modules/.cache

# Reinstall dependencies
npm install
```

---

## Issue 11: Deployment Fails on Vercel

### Symptoms
- Vercel build succeeds but site shows 500 error
- Environment variables not working

### Root Cause
- Missing environment variables
- Database connection string incorrect

### Solution
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add required variables from `.env.example`:
   - `NEXT_PUBLIC_SITE_URL`
   - `DATABASE_URL` (if using Prisma)
3. Redeploy from Git

---

## Issue 12: Guide Pages Return 404

### Symptoms
- `/guide` works but `/guide/01_introduction` returns 404

### Root Cause
- Dynamic route file missing
- Markdown file path incorrect in `lib/guide-data.ts`

### Solution
```bash
# Verify dynamic route exists
ls -la app/guide/[step]/page.tsx

# Verify guide files exist
ls -la guide/01_introduction.md

# Check slug matches in lib/guide-data.ts
# slug: '01_introduction' must match filename
```

---

## Quick Diagnostic Commands

```bash
# Check server status
curl -I http://localhost:3000

# Check API health
curl http://localhost:3000/api/templates | head -c 200

# Check CSS loading
curl -I http://localhost:3000/_next/static/css/app/layout.css

# Check TypeScript
npx tsc --noEmit

# Check ESLint
npm run lint

# Check build
npm run build

# Check dependencies
npm list --depth=0
```

---

## Emergency Reset

If all else fails, complete reset:

```bash
# 1. Stop all processes
pkill -f "next dev"

# 2. Delete all caches and builds
rm -rf .next node_modules package-lock.json

# 3. Reinstall everything
npm install

# 4. Rebuild
npm run build

# 5. Start fresh
npm run dev
```

---

## Getting Help

1. **Check Console:** Browser DevTools → Console tab for JavaScript errors
2. **Check Network:** DevTools → Network tab for failed requests (red items)
3. **Check Terminal:** Server logs for compilation errors
4. **Check Linter:** Run `npm run lint` for code style issues
5. **Check Types:** Run `npx tsc --noEmit` for type errors

---

**Memory Bank — Systemic Architect**  
*When structure breaks, rebuild from foundation.*

