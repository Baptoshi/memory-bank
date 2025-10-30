import fs from 'fs/promises';
import path from 'path';

const REQUIRED_DIRS = [
  'app',
  'app/api',
  'app/library',
  'app/about',
  'components',
  'components/ui',
  'components/layout',
  'components/template',
  'lib',
  'styles',
  'prisma',
  'tests',
  'tests/unit',
  'tests/e2e',
  '.cursor/memory-bank',
];

const REQUIRED_FILES = [
  'package.json',
  'tsconfig.json',
  'next.config.js',
  'tailwind.config.ts',
  'app/layout.tsx',
  'app/page.tsx',
  'app/library/page.tsx',
  'app/library/[slug]/page.tsx',
  'components/CopyButton.tsx',
  'lib/memory.ts',
  'lib/types.ts',
  'lib/constants.ts',
];

async function validateSetup() {
  console.log('🔍 Validating Memory Bank setup...\n');

  let allValid = true;

  // Check directories
  console.log('📁 Checking directories...');
  for (const dir of REQUIRED_DIRS) {
    try {
      await fs.access(path.join(process.cwd(), dir));
      console.log(`  ✅ ${dir}`);
    } catch {
      console.log(`  ❌ ${dir} (missing)`);
      allValid = false;
    }
  }

  console.log('\n📄 Checking files...');
  for (const file of REQUIRED_FILES) {
    try {
      await fs.access(path.join(process.cwd(), file));
      console.log(`  ✅ ${file}`);
    } catch {
      console.log(`  ❌ ${file} (missing)`);
      allValid = false;
    }
  }

  console.log('\n📚 Checking memory bank templates...');
  const memoryBankPath = path.join(process.cwd(), '.cursor', 'memory-bank');
  const templates = await fs.readdir(memoryBankPath);
  const mdFiles = templates.filter((f) => f.endsWith('.md'));
  console.log(`  Found ${mdFiles.length} templates:`);
  mdFiles.forEach((f) => console.log(`    - ${f}`));

  if (allValid) {
    console.log('\n✅ Setup validation complete. Ready for npm install.');
  } else {
    console.log('\n❌ Setup validation failed. Missing files or directories.');
    process.exit(1);
  }
}

validateSetup().catch((error) => {
  console.error('Validation error:', error);
  process.exit(1);
});

