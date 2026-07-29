import { ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { GridLines } from '@/components/ui/GridLines';
import { EVENT_META } from '@/constants/content';
import { SITE } from '@/constants/site';

export function CTA() {
  return (
    <section id="register" className="py-section">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <GridLines stroke="#ffffff" strokeOpacity={0.05} />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <Reveal>
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-accent" />
                <span className="eyebrow text-white/60">Registration</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-6 text-display-lg font-bold text-white text-balance">
                Bring a team. Build something real.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                Pre-registration is open. Lock in your spot for Hack to Crack 3.0 and be first to
                know when the tracks and dates go live.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Button
                  href={SITE.links.register}
                  external
                  size="lg"
                  magnetic
                  variant="secondary"
                  className="border-white/15 bg-white text-ink hover:border-white hover:bg-white"
                >
                  Pre-register now
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </Button>
                <Button
                  href={SITE.links.whatsapp}
                  external
                  size="lg"
                  variant="ghost"
                  className="text-white hover:text-white/70"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Join WhatsApp group
                </Button>
              </div>
            </Reveal>

            {/* Restated metadata */}
            <Reveal delay={0.2}>
              <dl className="mt-14 grid w-full max-w-2xl grid-cols-2 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4">
                {EVENT_META.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1.5">
                    <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-white/50">
                      {m.label}
                    </dt>
                    <dd className="text-[0.95rem] font-medium text-white">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
