import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, inView } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface RevealProps extends PropsWithChildren {
  className?: string;
  /** Optional delay in seconds for hand-tuned sequencing. */
  delay?: number;
  as?: 'div' | 'li' | 'section';
}

/** On-scroll fade-and-rise. Respects reduced motion via the global CSS reset. */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
