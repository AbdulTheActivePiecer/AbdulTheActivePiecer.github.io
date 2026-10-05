import { ArrowUpRight } from 'lucide-react';

import type { ReactNode } from 'react';

import { LinkedText } from '@/components/custom/linked-text';
import { PrLinks } from '@/components/custom/pr-links';
import { Reveal } from '@/components/custom/reveal';
import { Screenshot } from '@/components/custom/screenshot';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { CaseStudy } from '@/content/work';
import { cn } from '@/lib/utils';

function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Reveal>
      <article className="bg-card grid gap-6 rounded-2xl border p-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:p-6">
        <div className="min-w-0">
          <span className="text-brand font-mono text-xs font-medium tracking-wide uppercase">
            {study.label}
          </span>
          <h3 className="mt-1 mb-3.5 text-2xl font-semibold tracking-tight">
            {study.title}
          </h3>
          <div className="grid gap-2">
            <Part label="Problem statement" text={study.problem} />
            <Part
              label="What I built"
              text={<LinkedText text={study.built} link={study.builtLink} />}
            />
            <Part label="Outcome" text={study.outcome} highlight />
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            {study.stack.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="text-muted-foreground font-mono font-normal"
              >
                {item}
              </Badge>
            ))}
            <PrLinks prs={study.prs} />
          </div>
          {study.demo && (
            <Button asChild variant="outline" className="mt-4">
              <a href={study.demo.href} target="_blank" rel="noopener">
                {study.demo.label}
                <ArrowUpRight />
              </a>
            </Button>
          )}
        </div>
        <Screenshot shot={study.screenshot} className="self-center" />
      </article>
    </Reveal>
  );
}

function Part({ label, text, highlight }: PartProps) {
  return (
    <div
      className={cn(
        'grid gap-0.5 rounded-lg border px-3 py-2.5 text-sm',
        highlight && 'bg-brand-soft border-transparent',
      )}
    >
      <span className="text-muted-foreground font-mono text-2xs font-medium tracking-wider uppercase">
        {label}
      </span>
      {text}
    </div>
  );
}

export { CaseCard };
type PartProps = { label: string; text: ReactNode; highlight?: boolean };
