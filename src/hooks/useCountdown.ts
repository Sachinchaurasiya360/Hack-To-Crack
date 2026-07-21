import { useEffect, useState } from 'react';

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  /** True once the target moment has passed. */
  complete: boolean;
}

function diff(target: number): Countdown {
  const now = Date.now();
  const delta = target - now;

  if (delta <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, complete: true };
  }

  const days = Math.floor(delta / 86_400_000);
  const hours = Math.floor((delta % 86_400_000) / 3_600_000);
  const minutes = Math.floor((delta % 3_600_000) / 60_000);
  const seconds = Math.floor((delta % 60_000) / 1000);

  return { days, hours, minutes, seconds, complete: false };
}

/**
 * Ticking countdown to an ISO timestamp. Degrades gracefully:
 * once the target passes, `complete` is true and values hold at zero.
 */
export function useCountdown(targetISO: string): Countdown {
  const target = new Date(targetISO).getTime();
  const [state, setState] = useState<Countdown>(() => diff(target));

  useEffect(() => {
    if (state.complete) return;
    const id = window.setInterval(() => setState(diff(target)), 1000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return state;
}
