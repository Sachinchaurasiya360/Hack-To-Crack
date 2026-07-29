import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { PAST_SPONSORS } from '@/constants/content';
import { SITE } from '@/constants/site';
import { inView, stagger, staggerItem } from '@/lib/motion';

export function Sponsors() {
  return (
    <section id="sponsors" className="border-t border-line bg-surface py-section">
      <Container>
        <SectionHeader
          eyebrow="Partners"
          title="In good company."
          lead="Organizations that powered previous editions of Hack to Crack. Partner slots for 3.0 are open now."
        />

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4"
        >
          {PAST_SPONSORS.map((s) => (
            <motion.li
              key={s.name}
              variants={staggerItem}
              className="flex flex-col items-center justify-center gap-2 bg-white px-4 py-10 text-center transition-colors duration-300 hover:bg-surface"
            >
              <span className="text-base font-semibold tracking-tight text-ink">{s.name}</span>
              <span className="font-mono text-[0.62rem] uppercase tracking-widest text-slate">
                {s.tier}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Sponsor CTA */}
        <div className="mt-4 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-white p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h3 className="text-xl font-semibold text-ink">Sponsor Hack to Crack 3.0</h3>
            <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-slate">
              Put your brand in front of 400+ builders and the next generation of engineering
              talent. Let’s design a partnership that fits.
            </p>
          </div>
          <Button href={SITE.links.sponsorMail} variant="secondary" size="lg" className="shrink-0">
            Become a sponsor
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
