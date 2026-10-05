import { useEffect, useState } from 'react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@/components/ui/command';
import { eras } from '@/content/journey';
import { profile } from '@/content/profile';
import { selectJourneyStep } from '@/features/journey/journey-events';
import { toggleTheme } from '@/hooks/use-theme';

function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onOpenChange]);

  const run = (action: () => void) => {
    onOpenChange(false);
    // let the dialog close before scrolling
    requestAnimationFrame(action);
  };

  const go = (id: string) => () =>
    document.getElementById(id)?.scrollIntoView({ block: 'start' });

  // confirm in the menu, or send people to the contact section where the
  // email can be selected when the clipboard is blocked
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onOpenChange(false);
      }, 700);
    } catch {
      run(go('contact'));
    }
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Command menu"
      description="Jump to a section or run an action"
    >
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={copyEmail}>
            {copied ? 'Copied' : 'Copy email'}
          </CommandItem>
          <CommandItem
            onSelect={() => {
              // open in the same tick as the keypress so it isn't blocked
              window.open(profile.links.booking, '_blank', 'noopener');
              onOpenChange(false);
            }}
          >
            Book a meeting
          </CommandItem>
          <CommandItem onSelect={() => run(toggleTheme)}>
            Toggle theme
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Sections">
          {SECTIONS.map((section) => (
            <CommandItem key={section.id} onSelect={() => run(go(section.id))}>
              {section.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Journey">
          {eras.map((era) => (
            <CommandItem
              key={era.id}
              onSelect={() => run(() => selectJourneyStep(era.id))}
            >
              Era {era.id} · {era.title}
              <CommandShortcut>{era.start.slice(0, 4)}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'work', label: 'My major work at Activepieces' },
  { id: 'journey', label: 'Journey' },
  { id: 'quests', label: 'Side quests' },
  { id: 'contact', label: 'Contact' },
];

export { CommandMenu, SECTIONS };
type CommandMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};
