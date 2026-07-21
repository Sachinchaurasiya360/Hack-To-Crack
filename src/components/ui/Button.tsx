import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  magnetic?: boolean;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium ' +
  'transition-colors duration-300 ease-premium focus-visible:outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white';

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-[0.95rem]',
};

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-accent',
  secondary: 'border border-line bg-white text-ink hover:border-ink',
  ghost: 'text-ink hover:text-accent',
};

/**
 * Primary CTA control. Renders an anchor when `href` is set, a button otherwise.
 * `magnetic` adds a subtle cursor-follow — disabled under reduced-motion.
 */
export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  magnetic = false,
  external = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();
  const active = magnetic && !reduce;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 20, mass: 0.4 });

  function handleMove(e: MouseEvent) {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.25);
    y.set(relY * 0.35);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const classes = cn(base, sizes[size], variants[variant], className);
  const content = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>;

  const shared = {
    ref: ref as never,
    className: classes,
    style: active ? { x: sx, y: sy } : undefined,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    'aria-label': ariaLabel,
  };

  if (href) {
    return (
      <motion.a
        {...shared}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button {...shared} type="button" onClick={onClick}>
      {content}
    </motion.button>
  );
}
