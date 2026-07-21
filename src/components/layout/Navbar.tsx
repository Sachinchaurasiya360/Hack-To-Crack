import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Logo } from './Logo';
import { NAV_LINKS, SITE } from '@/constants/site';
import { EASE } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-colors duration-300 ease-premium',
          scrolled || open ? 'border-b border-line bg-white/85 backdrop-blur-md' : 'border-b border-transparent',
        )}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between" aria-label="Primary">
            <a href="#top" aria-label="Hack to Crack 3.0 — home" className="shrink-0">
              <Logo />
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-graphite transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <Button href={SITE.links.register} external size="md" magnetic>
                Register
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Button>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="border-b border-line bg-white md:hidden"
          >
            <Container>
              <div className="flex flex-col gap-1 py-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line/70 py-4 text-lg text-ink"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 text-slate" />
                  </a>
                ))}
                <Button
                  href={SITE.links.register}
                  external
                  size="lg"
                  className="mt-5 w-full"
                >
                  Register now
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
