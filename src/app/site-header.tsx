import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { profile } from '@/content/profile';

import { SECTIONS } from './command-menu';
import { ThemeToggle } from './theme-toggle';

function SiteHeader({ onOpenCommand }: SiteHeaderProps) {
  return (
    <header className="bg-background/85 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-[1120px] items-center gap-4 px-5">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight whitespace-nowrap sm:text-base"
        >
          <i className="bg-brand inline-block size-2.5 rounded-[3px]" />
          {profile.name}
        </a>
        <nav
          aria-label="Sections"
          className="ml-auto hidden gap-4 text-sm lg:flex"
        >
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {section.label === 'My major work at Activepieces'
                ? 'Work'
                : section.label}
            </a>
          ))}
        </nav>
        <Button
          variant="outline"
          size="sm"
          onClick={onOpenCommand}
          className="text-muted-foreground ml-auto lg:ml-0"
          aria-label="Open command menu"
        >
          <Search />
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden rounded border px-1 font-mono text-2xs sm:inline">
            ⌘K
          </kbd>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}

export { SiteHeader };
type SiteHeaderProps = { onOpenCommand: () => void };
