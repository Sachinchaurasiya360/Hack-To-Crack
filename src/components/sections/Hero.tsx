import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GridLines } from '@/components/ui/GridLines';
import { EVENT_META } from '@/constants/content';
import { SITE } from '@/constants/site';
import { useCountdown } from '@/hooks/useCountdown';
import { EASE } from '@/lib/motion';

const rise = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: EASE, delay: 0.08 + i * 0.08 },
  }),
};

const pad = (n: number) => String(n).padStart(2, '0');

/** Big monospace readout — the characteristic "race against 36 hours" element. */
function HeroClock() {
  const { days, hours, minutes, seconds, complete } = useCountdown(SITE.startsAtISO);

  if (complete) {
    return (
      <p className="flex items-center gap-2.5 font-mono text-lg text-ink">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
        The build is on.
      </p>
    );
  }

  const groups = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hrs' },
    { value: minutes, label: 'Min' },
    { value: seconds, label: 'Sec' },
  ];

  return (
    <div className="flex items-start gap-2.5 font-mono tnum sm:gap-4">
      {groups.map((g, i) => (
        <div key={g.label} className="flex items-start gap-2.5 sm:gap-4">
          {i !== 0 && (
            <span className="select-none pt-0.5 text-3xl font-light text-line sm:text-4xl">:</span>
          )}
          <div className="flex flex-col items-center">
            <span className="text-4xl font-semibold leading-none text-ink sm:text-5xl lg:text-[3.5rem]">
              {pad(g.value)}
            </span>
            <span className="mt-2 text-[0.6rem] uppercase tracking-[0.2em] text-slate">
              {g.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden pt-24 sm:pt-28"
    >
      <GridLines className="opacity-80 [mask-image:radial-gradient(120%_90%_at_20%_0%,black,transparent_75%)]" />

      {/* Headline block */}
      <Container className="relative flex flex-1 flex-col justify-center py-14">
        {/* Kicker */}
        <motion.div
          custom={0}
          variants={rise}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-x-3 gap-y-2"
        >
          <span className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-label text-graphite">
              Pre-registration open
            </span>
          </span>
          <span className="eyebrow text-slate">
            {SITE.name} {SITE.edition} · {SITE.organizer}
          </span>
        </motion.div>

        {/* Monumental headline */}
        <h1 className="mt-8 max-w-[15ch] text-[clamp(2.9rem,10vw,8.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-ink">
          <motion.span custom={1} variants={rise} initial="hidden" animate="visible" className="block">
            Build something
          </motion.span>
          <motion.span custom={2} variants={rise} initial="hidden" animate="visible" className="block">
            real, in 36 hours.
          </motion.span>
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            custom={3}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-lg leading-relaxed text-graphite"
          >
            Join 400+ builders across six tracks for a ₹3 Lakh prize pool — and a shot at a funded
            international internship. Code. Create. Conquer.
          </motion.p>

          <motion.div
            custom={4}
            variants={rise}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-3"
          >
            <Button href={SITE.links.register} external size="lg" magnetic>
              Pre-register now
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Button>
            <Button href="#tracks" variant="secondary" size="lg">
              Explore tracks
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Full-width control bar: live clock + datasheet metadata */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
        className="relative border-t border-line bg-surface"
      >
        <Container>
          <div className="grid grid-cols-1 items-center gap-y-10 py-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-label text-slate">
                Kickoff in
              </p>
              <HeroClock />
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:col-span-6 lg:border-l lg:border-line lg:pl-8">
              {EVENT_META.map((m) => (
                <div key={m.label} className="flex flex-col gap-1.5">
                  <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-slate">
                    {m.label}
                  </dt>
                  <dd className="text-base font-medium text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
