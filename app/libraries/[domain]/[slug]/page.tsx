import { Container } from '@/components/layout/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TemplateDetail } from '@/components/template/TemplateDetail';
import { loadDomainTemplate } from '@/lib/domains-memory';
import { MemoryBankSlug } from '@/lib/domains';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface DomainTemplatePageProps {
  params: {
    domain: string;
    slug: string;
  };
}

export default async function DomainTemplatePage({ params }: DomainTemplatePageProps) {
  const template = await loadDomainTemplate(
    params.domain as MemoryBankSlug,
    params.slug
  );

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
                href={`/libraries/${params.domain}`}
                className="text-technical-violet hover:text-acid-accent transition-bauhaus duration-300"
              >
                ← Back to {params.domain}
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

