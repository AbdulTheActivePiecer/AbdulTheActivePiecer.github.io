import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import type { Era } from '@/content/journey';

// Mirrors the Activepieces data selector's "friendly view" of a step output.
function StepOutput({ era, duration }: { era: Era; duration: string }) {
  return (
    <ScrollArea
      className="bg-canvas min-w-0 rounded-lg border font-mono text-xs leading-7"
      aria-label="Step output"
    >
      <div className="px-3 py-2">
        <div className="text-muted-foreground mb-1 flex justify-between gap-2.5 border-b pb-1">
          <span>output · step {era.id}</span>
          <b className="text-success font-medium">✓ Success</b>
        </div>
        <Row glyph="#" name="prs_merged" value={String(era.prs)} />
        <Row glyph="⏱" name="duration" value={duration} />
        <Row glyph="≡" name="shipped" note={`${era.milestones.length} items`} />
        {era.milestones.map((m, i) => (
          <div key={m.title} className="flex gap-1.5 pl-4 whitespace-nowrap">
            <span className="text-muted-foreground">{i}</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-brand">"{m.title}"</span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

function Row({ glyph, name, value, note }: RowProps) {
  return (
    <div className="flex gap-1.5 whitespace-nowrap">
      <span className="text-muted-foreground">{glyph}</span>
      <span>{name}</span>
      <span className="text-muted-foreground">:</span>
      {value && <span className="text-brand">{value}</span>}
      {note && <span className="text-muted-foreground">{note}</span>}
    </div>
  );
}

export { StepOutput };
type RowProps = { glyph: string; name: string; value?: string; note?: string };
