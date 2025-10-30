import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { TemplateSummary, TemplateFull } from './types';
import { TemplateType } from './constants';
import { MemoryBankSlug } from './domains';

const DOMAINS_PATH = path.join(process.cwd(), 'app', 'libraries', 'data');

// Map template filenames to human-readable titles
const TEMPLATE_TITLES: Record<string, string> = {
  'architecture': 'System Architecture',
  'design-doc': 'Design Document',
  'tech-stack': 'Technology Stack',
  'folder-structure': 'Folder Structure',
  'development-guidelines': 'Development Guidelines',
  'implementation-plan': 'Implementation Plan',
  'development-progress': 'Development Progress',
  'deployment-checklist': 'Deployment Checklist',
  'user-flow': 'User Flow',
  'data-model': 'Data Model',
  'api-design': 'API Design',
  'security-model': 'Security Model',
};

export async function loadDomainTemplate(
  domain: MemoryBankSlug,
  slug: string
): Promise<TemplateFull | null> {
  try {
    const filePath = path.join(DOMAINS_PATH, domain, `${slug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: TEMPLATE_TITLES[slug] || data.title || slug,
      description: data['use-case'] || 'Domain-specific cognitive template',
      type: (data['memory-type'] || 'structure') as TemplateType,
      priority: (data.priority || 'medium') as 'high' | 'medium' | 'low',
      scope: (data.scope || 'project') as 'project' | 'session' | 'system',
      content,
      version: '1.0.0',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`Failed to load template: ${domain}/${slug}`, error);
    return null;
  }
}

export async function loadAllDomainTemplates(
  domain: MemoryBankSlug
): Promise<TemplateSummary[]> {
  try {
    const domainPath = path.join(DOMAINS_PATH, domain);
    const files = await fs.readdir(domainPath);
    const mdFiles = files.filter((file) => file.endsWith('.md'));

    const templates = await Promise.all(
      mdFiles.map(async (file) => {
        const slug = file.replace('.md', '');
        const template = await loadDomainTemplate(domain, slug);
        if (!template) return null;

        return {
          slug: template.slug,
          title: template.title,
          description: template.description,
          type: template.type,
          priority: template.priority,
          scope: template.scope,
        } as TemplateSummary;
      })
    );

    return templates.filter((t): t is TemplateSummary => t !== null);
  } catch (error) {
    console.error(`Failed to load templates for domain: ${domain}`, error);
    return [];
  }
}

export async function getDomainTemplateCount(
  domain: MemoryBankSlug
): Promise<number> {
  try {
    const domainPath = path.join(DOMAINS_PATH, domain);
    const files = await fs.readdir(domainPath);
    return files.filter((file) => file.endsWith('.md')).length;
  } catch {
    return 0;
  }
}

