import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import { StepIcon } from '@/components/custom/step-icon';
import { Button } from '@/components/ui/button';

import type { JourneyStep } from './journey-steps';
import { StepTabs } from './step-tabs';

// The builder's right-hand step settings panel, reused as the journey's detail view.
function StepPanel({ steps, index, onSelect }: StepPanelProps) {
  const step = steps[index];
  return (
    <aside className={PANEL_CLASS} aria-label="Step details" aria-live="polite">
      <div className="bg-card grid grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-2.5 border-b px-4 py-3.5">
        <StepIcon icon={step.icon} tone={step.tone} size="lg" />
        <span className="min-w-0">
          <h3 className="text-sm leading-snug font-semibold">{step.title}</h3>
          <span className="text-muted-foreground font-mono text-xs">
            {step.meta}
            {step.tag ? ` · ${step.tag}` : ''}
          </span>
        </span>
        <span className="flex gap-0.5">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Previous step"
            disabled={index === 0}
            onClick={() => onSelect(index - 1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Next step"
            disabled={index === steps.length - 1}
            onClick={() => onSelect(index + 1)}
          >
            <ChevronRight />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Close"
            onClick={() => onSelect(-1)}
          >
            <X />
          </Button>
        </span>
      </div>
      <StepTabs key={step.key} step={step} className="px-4 pb-5" fill />
    </aside>
  );
}

// Always as tall as the screen below the header, like the builder's side panel.
const PANEL_CLASS =
  'bg-card flex h-[calc(100vh-3.5rem)] w-[420px] flex-col overflow-hidden border-l';

export { StepPanel };
type StepPanelProps = {
  steps: JourneyStep[];
  index: number;
  onSelect: (index: number) => void;
};
