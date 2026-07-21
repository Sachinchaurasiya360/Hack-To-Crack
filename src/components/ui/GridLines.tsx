import { useId } from 'react';
import { cn } from '@/lib/utils';

interface GridLinesProps {
  className?: string;
  /** Line color. Defaults to ink for light backgrounds. */
  stroke?: string;
  strokeOpacity?: number;
  /** Cell size in px. */
  size?: number;
}

/**
 * Faint technical-drawing grid rendered as an SVG line pattern (not a gradient).
 * Purely decorative and aria-hidden.
 */
export function GridLines({
  className,
  stroke = '#111111',
  strokeOpacity = 0.04,
  size = 88,
}: GridLinesProps) {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <path
            d={`M${size} 0H0V${size}`}
            fill="none"
            stroke={stroke}
            strokeOpacity={strokeOpacity}
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
