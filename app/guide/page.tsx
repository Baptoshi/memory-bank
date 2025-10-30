import { Container } from '@/components/layout/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GuideGrid } from '@/components/guide/GuideGrid';
import { getGuideSteps } from '@/lib/guide-data';

export default function GuidePage() {
  const steps = getGuideSteps();

  return (
    <>
      <Header />
      <main className="min-h-screen py-xl">
        <Container>
          <div className="max-w-4xl mx-auto space-y-xl">
            <div className="space-y-md">
              <h1 className="text-5xl font-display font-semibold text-neutral-grey">
                Memory Bank Guide
              </h1>
              <p className="text-xl text-neutral-grey/80">
                Step-by-step instructions to understand, activate, and extend the Memory Bank cognitive architecture.
              </p>
            </div>

            <GuideGrid steps={steps} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

