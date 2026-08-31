"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, BookOpen, Rocket } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const highlights = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Analytical thinker who enjoys breaking down complex challenges into elegant solutions.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, well-structured code following best practices and design patterns.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Always exploring new technologies, frameworks, and methodologies to stay current.",
  },
  {
    icon: Rocket,
    title: "Building Apps",
    description:
      "Transforming ideas into functional, user-focused applications with modern tech stacks.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[var(--color-surface)]">
      <div className="section-wrapper">
        <SectionHeading tag="// Who I Am" title="About" highlight="Me" />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mt-12">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-gray-400 text-base leading-relaxed">
              I am a Computer Science and Engineering student with hands-on
              experience in full-stack web development. I enjoy transforming
              ideas into functional applications using modern technologies.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              My interests include frontend development, backend systems,
              database management, API development, and software engineering. I
              am passionate about crafting beautiful user interfaces and building
              robust server-side architectures.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              With a solid foundation in object-oriented programming, data
              structures, algorithms, and problem solving, I strive to build
              practical and user-focused software solutions that make a real
              difference.
            </p>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-sm text-gray-500">
                  <strong className="text-white font-medium">Name:</strong>{" "}
                  Niloy Debnath
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-sm text-gray-500">
                  <strong className="text-white font-medium">Location:</strong>{" "}
                  Dhaka, BD
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-sm text-gray-500">
                  <strong className="text-white font-medium">Email:</strong>{" "}
                  dniloy134@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-sm text-gray-500">
                  <strong className="text-white font-medium">Study:</strong> CSE
                  @ IUBAT
                </span>
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 group"
              >
                <item.icon
                  size={28}
                  className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-white font-semibold text-sm mb-1.5">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
