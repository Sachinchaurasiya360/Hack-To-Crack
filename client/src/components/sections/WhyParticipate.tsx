import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FEATURES } from '@/constants/content';
import { inView, stagger, staggerItem } from '@/lib/motion';

export function WhyParticipate() {
  return (
    <section id="why" className="border-t border-line bg-surface py-section">
      <Container>
        <SectionHeader
          eyebrow="Why participate"
          title="Reasons that outlast the weekend."
          lead="Beyond the prize money, Hack to Crack is built to move your work — and your career — forward."
        />

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <motion.li
              key={title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="group flex flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-tint text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate">{body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
