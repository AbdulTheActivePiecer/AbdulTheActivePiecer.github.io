import { Fragment } from 'react';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import type { CodeSample } from '@/content/typescript';
import { cn } from '@/lib/utils';

// A tiny highlighter for one known snippet; a full syntax library would be overkill here.
function CodeCard({ sample, viewportClassName }: CodeCardProps) {
  return (
    <figure className="bg-code text-code-foreground border-code-border m-0 min-w-0 overflow-hidden rounded-2xl border">
      <figcaption className="text-code-muted border-code-border flex justify-between gap-3 border-b px-4 py-2.5 font-mono text-xs">
        <span className="truncate">{sample.file}</span>
        <span className="shrink-0">{sample.note}</span>
      </figcaption>
      <ScrollArea viewportClassName={viewportClassName}>
        <pre className="m-0 p-4 font-mono text-sm leading-relaxed">
          <code>
            {tokenize(sample.code).map((token, i) => (
              <Fragment key={i}>
                {token.kind ? (
                  <span className={cn(TOKEN_CLASS[token.kind])}>
                    {token.text}
                  </span>
                ) : (
                  token.text
                )}
              </Fragment>
            ))}
          </code>
        </pre>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </figure>
  );
}

function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  const pattern =
    /(\/\/.*$)|('(?:[^'\\]|\\.)*')|\b(const|return|if|null|true|false)\b|\b(FlowActionType\.\w+)|\b([a-zA-Z_]\w*)(?=\()/gm;
  let last = 0;
  for (const match of code.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) tokens.push({ text: code.slice(last, index) });
    const kind: TokenKind = match[1]
      ? 'comment'
      : match[2]
        ? 'string'
        : match[3]
          ? 'keyword'
          : match[4]
            ? 'value'
            : 'call';
    tokens.push({ text: match[0], kind });
    last = index + match[0].length;
  }
  if (last < code.length) tokens.push({ text: code.slice(last) });
  return tokens;
}

const TOKEN_CLASS: Record<TokenKind, string> = {
  keyword: 'text-code-keyword',
  string: 'text-code-string',
  call: 'text-code-call',
  comment: 'text-code-comment italic',
  value: 'text-code-value',
};

export { CodeCard };
type CodeCardProps = { sample: CodeSample; viewportClassName?: string };
type TokenKind = 'keyword' | 'string' | 'call' | 'comment' | 'value';
type Token = { text: string; kind?: TokenKind };
