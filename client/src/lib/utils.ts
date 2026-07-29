/** Minimal className joiner — keeps JSX readable without a runtime dependency. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
