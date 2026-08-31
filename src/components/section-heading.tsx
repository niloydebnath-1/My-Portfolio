"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag: string;
  title: string;
  highlight: string;
}

export default function SectionHeading({
  tag,
  title,
  highlight,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="inline-block text-xs tracking-[4px] uppercase text-cyan-400 font-mono mb-4 opacity-70"
      >
        {tag}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
      >
        {title} <em className="not-italic gradient-text">{highlight}</em>
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-16 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-5 origin-center"
      />
    </div>
  );
}
