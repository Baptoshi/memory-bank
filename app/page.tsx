import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center p-lg">
        <div className="max-w-4xl space-y-xl">
          <div className="space-y-lg">
            <h1 className="text-6xl font-display font-semibold text-neutral-grey">
              Memory Bank
            </h1>
            <p className="text-xl text-neutral-grey/80 max-w-2xl">
              A minimal, systemic platform for exposing <code>.md</code> memory templates
              to the developer community.
            </p>
          </div>

          <div className="border-l-4 border-technical-violet pl-lg space-y-md max-w-2xl">
            <h2 className="text-2xl font-display font-semibold text-neutral-grey">
              What is a Procedural Memory Bank?
            </h2>
            <p className="text-neutral-grey/80 leading-relaxed">
              A <strong>procedural memory bank</strong> is not documentation—it is a cognitive architecture. 
              Each <code>.md</code> file represents a <strong>reasoning boundary</strong>, not a narrative. 
              The system defines how AI assistants internalize context, structure thought, and execute tasks 
              with precision and traceability.
            </p>
            <p className="text-neutral-grey/80 leading-relaxed">
              Instead of reading instructions, the AI <em>activates</em> memory modules that shape its behavior, 
              architecture decisions, and development workflow. This creates consistency, reduces token waste, 
              and enforces systemic reasoning across sessions.
            </p>
            <div className="pt-sm">
              <Link
                href="/guide"
                className="inline-flex items-center gap-sm text-technical-violet hover:text-acid-accent transition-bauhaus font-semibold"
              >
                Read the Guide First →
              </Link>
            </div>
          </div>

          <div className="pt-md">
            <Link
              href="/library"
              className="inline-block px-lg py-md bg-technical-violet text-architect-green font-semibold rounded transition-bauhaus hover:bg-acid-accent"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

