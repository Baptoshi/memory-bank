import Link from 'next/link';
import { Container } from './Container';

export function Header() {
  return (
    <header className="border-b border-neutral-grey/20 py-md">
      <Container>
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-display font-semibold text-neutral-grey hover:text-technical-violet transition-bauhaus"
          >
            Memory Bank
          </Link>
          <div className="flex items-center space-x-lg">
            <Link
              href="/libraries"
              className="text-neutral-grey hover:text-technical-violet transition-bauhaus"
            >
              Memory Banks
            </Link>
            <Link
              href="/library"
              className="text-neutral-grey hover:text-technical-violet transition-bauhaus"
            >
              General Library
            </Link>
            <Link
              href="/guide"
              className="text-neutral-grey hover:text-technical-violet transition-bauhaus"
            >
              Guide
            </Link>
            <Link
              href="/about"
              className="text-neutral-grey hover:text-technical-violet transition-bauhaus"
            >
              About
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

