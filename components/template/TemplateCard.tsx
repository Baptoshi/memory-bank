import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { TemplateSummary } from '@/lib/types';

interface TemplateCardProps {
  template: TemplateSummary;
  basePath?: string; // e.g., "/library" or "/libraries/web-app"
}

export function TemplateCard({ template, basePath = '/library' }: TemplateCardProps) {
  return (
    <Link href={`${basePath}/${template.slug}`} className="block h-full">
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center justify-between mb-sm">
            <span className="text-xs uppercase tracking-wider text-technical-violet font-medium">
              {template.type}
            </span>
            <span className="text-xs uppercase tracking-wider text-neutral-grey/60">
              {template.priority}
            </span>
          </div>
          <CardTitle className="text-neutral-grey">
            {template.title}
          </CardTitle>
          <CardDescription className="mt-sm">
            {template.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
