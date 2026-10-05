import { ArrowUpRight } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';

import { PrLinks } from '@/components/custom/pr-links';
import { Reveal } from '@/components/custom/reveal';
import { SectionHeading } from '@/components/custom/section-heading';
import { type SideQuest, sideQuests } from '@/content/side-quests';
import { prsUrl } from '@/lib/format';

function SideQuestsSection() {
  return (
    <section id="quests" className="scroll-mt-16 pt-16 md:pt-20">
      <SectionHeading label="Side quests" title="PRs I'm proud of" />
      <div className="masonry sm:grid-cols-2 lg:grid-cols-3">
        {sideQuests.map((quest, i) => (
          <QuestTile key={quest.title} quest={quest} delay={(i % 3) * 0.05} />
        ))}
      </div>
    </section>
  );
}

// Masonry: browsers with `display: grid-lanes` stack the cards natively.
// Elsewhere rows are 4px tall and each tile spans as many rows as its card is
// tall, so short cards don't stretch to match long ones. Auto-placement drops
// each tile into the first column with room, keeping the order left to right.
function QuestTile({ quest, delay }: { quest: SideQuest; delay: number }) {
  const ref = useRef<HTMLElement>(null);
  const [span, setSpan] = useState<number>();

  useLayoutEffect(() => {
    const card = ref.current;
    if (!card || NATIVE_MASONRY) return;
    const measure = () => setSpan(Math.ceil((card.offsetHeight + GAP) / ROW));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-w-0"
      style={span ? { gridRowEnd: `span ${span}` } : undefined}
    >
      <Reveal delay={delay}>
        <article
          ref={ref}
          className="bg-card hover:border-brand has-focus-visible:border-brand relative grid content-start gap-1.5 rounded-xl border px-4 py-3.5 transition hover:-translate-y-0.5"
        >
          <span className="text-muted-foreground font-mono text-xs">
            {quest.date}
          </span>
          <h3 className="text-base leading-snug font-semibold">
            {quest.prs.length > 0 ? (
              // stretched link: the whole card opens the PRs behind it
              <a
                href={prsUrl(quest.prs)}
                target="_blank"
                rel="noopener"
                className="group/link outline-none after:absolute after:inset-0 after:rounded-xl"
              >
                {quest.title}
                <ArrowUpRight className="text-muted-foreground group-hover/link:text-brand ml-1 inline size-4 align-text-top transition-colors" />
              </a>
            ) : (
              quest.title
            )}
          </h3>
          <p className="text-muted-foreground text-sm">{quest.description}</p>
          <PrLinks prs={quest.prs} className="relative" />
        </article>
      </Reveal>
    </div>
  );
}

const NATIVE_MASONRY = CSS.supports('display', 'grid-lanes');
const ROW = 4;
const GAP = 12;

export { SideQuestsSection };
