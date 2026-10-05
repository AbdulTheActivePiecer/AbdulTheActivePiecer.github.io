import { ArrowUpRight, CalendarDays, Check, Copy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { profile } from '@/content/profile';

import { useCopyEmail } from './use-copy-email';

function ContactSection() {
  const { copied, copy, emailRef } = useCopyEmail();
  return (
    <section
      id="contact"
      className="bg-foreground text-background mt-16 mb-8 grid scroll-mt-16 gap-4 rounded-3xl p-6 sm:p-12 md:mt-20"
    >
      <span className="font-mono text-xs font-medium tracking-wide uppercase opacity-70">
        Contact
      </span>
      <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-5xl">
        Building something people automate with? Let's talk.
      </h2>
      <div className="flex flex-wrap items-center gap-2.5">
        <code
          ref={emailRef}
          className="font-mono text-base font-medium break-all select-all sm:text-xl"
        >
          {profile.email}
        </code>
        <Button
          variant="outline"
          onClick={copy}
          className="border-background/30 hover:border-background hover:bg-background/10 hover:text-background bg-transparent"
        >
          {copied ? <Check /> : <Copy />}
          {copied ?? 'Copy email'}
        </Button>
      </div>
      <div className="flex flex-wrap gap-2.5">
        <Button
          asChild
          className="bg-background text-foreground hover:bg-brand hover:text-brand-foreground"
        >
          <a href={profile.links.booking} target="_blank" rel="noopener">
            <CalendarDays />
            Book a meeting
          </a>
        </Button>
        {CONTACT_LINKS.map((link) => (
          <Button
            key={link.label}
            asChild
            variant="outline"
            className="border-background/30 hover:border-background hover:bg-background/10 hover:text-background bg-transparent"
          >
            <a href={link.href} target="_blank" rel="noopener">
              {link.label}
              <ArrowUpRight />
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}

const CONTACT_LINKS = [
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'GitHub', href: profile.links.github },
];

export { ContactSection };
