import { MotionConfig } from 'motion/react';
import { useState } from 'react';

import { TooltipProvider } from '@/components/ui/tooltip';
import { profile } from '@/content/profile';
import { AboutSection } from '@/features/about/about-section';
import { ContactSection } from '@/features/contact/contact-section';
import { HeroSection } from '@/features/hero/hero-section';
import { JourneySection } from '@/features/journey/journey-section';
import { SideQuestsSection } from '@/features/side-quests/side-quests-section';
import { StatsSection } from '@/features/stats/stats-section';
import { TypescriptSection } from '@/features/typescript/typescript-section';
import { WorkSection } from '@/features/work/work-section';

import { CommandMenu } from './command-menu';
import { SiteHeader } from './site-header';

function App() {
  const [commandOpen, setCommandOpen] = useState(false);
  return (
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <SiteHeader onOpenCommand={() => setCommandOpen(true)} />
        <main className="mx-auto w-full max-w-[1120px] px-5">
          <HeroSection />
          <StatsSection />
          <AboutSection />
          <TypescriptSection />
          <WorkSection />
          <JourneySection />
          <SideQuestsSection />
          <ContactSection />
          <footer className="text-muted-foreground flex flex-wrap justify-between gap-3 pb-10 font-mono text-xs">
            <span>© 2026 {profile.name}</span>
            <span>Built with React, shadcn and Motion · data from git</span>
          </footer>
        </main>
        <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
      </TooltipProvider>
    </MotionConfig>
  );
}

export { App };
