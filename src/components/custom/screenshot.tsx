import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { Screenshot as ScreenshotData } from '@/content/journey';
import { assetUrl } from '@/lib/format';
import { cn } from '@/lib/utils';

function Screenshot({ shot, className }: ScreenshotProps) {
  const src = assetUrl(shot.src);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            'bg-canvas block w-full cursor-zoom-in overflow-hidden rounded-lg border text-left',
            className,
          )}
          aria-label={`Open screenshot: ${shot.alt}`}
        >
          <img
            src={src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            loading="lazy"
            className="block aspect-[4/3] h-auto w-full object-cover"
          />
          <span className="bg-card text-muted-foreground block border-t px-2.5 py-2 font-mono text-xs">
            {shot.alt}
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] w-[94vw] max-w-6xl gap-0 overflow-hidden p-0 sm:max-w-6xl">
        <img
          src={src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          className="bg-canvas block max-h-[calc(92vh-3rem)] w-full object-contain"
        />
        <DialogTitle className="text-muted-foreground px-4 py-3 font-mono text-sm font-normal">
          {shot.alt}
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}

export { Screenshot };
type ScreenshotProps = { shot: ScreenshotData; className?: string };
