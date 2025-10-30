'use client';

import ReactMarkdown from 'react-markdown';

interface GuideContentProps {
  content: string;
}

export function GuideContent({ content }: GuideContentProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-display font-semibold text-neutral-grey mb-md">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-display font-semibold text-neutral-grey mt-xl mb-md">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-display font-semibold text-neutral-grey mt-lg mb-sm">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-neutral-grey/80 leading-relaxed mb-md">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-sm text-neutral-grey/80 mb-md">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-sm text-neutral-grey/80 mb-md">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
          ),
          code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="px-sm py-xs bg-neutral-grey/10 text-technical-violet rounded text-sm font-mono">
                  {children}
                </code>
              );
            }
            return (
              <code className="block p-md bg-neutral-grey/10 text-neutral-grey rounded text-sm font-mono overflow-x-auto mb-md">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="mb-md overflow-x-auto">{children}</pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-technical-violet pl-lg italic text-neutral-grey/70 mb-md">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-technical-violet hover:text-acid-accent transition-bauhaus underline"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

