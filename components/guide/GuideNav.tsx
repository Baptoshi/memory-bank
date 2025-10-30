import Link from 'next/link';
import { GuideStep } from '@/lib/guide-data';

interface GuideNavProps {
  prev?: GuideStep;
  next?: GuideStep;
}

export function GuideNav({ prev, next }: GuideNavProps) {
  return (
    <div className="flex items-center justify-between pt-xl mt-xl border-t border-neutral-grey/20">
      <div>
        {prev ? (
          <Link
            href={`/guide/${prev.slug}`}
            className="inline-flex items-center gap-sm text-neutral-grey hover:text-technical-violet transition-bauhaus"
          >
            <span className="text-2xl">←</span>
            <div>
              <div className="text-sm text-neutral-grey/60">Previous</div>
              <div className="font-semibold">{prev.title}</div>
            </div>
          </Link>
        ) : (
          <Link
            href="/guide"
            className="inline-flex items-center gap-sm text-neutral-grey hover:text-technical-violet transition-bauhaus"
          >
            <span className="text-2xl">←</span>
            <div>
              <div className="text-sm text-neutral-grey/60">Back to</div>
              <div className="font-semibold">Overview</div>
            </div>
          </Link>
        )}
      </div>

      <div>
        {next ? (
          <Link
            href={`/guide/${next.slug}`}
            className="inline-flex items-center gap-sm text-neutral-grey hover:text-technical-violet transition-bauhaus"
          >
            <div className="text-right">
              <div className="text-sm text-neutral-grey/60">Next</div>
              <div className="font-semibold">{next.title}</div>
            </div>
            <span className="text-2xl">→</span>
          </Link>
        ) : (
          <Link
            href="/guide"
            className="inline-flex items-center gap-sm text-neutral-grey hover:text-technical-violet transition-bauhaus"
          >
            <div className="text-right">
              <div className="text-sm text-neutral-grey/60">Back to</div>
              <div className="font-semibold">Overview</div>
            </div>
            <span className="text-2xl">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

