import type { Variants } from 'framer-motion';

/** Shared premium easing — a calm, decelerating curve. No bounce. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Fade + subtle rise, used for most on-scroll reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Container that staggers its children into view. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Child item for staggered groups. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Standard viewport config: reveal once, a little before fully in view. */
export const inView = { once: true, amount: 0.2, margin: '0px 0px -10% 0px' } as const;
