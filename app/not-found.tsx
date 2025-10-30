import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="text-center space-y-lg">
          <h1 className="text-6xl font-display font-semibold text-neutral-grey">
            404
          </h1>
          <p className="text-xl text-neutral-grey/80">
            Template not found.
          </p>
          <Link href="/library">
            <Button>Return to Library</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}

