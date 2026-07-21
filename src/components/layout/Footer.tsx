import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from './Logo';
import { NAV_LINKS, SITE } from '@/constants/site';

const socials = [
  { label: 'Instagram', href: SITE.social.instagram, Icon: FaInstagram },
  { label: 'X', href: SITE.social.twitter, Icon: FaXTwitter },
  { label: 'LinkedIn', href: SITE.social.linkedin, Icon: FaLinkedinIn },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:py-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate">
              A 36-hour hybrid hackathon by {SITE.organizer}. Build something real, together.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-graphite transition-colors duration-200 hover:border-ink hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <h3 className="eyebrow">Navigate</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-graphite transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="eyebrow">Contact</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-graphite">
              <li>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-ink"
                >
                  <Mail className="h-4 w-4 shrink-0 text-slate" />
                  {SITE.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-ink"
                >
                  <Phone className="h-4 w-4 shrink-0 text-slate" />
                  {SITE.contact.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate" />
                <span>{SITE.contact.address}</span>
              </li>
            </ul>
            <a
              href={SITE.links.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              Join the participant WhatsApp group
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-slate">
            © {SITE.name} {SITE.edition} — All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate">{SITE.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
