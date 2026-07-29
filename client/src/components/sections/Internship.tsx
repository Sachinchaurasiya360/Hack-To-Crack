import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/constants/site';

const PROOF = [
  { label: 'Grant', value: '₹1.5 Lakh' },
  { label: 'Host', value: 'Coventry University, UK' },
  { label: 'Recipient', value: 'H2C 1.0 winner' },
];

export function Internship() {
  return (
    <section id="internship" className="py-section">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-line bg-accent-tint">
          <div className="grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span aria-hidden className="h-px w-8 bg-accent" />
                  <span className="eyebrow text-accent-strong">Beyond the prize</span>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-display-md font-semibold text-ink text-balance">
                  Win here. Intern abroad.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="measure mt-6 text-lg leading-relaxed text-graphite">
                  Through Vishwaniketan’s International Summer Internship Programme (ISIP), the
                  grand-prize team earns a shot at a funded internship overseas. It’s already
                  happened: the Hack to Crack 1.0 winner received a ₹1.5 Lakh grant and completed a
                  summer internship at Coventry University in the UK.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9">
                  <Button href={SITE.links.register} external size="lg" magnetic>
                    Compete for it
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <Reveal delay={0.1}>
                <dl className="flex flex-col overflow-hidden rounded-2xl border border-accent/20 bg-white">
                  {PROOF.map((p, i) => (
                    <div
                      key={p.label}
                      className={[
                        'flex items-center justify-between gap-6 px-6 py-5',
                        i !== 0 && 'border-t border-line',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <dt className="font-mono text-[0.68rem] uppercase tracking-widest text-slate">
                        {p.label}
                      </dt>
                      <dd className="text-right font-medium text-ink">{p.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
