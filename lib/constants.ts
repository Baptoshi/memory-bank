export const TEMPLATE_TYPES = [
  'architecture',
  'design',
  'development',
  'deployment',
  'structure',
  'tech',
] as const;

export type TemplateType = (typeof TEMPLATE_TYPES)[number];

export const PRIORITY_LEVELS = ['high', 'medium', 'low'] as const;
export type Priority = (typeof PRIORITY_LEVELS)[number];

export const SCOPE_LEVELS = ['project', 'session', 'system'] as const;
export type Scope = (typeof SCOPE_LEVELS)[number];

export const APP_VERSION = '1.0.0';
export const APP_NAME = 'Memory Bank';

