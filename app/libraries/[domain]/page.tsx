'use client';

import * as React from 'react';
import { Container } from '@/components/layout/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TemplateGrid } from '@/components/template/TemplateGrid';
import { FilterBar } from '@/components/template/FilterBar';
import { TemplateSummary } from '@/lib/types';
import { TemplateType } from '@/lib/constants';
import Link from 'next/link';

interface DomainPageProps {
  params: {
    domain: string;
  };
}

export default function DomainPage({ params }: DomainPageProps) {
  const [templates, setTemplates] = React.useState<TemplateSummary[]>([]);
  const [filteredTemplates, setFilteredTemplates] = React.useState<TemplateSummary[]>([]);
  const [activeFilter, setActiveFilter] = React.useState<TemplateType | 'all'>('all');
  const [loading, setLoading] = React.useState(true);
  const [domainName, setDomainName] = React.useState<string>('');

  React.useEffect(() => {
    async function fetchTemplates() {
      try {
        const response = await fetch(`/api/libraries/${params.domain}`);
        const result = await response.json();
        if (result.status === 'ok') {
          setTemplates(result.data);
          setFilteredTemplates(result.data);
          setDomainName(result.meta.domain);
        }
      } catch (error) {
        console.error('Failed to fetch domain templates:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTemplates();
  }, [params.domain]);

  React.useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTemplates(templates);
    } else {
      setFilteredTemplates(templates.filter((t) => t.type === activeFilter));
    }
  }, [activeFilter, templates]);

  return (
    <>
      <Header />
      <main className="min-h-screen py-xl">
        <Container>
          <div className="space-y-lg">
            <div>
              <Link
                href="/libraries"
                className="text-technical-violet hover:text-acid-accent transition-bauhaus duration-300 mb-md inline-block"
              >
                ← Back to Memory Banks
              </Link>
              <h1 className="text-5xl font-display font-semibold text-neutral-grey">
                {domainName || params.domain}
              </h1>
              <p className="text-lg text-neutral-grey/80 mt-md max-w-2xl">
                Domain-specific templates for {params.domain} architecture and implementation.
              </p>
            </div>

            <FilterBar
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            {loading ? (
              <div className="text-center py-xl">
                <p className="text-neutral-grey/60">Loading templates...</p>
              </div>
            ) : (
              <TemplateGrid 
                templates={filteredTemplates} 
                basePath={`/libraries/${params.domain}`}
              />
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

