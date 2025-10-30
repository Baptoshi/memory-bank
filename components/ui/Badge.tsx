import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center px-md py-xs text-xs uppercase tracking-wider rounded border font-medium',
          {
            'bg-technical-violet text-architect-green border-technical-violet':
              variant === 'default',
            'bg-neutral-grey text-architect-green border-neutral-grey':
              variant === 'secondary',
            'bg-transparent text-technical-violet border-technical-violet':
              variant === 'outline',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };

