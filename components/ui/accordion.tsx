"use client";

import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
}

interface AccordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isExpanded,
  onToggle,
}) => {
  const cardVariants: Variants = {
    collapsed: {
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    expanded: {
      height: "auto",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const contentVariants: Variants = {
    collapsed: { opacity: 0 },
    expanded: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  };

  return (
    <motion.div
      className="bg-blackbackdrop-blur-sm h-[90px] cursor-pointer select-none overflow-hidden rounded-xl border border-[#9f5cf643] transition-colors duration-300 hover:border-[#9f5cf65b] dark:[box-shadow:0_-20px_80px_-20px_#9f5cf643_inset] sm:h-[70px]"
      layoutId={`accordion-${title}`}
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between p-5">
        <h2 className="flex-1 text-base font-medium md:text-left">{title}</h2>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="ml-4 flex-shrink-0"
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
      <motion.div
        className="overflow-hidden px-5 pb-5"
        variants={contentVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        <p className="text-sm leading-relaxed text-stone-400 sm:text-base">
          {content}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function Accordion({ items }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
