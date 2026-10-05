import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

function SectionHeading({
  label,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-6 flex flex-wrap items-end justify-between gap-4',
        className,
      )}
    >
      <div className="grid gap-1.5">
        <span className="text-brand font-mono text-xs font-medium tracking-wide uppercase">
          {label}
        </span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground max-w-prose">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export { SectionHeading };
type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};
