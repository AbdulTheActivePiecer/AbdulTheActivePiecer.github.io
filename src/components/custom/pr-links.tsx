import { cn } from '@/lib/utils';
import { prUrl } from '@/lib/format';

function PrLinks({ prs, className }: PrLinksProps) {
  if (prs.length === 0) return null;
  return (
    <span className={cn('inline-flex flex-wrap gap-1', className)}>
      {prs.map((pr) => (
        <a
          key={pr}
          href={prUrl(pr)}
          target="_blank"
          rel="noopener"
          className="text-brand hover:border-brand rounded-full border px-1.5 font-mono text-2xs"
        >
          #{pr}
        </a>
      ))}
    </span>
  );
}

export { PrLinks };
type PrLinksProps = { prs: number[]; className?: string };
