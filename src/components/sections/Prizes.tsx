import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PRIZES, SPECIAL_AWARDS } from '@/constants/content';
import { inView, stagger, staggerItem } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function Prizes() {
  return (
    <section id="prizes" className="border-t border-line bg-surface py-section">
      <Container>
        <SectionHeader
          eyebrow="Prizes & rewards"
          title="A ₹3 Lakh pool — and a passport stamp."
          lead="Cash across three tiers, special-category awards, platform credits, and a funded international internship for the grand-prize team."
        />

        {/* Main tiers */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {PRIZES.map((prize) => {
            const featured = prize.featured;
            return (
              <motion.article
                key={prize.rank}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className={cn(
                  'flex flex-col rounded-2xl border p-8 shadow-card',
                  featured
                    ? 'border-ink bg-ink text-white md:-mt-4 md:pb-12'
                    : 'border-line bg-white',
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'font-mono text-xs uppercase tracking-widest',
                      featured ? 'text-white/60' : 'text-slate',
                    )}
                  >
                    {prize.title}
                  </span>
                  {featured && (
                    <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-white">
                      Grand prize
                    </span>
                  )}
                </div>

                <div
                  className={cn(
                    'mt-8 text-5xl font-semibold tracking-tight',
                    featured ? 'text-white' : 'text-ink',
                  )}
                >
                  {prize.amount}
                </div>

                <ul
                  className={cn(
                    'mt-8 flex flex-col gap-3.5 border-t pt-8 text-sm',
                    featured ? 'border-white/15' : 'border-line',
                  )}
                >
                  {prize.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3">
                      <Check
                        className={cn(
                          'mt-0.5 h-4 w-4 shrink-0',
                          featured ? 'text-accent' : 'text-accent',
                        )}
                        strokeWidth={2.25}
                      />
                      <span className={featured ? 'text-white/85' : 'text-graphite'}>{perk}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Special awards */}
        <div className="mt-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
          >
            {SPECIAL_AWARDS.map((award) => (
              <motion.div
                key={award.title}
                variants={staggerItem}
                className="flex flex-col gap-1 bg-white p-7"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-slate">
                  Special award
                </span>
                <span className="mt-3 text-2xl font-semibold text-ink">{award.amount}</span>
                <span className="mt-1 text-sm font-medium text-ink">{award.title}</span>
                {award.note && <span className="mt-1 text-xs text-slate">{award.note}</span>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
