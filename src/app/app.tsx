import { TooltipProvider } from '@/components/ui/tooltip';
import { ContactSection } from '@/features/contact/contact-section';
import { HeroSection } from '@/features/hero/hero-section';
import { JourneySection } from '@/features/journey/journey-section';
import { ProjectsSection } from '@/features/projects/projects-section';
import { SkillsSection } from '@/features/skills/skills-section';

import { SiteHeader } from './site-header';

function App() {
  return (
    <TooltipProvider>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <JourneySection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </TooltipProvider>
  );
}

export { App };
