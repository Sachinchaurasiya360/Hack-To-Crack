import { useCountdown } from '@/hooks/useCountdown';
import { cn } from '@/lib/utils';

interface CountdownProps {
  targetISO: string;
  className?: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

/** Precise datasheet-style countdown. Tabular mono digits, hairline cells. */
export function Countdown({ targetISO, className }: CountdownProps) {
  const { days, hours, minutes, seconds, complete } = useCountdown(targetISO);

  if (complete) {
    return (
      <p className={cn('font-mono text-sm text-graphite', className)}>
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
        The build is on.
      </p>
    );
  }

  const cells = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  return (
    <div
      className={cn('grid max-w-md grid-cols-4 overflow-hidden rounded-xl border border-line', className)}
      role="timer"
      aria-label="Time remaining until kickoff"
    >
      {cells.map((cell, i) => (
        <div
          key={cell.label}
          className={cn(
            'flex flex-col items-center gap-1 bg-surface px-2 py-4 sm:px-4',
            i !== 0 && 'border-l border-line',
          )}
        >
          <span className="tnum font-mono text-2xl font-semibold text-ink sm:text-3xl">
            {pad(cell.value)}
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-slate">
            {cell.label}
          </span>
        </div>
      ))}
    </div>
  );
}
