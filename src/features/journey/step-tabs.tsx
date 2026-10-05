import type { ReactNode } from 'react';

import { FadeScrollArea } from '@/components/custom/fade-scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

import type { JourneyStep } from './journey-steps';
import { StepDetails } from './step-details';
import { StepOutput } from './step-output';

// Details and Output tabs, like a step in the Activepieces builder.
function StepTabs({ step, className, viewportClassName, fill }: StepTabsProps) {
  const body = (content: ReactNode) => (
    <FadeScrollArea
      className={cn(fill && 'min-h-0 flex-1')}
      viewportClassName={viewportClassName}
    >
      <div className={cn('pt-3.5', className)}>{content}</div>
    </FadeScrollArea>
  );
  const era = step.era;
  if (!era) {
    return body(<StepDetails step={step} />);
  }
  return (
    <Tabs
      defaultValue="details"
      className={cn('gap-0', fill && 'min-h-0 flex-1')}
    >
      <div className="flex items-center justify-between gap-3 border-b px-4">
        <TabsList className="h-auto gap-4 rounded-none bg-transparent p-0">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="text-muted-foreground data-[state=active]:border-b-brand data-[state=active]:text-foreground h-auto flex-none rounded-none border-0 border-b-2 border-transparent px-0 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {step.duration && (
          <span className="text-muted-foreground font-mono text-xs">
            {step.duration}
          </span>
        )}
      </div>
      <TabsContent
        value="details"
        className={cn(fill && 'flex min-h-0 flex-col')}
      >
        {body(<StepDetails step={step} />)}
      </TabsContent>
      <TabsContent
        value="output"
        className={cn(fill && 'flex min-h-0 flex-col')}
      >
        {body(<StepOutput era={era} duration={step.duration ?? ''} />)}
      </TabsContent>
    </Tabs>
  );
}

const TABS = [
  { value: 'details', label: 'Details' },
  { value: 'output', label: 'Output' },
];

export { StepTabs };
type StepTabsProps = {
  step: JourneyStep;
  className?: string;
  // caps the scrollable body, e.g. the panel height minus its header
  viewportClassName?: string;
  // stretch to fill a fixed-height parent (the side panel)
  fill?: boolean;
};
