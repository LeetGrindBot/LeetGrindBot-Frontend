"use client";

import { motion } from "motion/react";

type FadeUpType = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeUp({ children, delay = 0 }: FadeUpType) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
