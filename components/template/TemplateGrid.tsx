import { TemplateSummary } from '@/lib/types';
import { TemplateCard } from './TemplateCard';

interface TemplateGridProps {
  templates: TemplateSummary[];
  basePath?: string;
}

export function TemplateGrid({ templates, basePath }: TemplateGridProps) {
  if (templates.length === 0) {
    return (
      <div className="text-center py-xl">
        <p className="text-neutral-grey/60">No templates found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
      {templates.map((template) => (
        <TemplateCard key={template.slug} template={template} basePath={basePath} />
      ))}
    </div>
  );
}

