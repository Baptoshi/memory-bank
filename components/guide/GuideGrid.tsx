import { GuideStep } from '@/lib/guide-data';
import { GuideCard } from './GuideCard';

interface GuideGridProps {
  steps: GuideStep[];
}

export function GuideGrid({ steps }: GuideGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {steps.map((step) => (
        <GuideCard key={step.slug} step={step} />
      ))}
    </div>
  );
}

