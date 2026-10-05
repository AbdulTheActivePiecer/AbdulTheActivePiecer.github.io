import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

// A tinted icon tile, like the piece logos on an Activepieces step.
function StepIcon({ icon: Icon, tone, size = 'md', className }: StepIconProps) {
  return (
    <span
      className={cn(
        'grid shrink-0 place-items-center',
        SIZE_CLASS[size],
        TONE_CLASS[tone],
        'transition-colors duration-300',
        className,
      )}
    >
      <Icon className={ICON_CLASS[size]} />
    </span>
  );
}

const TONE_CLASS: Record<StepTone, string> = {
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300',
  brand: 'bg-brand-soft text-brand',
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-400/15 dark:text-sky-300',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300',
  emerald:
    'bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-400/15 dark:text-rose-300',
  slate: 'bg-muted text-muted-foreground',
  solid: 'bg-brand text-brand-foreground',
  success: 'bg-success text-card',
};

const SIZE_CLASS: Record<StepIconSize, string> = {
  sm: 'size-6 rounded-md',
  md: 'size-[30px] rounded-md',
  lg: 'size-9 rounded-lg',
  xl: 'size-10 rounded-lg',
};

const ICON_CLASS: Record<StepIconSize, string> = {
  sm: 'size-3.5',
  md: 'size-4',
  lg: 'size-[18px]',
  xl: 'size-5',
};

export { StepIcon };
export type StepTone =
  | 'amber'
  | 'brand'
  | 'sky'
  | 'cyan'
  | 'emerald'
  | 'rose'
  | 'slate'
  | 'solid'
  | 'success';
type StepIconSize = 'sm' | 'md' | 'lg' | 'xl';
type StepIconProps = {
  icon: LucideIcon;
  tone: StepTone;
  size?: StepIconSize;
  className?: string;
};
