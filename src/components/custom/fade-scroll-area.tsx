import { type ReactNode, useLayoutEffect, useRef, useState } from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

// A vertical ScrollArea that keeps wheel scrolling inside it (no chaining to
// the page at the ends) and fades its bottom edge while more content is below.
function FadeScrollArea({
  children,
  className,
  viewportClassName,
}: FadeScrollAreaProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [more, setMore] = useState(false);

  useLayoutEffect(() => {
    const viewport = rootRef.current?.querySelector<HTMLElement>(
      '[data-slot="scroll-area-viewport"]',
    );
    if (!viewport) return;
    const update = () =>
      setMore(
        viewport.scrollTop + viewport.clientHeight < viewport.scrollHeight - 4,
      );
    update();
    viewport.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    if (viewport.firstElementChild)
      observer.observe(viewport.firstElementChild);
    return () => {
      viewport.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, []);

  return (
    <ScrollArea
      ref={rootRef}
      className={className}
      viewportClassName={cn('overscroll-y-contain', viewportClassName)}
    >
      {children}
      <div
        aria-hidden
        className={cn(
          'from-card pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t to-transparent transition-opacity',
          more ? 'opacity-100' : 'opacity-0',
        )}
      />
    </ScrollArea>
  );
}

export { FadeScrollArea };
type FadeScrollAreaProps = {
  children: ReactNode;
  className?: string;
  viewportClassName?: string;
};
