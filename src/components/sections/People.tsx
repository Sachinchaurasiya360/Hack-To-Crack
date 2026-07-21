import { motion } from 'framer-motion';
import { UserRound } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { inView, stagger, staggerItem } from '@/lib/motion';

interface Panel {
  label: string;
  role: string;
  count: number;
}

const PANELS: Panel[] = [
  { label: 'Jury', role: 'Evaluating final pitches', count: 4 },
  { label: 'Mentors', role: 'On-call across 36 hours', count: 4 },
];

function PlaceholderCard({ role }: { role: string }) {
  return (
    <motion.div
      variants={staggerItem}
      className="flex items-center gap-4 rounded-2xl border border-dashed border-line bg-white p-5"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-dashed border-line text-slate">
        <UserRound className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-ink">To be announced</span>
        <span className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-widest text-slate">
          {role}
        </span>
      </div>
    </motion.div>
  );
}

export function People() {
  return (
    <section id="people" className="py-section">
      <Container>
        <SectionHeader
          eyebrow="Jury & mentors"
          title="Judged and guided by people who ship."
          lead="The full line-up of judges and mentors is revealed closer to the event. Expect senior engineers, founders, and domain experts."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {PANELS.map((panel) => (
            <div key={panel.label}>
              <div className="flex items-baseline justify-between border-b border-line pb-4">
                <h3 className="text-lg font-semibold text-ink">{panel.label}</h3>
                <span className="font-mono text-xs uppercase tracking-widest text-slate">
                  Announcing soon
                </span>
              </div>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={inView}
                className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {Array.from({ length: panel.count }).map((_, i) => (
                  <PlaceholderCard key={i} role={panel.role} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
