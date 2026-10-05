import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

// A hidden note pinned to the canvas.
function StickyNote() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="absolute right-5 bottom-6">
      <button
        type="button"
        aria-label="A note left on the canvas"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="bg-note block size-6.5 rotate-6 cursor-pointer rounded-[3px_3px_10px_3px] shadow-md transition-transform hover:scale-110 hover:rotate-0 focus-visible:scale-110 focus-visible:rotate-0"
      />
      <div
        hidden={!open}
        className={cn(
          'bg-note text-note-foreground absolute right-0 bottom-9 w-[min(280px,78vw)] -rotate-[1.5deg] rounded-[4px_4px_14px_4px] px-4 pt-4 pb-3.5 text-sm leading-relaxed shadow-xl',
        )}
      >
        {NOTE}
        <small className="mt-2.5 block font-mono text-2xs opacity-75">
          Note · pinned to the canvas
        </small>
      </div>
    </div>
  );
}

const NOTE =
  'Most of engineering is communication: a clear PR description, a question asked early, a review that explains the why. Clean code is the way you communicate with your future self and colleagues.';

export { StickyNote };
