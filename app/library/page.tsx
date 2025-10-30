'use client';

import * as React from 'react';
import { Container } from '@/components/layout/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TemplateGrid } from '@/components/template/TemplateGrid';
import { TemplateSummary } from '@/lib/types';

export default function LibraryPage() {
  const [templates, setTemplates] = React.useState<TemplateSummary[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchTemplates() {
      try {
        const response = await fetch('/api/templates');
        const result = await response.json();
        if (result.status === 'ok') {
          setTemplates(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch templates:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTemplates();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen py-xl">
        <Container>
          <div className="space-y-lg">
            <div>
              <h1 className="text-5xl font-display font-semibold text-neutral-grey">
                Template Library
              </h1>
              <p className="text-lg text-neutral-grey/80 mt-md max-w-2xl">
                Structured memory templates for systemic reasoning. Each template represents a cognitive boundary.
              </p>
            </div>

            {loading ? (
              <div className="text-center py-xl">
                <p className="text-neutral-grey/60">Loading templates...</p>
              </div>
            ) : (
              <TemplateGrid templates={templates} />
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

