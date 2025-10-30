import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-neutral-grey/20 py-lg mt-xl">
      <Container>
        <div className="flex items-center justify-between text-sm text-neutral-grey/60">
          <p>Memory Bank — Structured Reasoning Templates</p>
          <a
            href="https://github.com/reputable-tech/memory-bank"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-technical-violet transition-bauhaus"
          >
            GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
}

