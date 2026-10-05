import { useMemo } from 'react';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import heatmap from '@/content/heatmap.json';
import { heatmapSummary } from '@/content/profile';
import { cn } from '@/lib/utils';

function ContributionHeatmap() {
  const { cells, years, columns } = useMemo(() => buildCells(), []);

  return (
    <div className="bg-card mt-3.5 rounded-2xl border px-5 py-4">
      <div className="text-muted-foreground mb-3 flex flex-wrap justify-between gap-3 text-sm">
        <span>
          <strong className="text-foreground font-semibold">
            {heatmapSummary.activeDays} days
          </strong>{' '}
          with commits since {heatmapSummary.since}, when the code went public
        </span>
        <span className="font-mono">
          Longest streak · {heatmapSummary.longestStreak} days
        </span>
      </div>
      <ScrollArea className="pb-2.5">
        <div
          role="img"
          aria-label={`Contribution heatmap, ${heatmapSummary.start} to ${heatmapSummary.end}`}
          className="grid w-max grid-flow-col grid-rows-7 gap-0.5"
          style={{ gridAutoColumns: CELL }}
        >
          {cells.map((cell) => (
            <i
              key={cell.date}
              title={`${cell.date}: ${cell.count}`}
              className={cn('block rounded-[2px]', LEVEL_CLASS[cell.level])}
              style={{ width: CELL, height: CELL }}
            />
          ))}
        </div>
        <div
          className="text-muted-foreground relative mt-1.5 h-3.5 font-mono text-2xs"
          style={{ width: columns * (CELL + GAP) }}
        >
          {years.map((y) => (
            <span
              key={y.year}
              className="absolute"
              style={{ left: y.column * (CELL + GAP) }}
            >
              {y.year}
            </span>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

function buildCells() {
  const counts = heatmap as Record<string, number>;
  const cells: Cell[] = [];
  const years: { year: number; column: number }[] = [];
  const day = new Date(`${heatmapSummary.start}T00:00:00Z`);
  const end = new Date(`${heatmapSummary.end}T00:00:00Z`);
  let column = 0;
  let lastYear: number | null = null;
  while (day <= end) {
    const date = day.toISOString().slice(0, 10);
    const count = counts[date] ?? 0;
    cells.push({ date, count, level: levelFor(count) });
    if (day.getUTCDay() === 0) {
      const year = day.getUTCFullYear();
      if (lastYear === null || (year !== lastYear && day.getUTCDate() <= 7)) {
        years.push({ year, column });
        lastYear = year;
      }
      column++;
    }
    day.setUTCDate(day.getUTCDate() + 1);
  }
  return { cells, years, columns: column };
}

function levelFor(count: number): Level {
  if (count === 0) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 10) return 3;
  return 4;
}

const CELL = 9;
const GAP = 2;

const LEVEL_CLASS: Record<Level, string> = {
  0: 'bg-canvas',
  1: 'bg-brand/30',
  2: 'bg-brand/55',
  3: 'bg-brand/80',
  4: 'bg-brand',
};

export { ContributionHeatmap };
type Level = 0 | 1 | 2 | 3 | 4;
type Cell = { date: string; count: number; level: Level };
