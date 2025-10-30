import { Container } from '@/components/layout/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TemplateDetail } from '@/components/template/TemplateDetail';
import { loadTemplate } from '@/lib/memory';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface TemplatePageProps {
  params: {
    slug: string;
  };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const template = await loadTemplate(params.slug);

  if (!template) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-xl">
        <Container>
          <div className="space-y-lg">
            <div>
              <Link
                href="/library"
                className="text-technical-violet hover:text-acid-accent transition-bauhaus duration-300"
              >
                ← Back to Library
              </Link>
            </div>

            <TemplateDetail template={template} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

