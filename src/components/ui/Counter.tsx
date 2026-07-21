import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';

interface CounterProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Number that counts up once when scrolled into view. Uses tabular figures. */
export function Counter({ to, prefix = '', suffix = '', duration = 1.4, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduce) {
      setValue(to);
      return;
    }

    let raf = 0;
    let start: number | null = null;
    const ms = duration * 1000;

    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / ms, 1);
      // easeOutExpo — fast then settling, no overshoot.
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, reduce, to, duration]);

  return (
    <span ref={ref} className={cn('tnum', className)}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
