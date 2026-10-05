import { useCallback, useEffect, useRef, useState } from 'react';

import { profile } from '@/content/profile';

function useCopyEmail() {
  const [copied, setCopied] = useState<string | null>(null);
  const emailRef = useRef<HTMLElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied('Copied');
    } catch {
      const el = emailRef.current;
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const selection = getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setCopied('Selected, press Ctrl+C');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(null), 1800);
  }, []);

  return { copied, copy, emailRef };
}

export { useCopyEmail };
