import { CalendarDays } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { profile } from '@/content/profile';

import { GithubIcon, LinkedinIcon } from './brand-icons';
import { MiniFlow } from './mini-flow';

function HeroSection() {
  return (
    <section
      id="top"
      className="grid items-center gap-8 pt-10 pb-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:gap-12 md:pt-16 md:pb-12"
    >
      <div>
        <p className="text-muted-foreground flex items-center gap-2 font-mono text-sm font-medium">
          <span className="relative flex size-2">
            <span className="bg-success absolute inline-flex size-full animate-ping rounded-full opacity-60 motion-reduce:hidden" />
            <span className="bg-success relative inline-flex size-2 rounded-full" />
          </span>
          {profile.role} · {profile.company}
        </p>
        <h1 className="my-3.5 text-5xl leading-none font-bold tracking-tighter sm:text-6xl">
          {profile.name}
        </h1>
        <p className="text-muted-foreground mb-6 max-w-[34ch] text-lg sm:text-xl">
          {profile.hook}
        </p>
        <div className="flex flex-wrap items-center gap-2.5">
          <Button
            asChild
            size="lg"
            className="hover:bg-brand hover:text-brand-foreground"
          >
            <a href={profile.links.booking} target="_blank" rel="noopener">
              <CalendarDays />
              Book a meeting
            </a>
          </Button>
          <Button asChild variant="outline" size="icon-lg" aria-label="GitHub">
            <a href={profile.links.github} target="_blank" rel="noopener">
              <GithubIcon />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon-lg"
            aria-label="LinkedIn"
          >
            <a href={profile.links.linkedin} target="_blank" rel="noopener">
              <LinkedinIcon />
            </a>
          </Button>
        </div>
      </div>
      <MiniFlow />
    </section>
  );
}

export { HeroSection };
