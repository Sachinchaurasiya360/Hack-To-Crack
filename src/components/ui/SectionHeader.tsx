import { motion } from 'framer-motion';
import { fadeUp, inView, stagger, staggerItem } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  className?: string;
}

/** Editorial section header: mono eyebrow, large Inter title, optional lead. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <motion.div variants={staggerItem} className="flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-accent" />
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>
      <motion.h2
        variants={staggerItem}
        className="text-display-md font-semibold text-ink max-w-3xl text-balance"
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          variants={fadeUp}
          className={cn('text-lg leading-relaxed text-graphite', align === 'center' && 'mx-auto')}
        >
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
}
