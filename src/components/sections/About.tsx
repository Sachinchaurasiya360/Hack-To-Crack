import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Counter } from '@/components/ui/Counter';
import { STATS } from '@/constants/content';
import { inView, stagger, staggerItem } from '@/lib/motion';

export function About() {
  return (
    <section id="about" className="py-section">
      <Container>
        <SectionHeader
          eyebrow="About the event"
          title="A build sprint, not a spectator sport."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Prose */}
          <div className="lg:col-span-7">
            <div className="measure space-y-6 text-lg leading-relaxed text-graphite">
              <p>
                Hack to Crack returns for its third edition — a{' '}
                <span className="text-ink">36-hour hybrid hackathon</span> where the brightest
                student builders come together to solve problems that actually matter. Join
                on-campus in Mumbai or fully online; both formats compete on equal footing.
              </p>
              <p>
                Last edition drew <span className="text-ink">400+ participants</span> from 25+
                colleges and shipped 100+ working projects across healthcare, education, and
                sustainability. This year goes further — more tracks, more mentors, and a bigger
                prize pool.
              </p>
            </div>
          </div>

          {/* Stats */}
          <motion.dl
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={inView}
            className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line lg:col-span-5"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className={[
                  'flex flex-col gap-2 p-7 sm:p-8',
                  i % 2 === 1 && 'border-l border-line',
                  i >= 2 && 'border-t border-line',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <dd className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                  <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
                <dt className="font-mono text-xs uppercase tracking-widest text-slate">
                  {stat.label}
                </dt>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </Container>
    </section>
  );
}
