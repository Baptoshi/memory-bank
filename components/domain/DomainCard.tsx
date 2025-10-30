import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

interface DomainCardProps {
  slug: string;
  name: string;
  description: string;
  accentColor: string;
  templateCount: number;
  focus: string[];
}

export function DomainCard({
  slug,
  name,
  description,
  accentColor,
  templateCount,
  focus,
}: DomainCardProps) {
  return (
    <Link href={`/libraries/${slug}`} className="block h-full">
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center justify-between mb-sm">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <span className="text-xs uppercase tracking-wider text-neutral-grey/60">
              {templateCount} templates
            </span>
          </div>
          <CardTitle className="text-neutral-grey">{name}</CardTitle>
          <CardDescription className="mt-sm">{description}</CardDescription>
          <div className="mt-md flex flex-wrap gap-xs">
            {focus.slice(0, 3).map((item) => (
              <span
                key={item}
                className="text-xs px-sm py-xs bg-neutral-grey/10 text-neutral-grey/80 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}

