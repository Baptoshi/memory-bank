import { Container } from '@/components/layout/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GuideContent } from '@/components/guide/GuideContent';
import { GuideNav } from '@/components/guide/GuideNav';
import { getStepBySlug, getAdjacentSteps } from '@/lib/guide-data';
import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';

interface GuideStepPageProps {
  params: {
    step: string;
  };
}

async function getGuideContent(filePath: string): Promise<string> {
  try {
    const fullPath = path.join(process.cwd(), 'guide', path.basename(filePath));
    const content = await fs.readFile(fullPath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Failed to load guide step: ${filePath}`, error);
    return '';
  }
}

export default async function GuideStepPage({ params }: GuideStepPageProps) {
  const step = getStepBySlug(params.step);

  if (!step) {
    notFound();
  }

  const content = await getGuideContent(step.path);
  const { prev, next } = getAdjacentSteps(params.step);

  return (
    <>
      <Header />
      <main className="min-h-screen py-xl">
        <Container>
          <div className="max-w-3xl mx-auto space-y-lg">
            <div className="space-y-sm">
              <div className="inline-flex items-center gap-sm mb-md">
                <div className="w-10 h-10 rounded-full bg-technical-violet/20 flex items-center justify-center">
                  <span className="text-technical-violet font-display font-semibold">
                    {step.step}
                  </span>
                </div>
                <span className="text-sm text-neutral-grey/60 uppercase tracking-wide">
                  Step {step.step} of 08
                </span>
              </div>
              <h1 className="text-4xl font-display font-semibold text-neutral-grey">
                {step.title}
              </h1>
              <p className="text-lg text-neutral-grey/80">
                {step.description}
              </p>
            </div>

            <div className="border-t border-neutral-grey/20 pt-lg">
              <GuideContent content={content} />
            </div>

            <GuideNav prev={prev} next={next} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

