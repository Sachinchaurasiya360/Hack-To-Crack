import {
  Rocket,
  Users,
  Lightbulb,
  Globe,
  Award,
  GraduationCap,
  Wifi,
  BusFront,
} from 'lucide-react';
import type {
  EventMeta,
  Feature,
  FaqGroup,
  PrizeTier,
  SpecialAward,
  Sponsor,
  Stat,
  TimelineStep,
  Track,
} from '@/types';

/* Hero metadata — the "datasheet" header fields. */
export const EVENT_META: EventMeta[] = [
  { label: 'Date', value: 'Nov 21–22, 2026' },
  { label: 'Duration', value: '36 Hours' },
  { label: 'Mode', value: 'Hybrid' },
  { label: 'Prize Pool', value: '₹3 Lakh' },
];

/* Headline statistics, drawn from the previous edition. */
export const STATS: Stat[] = [
  { value: 400, suffix: '+', label: 'Hackers' },
  { value: 100, suffix: '+', label: 'Projects built' },
  { value: 25, suffix: '+', label: 'Colleges' },
  { value: 6, label: 'Tracks' },
];

/* "Why participate" — reframed from the original feature list. */
export const FEATURES: Feature[] = [
  {
    icon: Award,
    title: '₹3 Lakh in prizes',
    body: 'A ₹1 Lakh top prize plus special-category awards and platform credits, shared across winning teams.',
  },
  {
    icon: GraduationCap,
    title: 'International internship',
    body: 'The grand-prize team is in the running for a funded international summer internship through Vishwaniketan’s ISIP programme.',
  },
  {
    icon: Rocket,
    title: 'Mentor-led build',
    body: 'Work alongside industry mentors across 36 hours — from first commit to final pitch.',
  },
  {
    icon: Globe,
    title: 'Hybrid by design',
    body: 'Build on-campus in Mumbai or join fully online. Both formats compete for prizes.',
  },
  {
    icon: Users,
    title: 'Teams of 2–4',
    body: 'Form a squad, bring complementary skills, and ship something real together.',
  },
  {
    icon: Lightbulb,
    title: 'Real-world problems',
    body: 'Six open tracks and an open-innovation lane — bring your own statement if it solves a genuine problem.',
  },
];

/* Six tracks. Labeled by domain code (a catalog, not a sequence). */
export const TRACKS: Track[] = [
  {
    code: 'AI · ML',
    title: 'Artificial Intelligence & ML',
    body: 'Build with intelligence at the core — from perception to language.',
    topics: ['Deep Learning', 'Computer Vision', 'NLP'],
  },
  {
    code: 'WEB3',
    title: 'Web3 & Blockchain',
    body: 'Design trustless systems and decentralized applications.',
    topics: ['Blockchain', 'Smart Contracts', 'DeFi'],
  },
  {
    code: 'GREEN',
    title: 'Sustainability',
    body: 'Engineer solutions for a cleaner, more resilient planet.',
    topics: ['Green Tech', 'Clean Energy', 'Eco Solutions'],
  },
  {
    code: 'EDU',
    title: 'Education Technology',
    body: 'Reimagine how people learn, teach, and credential skills.',
    topics: ['Learning Platforms', 'Assessment', 'Access'],
  },
  {
    code: 'HEALTH',
    title: 'Healthcare',
    body: 'Improve access, outcomes, and efficiency across care.',
    topics: ['Medical Tech', 'Patient Care', 'Health Analytics'],
  },
  {
    code: 'OPEN',
    title: 'Student Innovation',
    body: 'Bring your own problem statement — as long as it solves something real.',
    topics: ['Campus Solutions', 'Open Innovation', 'Anything real'],
  },
];

/* Prize tiers. */
export const PRIZES: PrizeTier[] = [
  {
    rank: '01',
    title: 'First Prize',
    amount: '₹50,000',
    featured: true,
    perks: ['International internship opportunity', 'Mentorship programme', 'Free domain'],
  },
  {
    rank: '02',
    title: 'Second Prize',
    amount: '₹30,000',
    perks: ['Dev tools package', 'Training workshops', 'Free domain'],
  },
  {
    rank: '03',
    title: 'Third Prize',
    amount: '₹20,000',
    perks: ['Learning resources', 'Free domain'],
  },
];

export const SPECIAL_AWARDS: SpecialAward[] = [
  { title: 'Online Hackathon Winner', amount: '₹10,000', note: '+ $500 in platform credits' },
  { title: 'Most Innovative', amount: '₹5,000' },
  { title: 'Best Technical Implementation', amount: '₹5,000' },
];

/* Timeline — a genuine sequence, so it is numbered. */
export const TIMELINE: TimelineStep[] = [
  {
    index: '01',
    title: 'Pre-registration',
    body: 'Reserve your spot for Hack to Crack 3.0 before general registration opens.',
    date: 'Announcing soon',
  },
  {
    index: '02',
    title: 'Event announcement',
    body: 'Official reveal of the edition, tracks, and partners.',
    date: 'Announcing soon',
  },
  {
    index: '03',
    title: 'Registration opens',
    body: 'Register your team of 2–4 through our partner platform.',
    date: 'Announcing soon',
  },
  {
    index: '04',
    title: 'Registration deadline',
    body: 'Last call to lock in your team before the build begins.',
    date: 'Announcing soon',
  },
  {
    index: '05',
    title: 'Hackathon kickoff',
    body: 'Opening ceremony and the start of 36 hours on the clock.',
    date: 'Announcing soon',
    meta: ['Library', '9:00 AM'],
  },
  {
    index: '06',
    title: 'Mid-event check',
    body: 'Progress review and one-on-one mentorship sessions.',
    date: 'Announcing soon',
  },
  {
    index: '07',
    title: 'Project submission',
    body: 'Final submissions close and teams present to the jury.',
    date: 'Announcing soon',
    meta: ['3:00 PM'],
  },
  {
    index: '08',
    title: 'Prize distribution',
    body: 'Closing ceremony and winner announcements.',
    date: 'Announcing soon',
    meta: ['6:00 PM'],
  },
];

/* Past supporters, from the previous edition. */
export const PAST_SPONSORS: Sponsor[] = [
  { name: 'RCF Chemicals', tier: 'Sponsor' },
  { name: 'Aptech Panvel', tier: 'Sponsor' },
  { name: 'Markscape', tier: 'Sponsor' },
  { name: 'RkDemy', tier: 'Sponsor' },
  { name: '0x Day', tier: 'Platform' },
  { name: 'IIIT Pro', tier: 'Sponsor' },
  { name: 'StarkSeek', tier: 'Community' },
  { name: 'Interview Buddy', tier: 'In-kind' },
];

/* Participant essentials — a compact "what you get" strip. */
export const ESSENTIALS: Feature[] = [
  {
    icon: Wifi,
    title: 'High-speed Wi-Fi',
    body: 'Reliable connectivity across the venue for the full 36 hours.',
  },
  {
    icon: BusFront,
    title: 'Travel & stay',
    body: 'Accommodation for offline participants plus shuttle service from Panvel, Karjat, Khopoli, Lonavala and Vashi.',
  },
  {
    icon: Users,
    title: 'On-site support',
    body: 'Student coordinators guide you from pickup point to project submission.',
  },
];

export const FAQS: FaqGroup[] = [
  {
    category: 'General',
    items: [
      {
        question: 'What is Hack to Crack 3.0?',
        answer:
          'A 36-hour hackathon bringing innovators together to solve real-world challenges — 400+ participants, an international internship opportunity, and a ₹3 Lakh prize pool.',
      },
      {
        question: 'When and where does it happen?',
        answer:
          'November 21–22, 2026, at Vishwaniketan iMEET, Mumbai, Maharashtra. It runs as a hybrid event, so you can join on-campus or fully online.',
      },
    ],
  },
  {
    category: 'Registration',
    items: [
      {
        question: 'How do I register?',
        answer:
          'Registration runs through our official partner platform. Use the register button on this page to begin — pre-registration opens first.',
      },
      {
        question: 'What is the team size?',
        answer: 'Teams can have 2–4 members. Solo participation is not allowed.',
      },
    ],
  },
  {
    category: 'Prizes',
    items: [
      {
        question: 'What can teams win?',
        answer: 'The prize pool spans the main tiers and special-category awards:',
        bullets: [
          'First Prize — ₹50,000 + international internship opportunity',
          'Second Prize — ₹30,000 + development tools',
          'Third Prize — ₹20,000',
          'Special-category awards — up to ₹10,000 each',
        ],
      },
    ],
  },
  {
    category: 'On the day',
    items: [
      {
        question: 'What should I bring?',
        answer:
          'Your laptop, charger, and any devices you need to build. We provide breakfast, beverages, and a dedicated working space.',
      },
      {
        question: 'Is there internet at the venue?',
        answer: 'Yes — high-speed Wi-Fi is available throughout the event.',
      },
    ],
  },
  {
    category: 'Travel & stay',
    items: [
      {
        question: 'Is accommodation provided?',
        answer:
          'Yes. Accommodation is arranged for offline participants across the event dates, so you have a comfortable place to rest before, during, and after the build.',
      },
      {
        question: 'How do I reach the venue?',
        answer: 'Dedicated shuttle service runs between the following stations and the campus:',
        bullets: ['Panvel', 'Karjat', 'Khopoli', 'Lonavala', 'Vashi'],
      },
    ],
  },
];
