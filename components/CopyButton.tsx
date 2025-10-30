'use client';

import * as React from 'react';
import { Button } from '@/components/ui/Button';

interface CopyButtonProps {
  content: string;
  variant?: 'default' | 'secondary' | 'ghost';
}

export function CopyButton({ content, variant = 'default' }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant={variant}
      className={copied ? 'bg-acid-accent text-architect-green' : ''}
    >
      {copied ? 'Copied' : 'Copy to Clipboard'}
    </Button>
  );
}

