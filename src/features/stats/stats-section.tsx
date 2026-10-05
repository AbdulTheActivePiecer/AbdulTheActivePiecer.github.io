import { stats } from '@/content/profile';

import { ContributionHeatmap } from './contribution-heatmap';
import { CountUp } from './count-up';

function StatsSection() {
  return (
    <section aria-label="Numbers">
      <div className="bg-card grid grid-cols-2 overflow-hidden rounded-2xl border md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="grid gap-1 border-r border-b px-5 py-5 even:border-r-0 md:border-b-0 md:even:border-r md:last:border-r-0 [&:nth-child(n+3)]:border-b-0"
            data-index={i}
          >
            <b className="text-3xl leading-none font-semibold tracking-tight md:text-4xl">
              {stat.value !== undefined ? (
                <CountUp value={stat.value} />
              ) : (
                stat.display
              )}
            </b>
            <span className="text-muted-foreground text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
      <ContributionHeatmap />
    </section>
  );
}

export { StatsSection };
