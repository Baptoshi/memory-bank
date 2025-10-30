import { Container } from '@/components/layout/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-xl">
        <Container>
          <div className="max-w-3xl space-y-lg">
            <h1 className="text-5xl font-display font-semibold text-neutral-grey">
              About Memory Bank
            </h1>

            <div className="space-y-md text-neutral-grey/80">
              <p className="text-lg">
                Memory Bank is not documentation. It is an <strong>architecture of reasoning</strong>,
                designed to expose, copy, and export <code>.md</code> templates directly from a clean UI.
              </p>

              <p>
                Every file in <code>.cursor/.memorybank</code> is a <strong>cognitive unit</strong> — a map of logic, not a narrative.
              </p>

              <blockquote className="border-l-4 border-technical-violet pl-lg italic text-neutral-grey">
                &ldquo;The system is not written to be read — it is written to be understood.&rdquo;
              </blockquote>

              <h2 className="text-3xl font-display font-semibold text-neutral-grey mt-xl">
                Design Philosophy
              </h2>

              <p>
                The project follows a <strong>Bauhaus–systemic aesthetic</strong>:
              </p>

              <ul className="list-disc list-inside space-y-sm">
                <li>Minimal, geometric, and balanced.</li>
                <li>Silence, order, and hierarchy replace ornament.</li>
                <li>Text and interface both express thought.</li>
              </ul>

              <p>
                <strong>Tone:</strong> calm, precise, impersonal.<br />
                <strong>Goal:</strong> to make structure perceptible.
              </p>

              <h2 className="text-3xl font-display font-semibold text-neutral-grey mt-xl">
                Stack
              </h2>

              <ul className="list-disc list-inside space-y-sm">
                <li><strong>Frontend:</strong> Next.js 14, React 19, TypeScript (strict)</li>
                <li><strong>Styling:</strong> TailwindCSS with Bauhaus design tokens</li>
                <li><strong>Backend:</strong> Node.js, Express, Prisma ORM</li>
                <li><strong>Database:</strong> PostgreSQL</li>
                <li><strong>Hosting:</strong> Vercel (frontend), Railway (backend)</li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

