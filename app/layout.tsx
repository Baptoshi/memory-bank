import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-clash-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Memory Bank — Structured Reasoning Templates',
  description: 'A minimal, systemic platform for exposing .md memory templates to the developer community.',
  keywords: ['memory bank', 'cursor', 'ai reasoning', 'templates', 'architecture'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}

