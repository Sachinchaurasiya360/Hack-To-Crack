import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { FAQS } from '@/constants/content';
import { SITE } from '@/constants/site';
import { EASE } from '@/lib/motion';
import { cn } from '@/lib/utils';
import type { FaqItem } from '@/types';

function AccordionRow({ item, id }: { item: FaqItem; id: string }) {
  const [open, setOpen] = useState(false);
  const panelId = `${id}-panel`;
  const btnId = `${id}-button`;

  return (
    <div className="border-b border-line">
      <h4>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="text-[1.05rem] font-medium text-ink">{item.question}</span>
          <span
            className={cn(
              'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-graphite transition-all duration-300 ease-premium',
              open && 'rotate-45 border-accent bg-accent text-white',
            )}
          >
            <Plus className="h-4 w-4" strokeWidth={2} />
          </span>
        </button>
      </h4>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.34, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="max-w-2xl pb-6 pr-12">
              <p className="text-[0.95rem] leading-relaxed text-graphite">{item.answer}</p>
              {item.bullets && (
                <ul className="mt-3 flex flex-col gap-1.5">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[0.95rem] text-graphite">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-section">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky intro */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-accent" />
                <span className="eyebrow">FAQ</span>
              </div>
              <h2 className="mt-6 text-display-md font-semibold text-ink">
                Questions, answered.
              </h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-slate">
                Still unsure about something? Reach the team directly — we usually reply within a
                day.
              </p>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="mt-4 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-strong"
              >
                {SITE.contact.email}
              </a>
            </div>
          </div>

          {/* Accordion groups */}
          <div className="lg:col-span-8">
            {FAQS.map((group) => (
              <div key={group.category} className="mb-10 last:mb-0">
                <h3 className="mb-1 font-mono text-xs uppercase tracking-widest text-slate">
                  {group.category}
                </h3>
                <div>
                  {group.items.map((item, i) => (
                    <AccordionRow
                      key={item.question}
                      item={item}
                      id={`faq-${group.category}-${i}`.replace(/\s+/g, '-').toLowerCase()}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
