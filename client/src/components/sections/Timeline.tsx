import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TIMELINE } from '@/constants/content';
import { inView, stagger, staggerItem } from '@/lib/motion';

export function Timeline() {
  return (
    <section id="timeline" className="border-t border-line bg-surface py-section">
      <Container>
        <SectionHeader
          eyebrow="Timeline"
          title="From first commit to closing ceremony."
          lead="Exact dates land with the official announcement. Here’s the shape of the event, in order."
        />

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-14 max-w-3xl"
        >
          {TIMELINE.map((step, i) => (
            <motion.li key={step.index} variants={staggerItem} className="group relative flex gap-6 sm:gap-8">
              {/* Rail + node */}
              <div className="relative flex flex-col items-center">
                <span className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white font-mono text-xs font-medium text-graphite transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                  {step.index}
                </span>
                {i !== TIMELINE.length - 1 && (
                  <span aria-hidden className="w-px flex-1 bg-line" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-12">
                <span className="font-mono text-[0.68rem] uppercase tracking-widest text-slate">
                  {step.date}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate">{step.body}</p>
                {step.meta && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {step.meta.map((m, mi) => (
                      <span
                        key={m}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-graphite"
                      >
                        {mi === 0 && !m.includes(':') ? (
                          <MapPin className="h-3.5 w-3.5 text-accent" />
                        ) : (
                          <Clock className="h-3.5 w-3.5 text-accent" />
                        )}
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
