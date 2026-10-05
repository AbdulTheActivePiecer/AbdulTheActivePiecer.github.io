import {
  AppWindow,
  Atom,
  Briefcase,
  CreditCard,
  FlaskConical,
  MapPin,
  Rocket,
  Sheet,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import type { StepTone } from '@/components/custom/step-icon';
import { eras } from '@/content/journey';
import type { Era } from '@/content/journey';
import { formatDuration, formatRange, monthsBetween } from '@/lib/format';

function buildJourneySteps(): JourneyStep[] {
  return [
    {
      key: 'before',
      kind: 'before',
      icon: Briefcase,
      tone: 'slate',
      title: 'Before Activepieces',
      meta: '2018 → 2022 · Sky Software, Babil Games',
      tag: '2 roles',
    },
    ...eras.map((era): JourneyStep => ({
      key: `era-${era.id}`,
      kind: 'era',
      icon: ERA_ICONS[era.id].icon,
      tone: ERA_ICONS[era.id].tone,
      title: era.title,
      meta: formatRange(era.start, era.end),
      tag: `${era.prs} PRs`,
      prs: era.prs,
      duration: formatDuration(monthsBetween(era.start, era.end)),
      era,
    })),
    {
      key: 'here',
      kind: 'here',
      icon: MapPin,
      tone: 'solid',
      title: 'You are here',
      meta: 'Oct 2026 · still shipping',
      duration: 'live',
    },
  ];
}

// One icon per era, picked for what the era shipped.
const ERA_ICONS: Record<number, { icon: LucideIcon; tone: StepTone }> = {
  1: { icon: Rocket, tone: 'amber' },
  2: { icon: FlaskConical, tone: 'rose' },
  3: { icon: AppWindow, tone: 'sky' },
  4: { icon: Atom, tone: 'cyan' },
  5: { icon: Sheet, tone: 'emerald' },
  6: { icon: Workflow, tone: 'brand' },
  7: { icon: CreditCard, tone: 'emerald' },
};

const journeySteps = buildJourneySteps();
const milestoneTotal = eras.reduce((n, era) => n + era.milestones.length, 0);

export { journeySteps, milestoneTotal };
export type JourneyStep = {
  key: string;
  kind: 'before' | 'era' | 'here';
  icon: LucideIcon;
  tone: StepTone;
  title: string;
  meta: string;
  tag?: string;
  prs?: number;
  duration?: string;
  era?: Era;
};
