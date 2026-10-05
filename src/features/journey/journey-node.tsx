import { Check } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { StepIcon } from '@/components/custom/step-icon';
import { cn } from '@/lib/utils';

import type { JourneyStep } from './journey-steps';
import { StepTabs } from './step-tabs';

function JourneyNode({
  step,
  visited,
  selected,
  open,
  inline,
  nodeRef,
  onActivate,
}: JourneyNodeProps) {
  return (
    <article
      ref={nodeRef}
      id={step.key}
      className={cn(
        'bg-card relative w-full max-w-[560px] scroll-mt-24 rounded-xl border shadow-xs transition-[border-color,box-shadow]',
        step.kind === 'before' && 'border-dashed',
        step.kind === 'here' && 'border-brand',
        visited && 'border-success/60',
        selected && 'ring-brand-soft ring-4',
        selected && !visited && 'border-brand',
      )}
    >
      <button
        type="button"
        aria-expanded={inline ? open : undefined}
        onClick={onActivate}
        className="focus-visible:ring-ring/50 grid w-full cursor-pointer grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-3.5 rounded-xl px-4 py-3.5 text-left outline-none focus-visible:ring-[3px]"
      >
        <StepIcon icon={step.icon} tone={step.tone} size="xl" />
        <span className="min-w-0">
          <h3 className="text-base leading-snug font-semibold tracking-tight">
            {step.title}
          </h3>
          <span className="text-muted-foreground mt-0.5 block font-mono text-xs">
            {step.meta}
          </span>
        </span>
        <span className="flex items-center gap-1.5">
          {step.tag && (
            <span className="text-muted-foreground hidden rounded-full border px-2 py-0.5 font-mono text-xs whitespace-nowrap sm:inline">
              {step.tag}
            </span>
          )}
          <motion.span
            aria-label={visited ? 'Viewed' : undefined}
            className="bg-success text-card grid size-5 place-items-center rounded-full"
            initial={false}
            animate={{ scale: visited ? 1 : 0, opacity: visited ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <Check className="size-3" strokeWidth={3} />
          </motion.span>
        </span>
      </button>
      {inline && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="border-t pb-4">
                <StepTabs
                  step={step}
                  className="px-4"
                  viewportClassName="max-h-[60vh]"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </article>
  );
}

function JourneyEdge() {
  return <span className="bg-border block h-8 w-0.5" aria-hidden="true" />;
}

export { JourneyNode, JourneyEdge };
type JourneyNodeProps = {
  step: JourneyStep;
  visited: boolean;
  selected: boolean;
  open: boolean;
  inline: boolean;
  nodeRef: (el: HTMLElement | null) => void;
  onActivate: () => void;
};
