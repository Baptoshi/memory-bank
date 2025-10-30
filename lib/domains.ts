// Domain definitions for multi-bank Memory architecture

export const MEMORY_BANKS = [
  {
    slug: 'web-app',
    name: 'Web App',
    description: 'Classic web applications with frontend-heavy, static + dynamic hybrid architecture',
    accentColor: '#B7A9D9',
    focus: ['clarity', 'UI logic', 'routing', 'component structure'],
  },
  {
    slug: 'saas',
    name: 'SaaS Platform',
    description: 'Multi-tenant applications with subscriptions, dashboards, and user management',
    accentColor: '#DAF064',
    focus: ['auth', 'billing', 'infrastructure', 'user roles'],
  },
  {
    slug: 'ai-tool',
    name: 'AI Tool',
    description: 'LLM-powered interfaces, assistants, and reasoning layers',
    accentColor: '#2A2D22',
    focus: ['context memory', 'prompt logic', 'structured reasoning'],
  },
  {
    slug: 'crypto-app',
    name: 'Crypto App',
    description: 'On-chain dashboards, staking, custody, and validator infrastructure',
    accentColor: '#D1B67A',
    focus: ['security', 'node architecture', 'RPCs', 'wallet interactions'],
  },
  {
    slug: 'data-dashboard',
    name: 'Data Dashboard',
    description: 'Internal analytics tools and business intelligence dashboards',
    accentColor: '#9EB9E8',
    focus: ['data visualization', 'schema', 'metrics', 'interactions'],
  },
  {
    slug: 'landing',
    name: 'Landing Page',
    description: 'Single-page marketing sites with conversion-focused structure',
    accentColor: '#E8E7E3',
    focus: ['copy clarity', 'conversion structure', 'page rhythm'],
  },
] as const;

export type MemoryBankSlug = (typeof MEMORY_BANKS)[number]['slug'];

export function getMemoryBank(slug: string) {
  return MEMORY_BANKS.find((bank) => bank.slug === slug);
}

export function getAllMemoryBanks() {
  return MEMORY_BANKS;
}

