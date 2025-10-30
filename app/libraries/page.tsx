'use client';

import * as React from 'react';
import { Container } from '@/components/layout/Container';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DomainCard } from '@/components/domain/DomainCard';

interface MemoryBank {
  slug: string;
  name: string;
  description: string;
  accentColor: string;
  focus: string[];
  templateCount: number;
}

export default function LibrariesPage() {
  const [banks, setBanks] = React.useState<MemoryBank[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchBanks() {
      try {
        const response = await fetch('/api/libraries');
        const result = await response.json();
        if (result.status === 'ok') {
          setBanks(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch memory banks:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchBanks();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen py-xl">
        <Container>
          <div className="space-y-lg">
            <div>
              <h1 className="text-5xl font-display font-semibold text-neutral-grey">
                Memory Banks
              </h1>
              <p className="text-lg text-neutral-grey/80 mt-md max-w-2xl">
                Domain-specific cognitive architectures. Each bank encapsulates everything needed for a specific use case: architecture, design, stack, and reasoning logic.
              </p>
            </div>

            {loading ? (
              <div className="text-center py-xl">
                <p className="text-neutral-grey/60">Loading memory banks...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg mt-xl">
                {banks.map((bank) => (
                  <DomainCard
                    key={bank.slug}
                    slug={bank.slug}
                    name={bank.name}
                    description={bank.description}
                    accentColor={bank.accentColor}
                    templateCount={bank.templateCount}
                    focus={bank.focus}
                  />
                ))}
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

