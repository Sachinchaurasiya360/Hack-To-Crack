import type { NavLink } from '@/types';

/**
 * Single source of truth for event identity, dates and outbound links.
 * All values are drawn from the existing Hack to Crack material.
 */
export const SITE = {
  name: 'Hack to Crack',
  edition: '3.0',
  tagline: 'Code. Create. Conquer.',
  organizer: 'Vishwaniketan iMEET',
  /**
   * PLACEHOLDER event window. The repo's own timeline lists dates as
   * "Announcing soon", so this is a stand-in that keeps the countdown live.
   * Replace with the official kickoff moment once announced.
   * The countdown degrades gracefully once the target passes.
   */
  startsAtISO: '2026-11-21T09:00:00+05:30',
  dateLabel: 'November 21–22, 2026',
  location: 'Vishwaniketan iMEET, Mumbai',
  region: 'Maharashtra, India',
  durationHours: 36,
  mode: 'Hybrid · Online + Offline',
  links: {
    register: 'https://forms.gle/XBmhhCPbz3MKnreC9',
    whatsapp: 'https://chat.whatsapp.com/GTtBgrJhORf7N1vOKfkBfK',
    sponsorMail: 'mailto:hacktocrack@vishwaniketan.edu.in',
    previousEdition: '/legacy/previous-edition-2.0.html',
  },
  contact: {
    email: 'hacktocrack@vishwaniketan.edu.in',
    phone: '+91 7070416209',
    address: 'Vishwaniketan iMEET, Mumbai, Maharashtra, India',
  },
  social: {
    instagram: 'https://www.instagram.com/hack_to_crack/',
    twitter: 'https://twitter.com/hack_to_crack',
    linkedin: 'https://www.linkedin.com/company/hack-to-crack',
  },
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'FAQ', href: '#faq' },
];
