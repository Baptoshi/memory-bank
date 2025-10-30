import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'ghost';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center px-lg py-md font-semibold rounded transition-bauhaus duration-300',
          {
            'bg-technical-violet text-architect-green hover:bg-acid-accent':
              variant === 'default',
            'bg-neutral-grey text-architect-green hover:bg-technical-violet':
              variant === 'secondary',
            'bg-transparent hover:bg-neutral-grey/10': variant === 'ghost',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };

