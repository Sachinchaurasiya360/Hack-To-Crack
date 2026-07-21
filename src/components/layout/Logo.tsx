import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  /** Show the "3.0" edition chip alongside the wordmark. */
  showEdition?: boolean;
}

/**
 * Crafted wordmark: a minimal monogram mark (the "crack" — a hairline split)
 * paired with an Inter wordmark and a mono edition chip.
 */
export function Logo({ className, showEdition = true }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <rect x="0.5" y="0.5" width="25" height="25" rx="6" className="fill-ink" />
        {/* The "crack": a diagonal split with an accent seam. */}
        <path d="M15 5 L9 21" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M18 9 L12 21" stroke="#1B5E3F" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
      <span className="flex items-baseline gap-1.5">
        <span className="text-[0.95rem] font-semibold tracking-tight text-ink">Hack to Crack</span>
        {showEdition && (
          <span className="font-mono text-[0.7rem] font-medium text-accent tnum">3.0</span>
        )}
      </span>
    </span>
  );
}
