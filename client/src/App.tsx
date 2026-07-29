import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { WhyParticipate } from '@/components/sections/WhyParticipate';
import { Tracks } from '@/components/sections/Tracks';
import { Prizes } from '@/components/sections/Prizes';
import { Internship } from '@/components/sections/Internship';
import { Timeline } from '@/components/sections/Timeline';
import { People } from '@/components/sections/People';
import { Sponsors } from '@/components/sections/Sponsors';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export default function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyParticipate />
        <Tracks />
        <Prizes />
        <Internship />
        <Timeline />
        <People />
        <Sponsors />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
