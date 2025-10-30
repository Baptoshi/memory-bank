import Link from 'next/link';
import { GuideStep } from '@/lib/guide-data';

interface GuideCardProps {
  step: GuideStep;
}

export function GuideCard({ step }: GuideCardProps) {
  return (
    <Link
      href={`/guide/${step.slug}`}
      className="block h-full border border-neutral-grey/20 rounded p-lg bg-architect-green hover:border-technical-violet transition-bauhaus duration-300"
    >
      <div className="flex items-center gap-md mb-md">
        <div className="w-12 h-12 rounded-full bg-technical-violet/20 flex items-center justify-center flex-shrink-0">
          <span className="text-technical-violet font-display font-semibold text-lg">
            {step.step}
          </span>
        </div>
        <h3 className="text-xl font-display font-semibold text-neutral-grey">
          {step.title}
        </h3>
      </div>
      <p className="text-neutral-grey/80 leading-relaxed">
        {step.description}
      </p>
    </Link>
  );
}

