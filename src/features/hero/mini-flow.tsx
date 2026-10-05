import {
  AppWindow,
  Atom,
  Check,
  CreditCard,
  MapPin,
  Workflow,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { StepIcon } from '@/components/custom/step-icon';
import type { StepTone } from '@/components/custom/step-icon';
import { selectJourneyStep } from '@/features/journey/journey-events';
import { journeySteps } from '@/features/journey/journey-steps';
import { cn } from '@/lib/utils';

function MiniFlow() {
  const reduce = useReducedMotion();
  const delayFor = (order: number) => (reduce ? 0 : 0.5 + order * 0.52);

  return (
    <div
      className="dot-grid grid justify-items-center rounded-2xl border px-3 py-7 sm:px-5"
      aria-label="My career as a flow"
    >
      <MiniNode step={STEPS[0]} order={0} delay={delayFor(0)} />
      <MiniEdge />
      <MiniNode step={STEPS[1]} order={1} delay={delayFor(1)} />
      <MiniEdge />
      <div className="relative grid w-full max-w-[520px] grid-cols-2 gap-2.5 pt-3">
        <span className="border-border absolute inset-x-1/4 top-0 h-3 rounded-t-lg border-2 border-b-0" />
        <span className="bg-canvas text-muted-foreground absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-1.5 font-mono text-2xs">
          Router
        </span>
        <MiniNode step={STEPS[2]} order={2} delay={delayFor(2)} compact />
        <MiniNode step={STEPS[3]} order={2} delay={delayFor(2)} compact />
      </div>
      <MiniEdge className="mt-3" />
      <MiniNode step={STEPS[4]} order={3} delay={delayFor(3)} />
      <MiniEdge />
      <MiniNode step={STEPS[5]} order={4} delay={0} here />
    </div>
  );
}

function MiniNode({ step, delay, compact, here }: MiniNodeProps) {
  return (
    <a
      href={`#${step.target}`}
      onClick={(event) => {
        event.preventDefault();
        selectJourneyStep(journeyIndex(step.target));
      }}
      className={cn(
        'bg-card grid w-full max-w-[300px] items-center gap-2.5 rounded-lg border px-3 py-2 shadow-xs transition hover:-translate-y-px',
        compact
          ? 'grid-cols-[24px_minmax(0,1fr)_auto] gap-1.5 px-2'
          : 'grid-cols-[30px_minmax(0,1fr)_auto]',
        here ? 'border-brand ring-brand-soft ring-4' : 'hover:border-brand',
      )}
    >
      <StepIcon
        icon={step.icon}
        tone={step.tone}
        size={compact ? 'sm' : 'md'}
      />
      <span className="min-w-0">
        <span className="block text-sm leading-tight font-semibold">
          {step.title}
        </span>
        <span className="text-muted-foreground block font-mono text-2xs">
          {step.meta}
        </span>
      </span>
      {here ? (
        <motion.span
          className="border-brand size-[18px] rounded-full border-[1.5px] border-dashed"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      ) : (
        <motion.span
          className="grid size-[18px] place-items-center rounded-full border-[1.5px]"
          initial={{
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'var(--border)',
          }}
          animate={{
            backgroundColor: 'var(--success)',
            borderColor: 'var(--success)',
          }}
          transition={{ delay, duration: 0.25 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.25 }}
          >
            <Check className="text-card size-[11px]" strokeWidth={3} />
          </motion.span>
        </motion.span>
      )}
    </a>
  );
}

function MiniEdge({ className }: { className?: string }) {
  return <span className={cn('bg-border block h-[22px] w-0.5', className)} />;
}

const STEPS: MiniStep[] = [
  {
    icon: Zap,
    tone: 'amber',
    title: 'Joined Activepieces',
    meta: 'Trigger · Jul 2022 · PR #1',
    target: 'era-1',
  },
  {
    icon: Workflow,
    tone: 'brand',
    title: 'Built the flow builder',
    meta: '2023 · Angular era',
    target: 'era-2',
  },
  {
    icon: AppWindow,
    tone: 'sky',
    title: 'White-labelling & embed',
    meta: '2023-24',
    target: 'era-3',
  },
  {
    icon: Atom,
    tone: 'cyan',
    title: 'React rewrite',
    meta: '2024',
    target: 'era-4',
  },
  {
    icon: CreditCard,
    tone: 'emerald',
    title: 'Editor redesign & billing',
    meta: '2025-26',
    target: 'era-6',
  },
  {
    icon: MapPin,
    tone: 'solid',
    title: 'You are here',
    meta: 'Still shipping · Oct 2026',
    target: 'here',
  },
];

const journeyIndex = (key: string) =>
  journeySteps.findIndex((step) => step.key === key);

export { MiniFlow };
type MiniStep = {
  icon: LucideIcon;
  tone: StepTone;
  title: string;
  meta: string;
  target: string;
};
type MiniNodeProps = {
  step: MiniStep;
  order: number;
  delay: number;
  compact?: boolean;
  here?: boolean;
};
