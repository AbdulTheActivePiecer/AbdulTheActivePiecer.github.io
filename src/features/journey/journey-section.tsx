import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';

import { SectionHeading } from '@/components/custom/section-heading';
import { useMediaQuery } from '@/hooks/use-media-query';

import { JOURNEY_SELECT_EVENT } from './journey-events';
import { JourneyEdge, JourneyNode } from './journey-node';
import { journeySteps } from './journey-steps';
import { StepPanel } from './step-panel';
import { StickyNote } from './sticky-note';

function JourneySection() {
  const total = journeySteps.length;
  const wide = useMediaQuery('(min-width: 960px)');
  const reduce = useReducedMotion();
  const nodes = useRef<(HTMLElement | null)[]>([]);
  // -1 means no step is open and the side panel is hidden.
  const [selected, setSelected] = useState(-1);
  const [open, setOpen] = useState<Set<number>>(() => new Set([total - 1]));
  // Steps the visitor has opened turn green, like steps that ran in the builder.
  const [visited, setVisited] = useState<Set<number>>(() => new Set());

  const visit = useCallback((index: number) => {
    if (index < 0) return;
    setVisited((current) =>
      current.has(index) ? current : new Set(current).add(index),
    );
  }, []);

  const select = useCallback(
    (index: number) => {
      setSelected(index);
      visit(index);
    },
    [visit],
  );

  const register = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      nodes.current[index] = el;
    },
    [],
  );

  const activate = (index: number) => {
    if (wide) {
      select(selected === index ? -1 : index);
      return;
    }
    if (!open.has(index)) visit(index);
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  useEffect(() => {
    const onSelect = (event: Event) => {
      const index = (event as CustomEvent<number>).detail;
      if (index < 0) return;
      if (wide) select(index);
      else {
        visit(index);
        setOpen((current) => new Set(current).add(index));
      }
      // wait for the panel or inline body to open, then bring the step to the middle
      window.setTimeout(() => {
        nodes.current[index]?.scrollIntoView({
          behavior: reduce ? 'auto' : 'smooth',
          block: 'center',
        });
      }, 320);
    };
    window.addEventListener(JOURNEY_SELECT_EVENT, onSelect);
    return () => window.removeEventListener(JOURNEY_SELECT_EVENT, onSelect);
  }, [reduce, select, visit, wide]);

  return (
    <section id="journey" className="scroll-mt-16 pt-16 md:pt-20">
      <SectionHeading
        label="The journey"
        title="Four years as a flow"
        description="Every era is a step. Open one to see what it shipped."
      />
      <div className="dot-grid flex items-start overflow-clip rounded-2xl border">
        <div className="relative grid min-w-0 flex-1 justify-items-center px-5 pt-9 pb-12 min-[960px]:px-6">
          {journeySteps.map((step, i) => (
            <Fragment key={step.key}>
              {i > 0 && <JourneyEdge />}
              <JourneyNode
                step={step}
                visited={visited.has(i)}
                selected={wide && selected === i}
                open={open.has(i)}
                inline={!wide}
                nodeRef={register(i)}
                onActivate={() => activate(i)}
              />
            </Fragment>
          ))}
          <StickyNote />
        </div>
        <AnimatePresence initial={false}>
          {wide && selected >= 0 && (
            <motion.div
              key="panel"
              className="sticky top-14 shrink-0 self-start overflow-hidden"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 420, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <StepPanel
                steps={journeySteps}
                index={selected}
                onSelect={select}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export { JourneySection };
