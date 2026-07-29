import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TRACKS } from '@/constants/content';
import { inView, stagger, staggerItem } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function Tracks() {
  return (
    <section id="tracks" className="py-section">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Tracks"
            title="Six domains. Pick your problem."
            lead="Choose a track that fits your team — or take the open lane and bring your own real-world statement."
            className="md:max-w-2xl"
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {TRACKS.map((track, i) => (
            <motion.article
              key={track.code}
              variants={staggerItem}
              className={cn(
                'group relative flex flex-col bg-white p-8 transition-colors duration-300 hover:bg-surface',
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
                  {track.code}
                </span>
                <span className="font-mono text-xs text-slate/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-ink">{track.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate">{track.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {track.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-line px-3 py-1 text-xs text-graphite"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-8 font-mono text-xs text-slate">
          <span className="text-accent">▸</span> Problem statements — releasing closer to the event.
        </p>
      </Container>
    </section>
  );
}
