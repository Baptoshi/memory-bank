import { TemplateFull } from '@/lib/types';
import { CopyButton } from '@/components/CopyButton';
import { Button } from '@/components/ui/Button';

interface TemplateDetailProps {
  template: TemplateFull;
}

export function TemplateDetail({ template }: TemplateDetailProps) {
  return (
    <div className="max-w-4xl space-y-lg">
      <div className="space-y-md">
        <div className="flex flex-wrap items-center gap-md">
          <span className="text-xs uppercase tracking-wider text-technical-violet px-md py-xs border border-technical-violet rounded font-medium">
            {template.type}
          </span>
          <span className="text-xs uppercase tracking-wider text-neutral-grey/60">
            Priority: {template.priority}
          </span>
          <span className="text-xs uppercase tracking-wider text-neutral-grey/60">
            Scope: {template.scope}
          </span>
          <span className="text-xs uppercase tracking-wider text-neutral-grey/60">
            v{template.version}
          </span>
        </div>

        <h1 className="text-5xl font-display font-semibold text-neutral-grey">
          {template.title}
        </h1>

        <p className="text-lg text-neutral-grey/80 max-w-2xl">
          {template.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-md">
        <CopyButton content={template.content} />
        <a
          href={`/api/export/${template.slug}`}
          download={`${template.slug}.md`}
        >
          <Button variant="secondary">Download .md</Button>
        </a>
      </div>

      <div className="mt-xl">
        <pre className="bg-architect-green/50 p-lg rounded border border-neutral-grey/20 overflow-x-auto">
          <code className="text-neutral-grey text-sm font-mono whitespace-pre">
            {template.content}
          </code>
        </pre>
      </div>
    </div>
  );
}

