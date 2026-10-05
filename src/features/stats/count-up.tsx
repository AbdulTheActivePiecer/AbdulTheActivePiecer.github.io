import { animate, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';

function CountUp({ value, duration = 0.9, suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current?.firstElementChild;
    if (!el || !inView || reduce) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (v) => {
        el.textContent = Math.round(v).toLocaleString('en-US') + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration, suffix]);

  const final = value.toLocaleString('en-US') + suffix;
  // start from 0 when it will animate, so it never shows the total, drops to 0
  // and climbs again
  return (
    <span ref={ref} className="tabular" aria-label={final}>
      <span aria-hidden>{reduce ? final : `0${suffix}`}</span>
    </span>
  );
}

export { CountUp };
type CountUpProps = { value: number; duration?: number; suffix?: string };
