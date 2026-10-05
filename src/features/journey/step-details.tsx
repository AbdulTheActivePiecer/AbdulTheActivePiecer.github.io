import { PrLinks } from '@/components/custom/pr-links';
import { Screenshot } from '@/components/custom/screenshot';
import { beforeRoles, beforeSummary, eras } from '@/content/journey';
import { profile, stats } from '@/content/profile';
import { cn } from '@/lib/utils';

import { milestoneTotal } from './journey-steps';
import type { JourneyStep } from './journey-steps';

function StepDetails({ step }: { step: JourneyStep }) {
  if (step.kind === 'before') return <BeforeDetails />;
  if (step.kind === 'here') return <HereSnapshot />;
  const era = step.era!;
  return (
    <div className="grid gap-3">
      <p className="text-muted-foreground text-sm">{era.summary}</p>
      <ul className="grid gap-3">
        {era.milestones.map((m) => (
          <li
            key={m.title}
            className="grid gap-x-2.5 border-t pt-3 text-sm first:border-t-0 first:pt-0 sm:grid-cols-[64px_minmax(0,1fr)]"
          >
            <span className="text-muted-foreground font-mono text-xs leading-6">
              {m.date}
            </span>
            <span>
              <b className="mb-1 block text-base font-semibold">{m.title}</b>
              <p className="mb-2 max-w-prose leading-relaxed">{m.story}</p>
              <PrLinks prs={m.prs} />
            </span>
          </li>
        ))}
      </ul>
      {era.screenshot && <Screenshot shot={era.screenshot} />}
    </div>
  );
}

function BeforeDetails() {
  return (
    <div className="grid gap-3">
      <p className="text-muted-foreground text-sm">{beforeSummary}</p>
      <ul className="grid gap-3">
        {beforeRoles.map((role) => (
          <li
            key={role.company}
            className="grid gap-x-2.5 border-t pt-3 text-sm first:border-t-0 first:pt-0 sm:grid-cols-[64px_minmax(0,1fr)]"
          >
            <span className="text-muted-foreground font-mono text-xs leading-6">
              {role.start.slice(0, 4)}
            </span>
            <span>
              <b className="mb-1 block text-base font-semibold">
                {role.role} · {role.company}
              </b>
              <p className="mb-1 max-w-prose leading-relaxed">
                {role.description}
              </p>
              <span className="text-muted-foreground font-mono text-xs">
                {role.start} → {role.end}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HereSnapshot() {
  const total = (label: string) =>
    stats
      .find((s) => s.label.startsWith(label))
      ?.value?.toLocaleString('en-US');
  return (
    <div className="grid gap-3">
      <div className="grid gap-2 sm:grid-cols-2">
        <Cell label="Trigger" value="Joined Activepieces · Jul 2022" />
        <Cell
          label="Steps run"
          value={`${eras.length} eras · ${milestoneTotal} milestones`}
        />
        <Cell
          label="Output"
          value={`${total('pull requests')} PRs merged · ${total('commits')} commits · ${total('releases')} releases`}
          wide
        />
        <Cell label="Currently" value="AI steps billed on real cost" />
        <Cell label="Status" value="● Still running" success />
      </div>
      <p className="text-muted-foreground text-sm">
        Next step: whatever we build together.{' '}
        <a
          href={profile.links.booking}
          target="_blank"
          rel="noopener"
          className="text-brand underline-offset-4 hover:underline"
        >
          Book a meeting
        </a>
        .
      </p>
    </div>
  );
}

function Cell({ label, value, wide, success }: CellProps) {
  return (
    <div
      className={cn(
        'bg-canvas min-w-0 rounded-lg border px-2.5 py-2',
        wide && 'sm:col-span-2',
      )}
    >
      <span className="text-muted-foreground block font-mono text-2xs font-medium tracking-wider uppercase">
        {label}
      </span>
      <b className={cn('text-sm', success && 'text-success')}>{value}</b>
    </div>
  );
}

export { StepDetails };
type CellProps = {
  label: string;
  value: string;
  wide?: boolean;
  success?: boolean;
};
