import type { LucideIcon } from 'lucide-react';

export interface EventMeta {
  label: string;
  value: string;
}

export interface Stat {
  value: number;
  /** Rendered after the animated number, e.g. "+", " Lakh". */
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface Track {
  code: string;
  title: string;
  body: string;
  topics: string[];
}

export interface PrizeTier {
  rank: string;
  title: string;
  amount: string;
  perks: string[];
  featured?: boolean;
}

export interface SpecialAward {
  title: string;
  amount: string;
  note?: string;
}

export interface TimelineStep {
  index: string;
  title: string;
  body: string;
  date: string;
  meta?: string[];
}

export interface Sponsor {
  name: string;
  tier: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  bullets?: string[];
}

export interface FaqGroup {
  category: string;
  items: FaqItem[];
}

export interface NavLink {
  label: string;
  href: string;
}
