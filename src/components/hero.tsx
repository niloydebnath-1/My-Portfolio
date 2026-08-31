"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { projects } from "@/components/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const stats = [
    { value: `${projects.length}+`, label: "Projects Built" },
    { value: "15+", label: "Tools Learned" },
    { value: "∞", label: "Curiosity" },
  ];
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center px-5 md:px-16 pt-28 pb-8 overflow-hidden"
    >
      {/* Background effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(6,182,212,0.07) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(59,130,246,0.05) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 pointer-events-none grid-bg" />

      {/* Main content */}
      <div className="relative z-10 max-w-xl mb-10 md:mb-0">
        {/* Status badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-cyan-400/8 border border-cyan-400/20 rounded-full px-4 py-2 text-sm text-cyan-400 font-mono mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Heading */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-gray-400 text-base md:text-lg mb-2 font-light">
            Hi, I&apos;m
          </p>
          <h1 className="font-[family-name:var(--font-space-grotesk)] font-extrabold text-white leading-[1.05] tracking-tight mb-2 text-[clamp(40px,7vw,58px)]">
            Niloy Debnath
          </h1>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-extrabold leading-[1.05] tracking-tight text-[clamp(32px,5.5vw,48px)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Full Stack
            </span>{" "}
            <span className="text-white">Developer</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-base md:text-[17px] text-gray-400 max-w-lg leading-relaxed font-light"
        >
          Computer Science and Engineering student passionate about building
          scalable web applications, solving real-world problems, and creating
          user-focused software solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap gap-3 items-center"
        >
          <Button asChild>
            <a href="#projects">
              View Projects <ArrowRight size={16} />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" download="Resume_Niloy_Debnath.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="https://github.com/niloydebnath-1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon width={18} height={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/niloy-debnath-141929365/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon width={18} height={18} />
          </a>
          <a
            href="mailto:dniloy134@gmail.com"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      </div>

      {/* Stats cards — right side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="hidden md:flex md:flex-col absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 gap-5"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card px-8 py-6 text-center min-w-[140px] hover:-translate-x-1"
          >
            <div className="font-[family-name:var(--font-space-grotesk)] text-4xl font-extrabold gradient-text leading-none">
              {stat.value}
            </div>
            <div className="text-xs text-gray-500 mt-2 uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Mobile stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex md:hidden gap-3 mb-5 w-full"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card flex-1 px-3 py-4 text-center"
          >
            <div className="font-[family-name:var(--font-space-grotesk)] text-2xl font-extrabold gradient-text leading-none">
              {stat.value}
            </div>
            <div className="text-[10px] text-gray-500 mt-1.5 uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute right-6 top-[35%] items-center gap-2 text-[10px] tracking-widest uppercase text-gray-600 font-mono [writing-mode:vertical-rl]">
        <div className="w-px h-16 origin-top bg-gradient-to-b from-cyan-500 to-transparent" />
        Scroll to explore
      </div>
    </section>
  );
}
