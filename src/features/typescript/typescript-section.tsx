import { Code2 } from 'lucide-react';

import { Reveal } from '@/components/custom/reveal';
import { SectionHeading } from '@/components/custom/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  codeSample,
  typescriptPoints,
  typescriptStack,
} from '@/content/typescript';

import { CodeCard } from './code-card';

function TypescriptSection() {
  return (
    <section id="typescript" className="scroll-mt-16 pt-16 md:pt-20">
      <SectionHeading
        label="TypeScript"
        title="One language, from UI to execution"
        description="Almost everything I've shipped at Activepieces is TypeScript, on both sides of the wire."
      />
      <Reveal className="grid gap-3">
        <div className="grid gap-2.5 sm:grid-cols-2">
          {typescriptPoints.map((point) => (
            <div
              key={point.title}
              className="bg-card grid content-start gap-0.5 rounded-xl border px-3.5 py-3"
            >
              <b className="text-lg font-semibold tracking-tight">
                {point.title}
              </b>
              <span className="text-muted-foreground text-sm">
                {point.detail}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {typescriptStack.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="text-muted-foreground font-mono font-normal"
            >
              {item}
            </Badge>
          ))}
          <CodeDialog />
        </div>
      </Reveal>
    </section>
  );
}

function CodeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto">
          <Code2 />
          Read real code from the flow builder
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[94vw] max-w-3xl gap-3 sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>How a flow becomes the drawing on screen</DialogTitle>
          <DialogDescription>
            Verbatim from the Activepieces repo, mostly my lines per git blame.
            It walks the flow step by step and recurses into loops, routers and
            error branches.
          </DialogDescription>
        </DialogHeader>
        <CodeCard
          sample={codeSample}
          viewportClassName="max-h-[65vh] overscroll-y-contain"
        />
      </DialogContent>
    </Dialog>
  );
}

export { TypescriptSection };
