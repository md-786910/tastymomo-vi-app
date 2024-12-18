import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity: number;
}

export default function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
  const { scrollY } = useScroll();
  const springConfig = { damping: 50, stiffness: 400 };
  
  const y = useSpring(
    useTransform(scrollY, [0, 1000], [0, baseVelocity * 150]),
    springConfig
  );

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="flex whitespace-nowrap flex-nowrap items-center gap-4"
        style={{ x: y }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex whitespace-nowrap flex-nowrap items-center gap-4"
        style={{ x: y }}
      >
        {children}
      </motion.div>
    </div>
  );
}