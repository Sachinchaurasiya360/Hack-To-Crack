import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

/** Centered page shell with the standard horizontal gutters. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-shell px-6 sm:px-8 lg:px-12', className)}>
      {children}
    </div>
  );
}
