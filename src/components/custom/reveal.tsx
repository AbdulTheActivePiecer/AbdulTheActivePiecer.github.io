import { motion } from 'motion/react';
import type { ReactNode } from 'react';

function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

export { Reveal };
type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};
