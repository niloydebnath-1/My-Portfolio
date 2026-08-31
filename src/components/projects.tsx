"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";

export const projects = [
  {
    title: "Niloy Mart",
    category: "Full Stack E-commerce Application",
    description:
      "A complete full-stack e-commerce platform with secure authentication, product browsing, shopping cart, checkout system, order history, and admin dashboard.",
    image: "/niloy-mart.jpg",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "User Authentication",
      "Product Browsing",
      "Shopping Cart",
      "Checkout",
      "Order History",
      "Admin Dashboard",
    ],
    github: "https://github.com/niloydebnath-1/Niloy-Mart.git",
    demo: "#",
  },
  {
    title: "Find Home",
    category: "House Rental Platform",
    description:
      "A responsive house rental platform where users can explore and browse different homes available for rent with an intuitive user interface.",
    image: "/find-home.jpg",
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Property Browsing",
      "Responsive Design",
      "Intuitive UI",
      "Search & Filter",
    ],
    github: "https://github.com/niloydebnath-1/Find-Home.git",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrapper">
        <SectionHeading
          tag="// What I've Built"
          title="Featured"
          highlight="Projects"
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-52 md:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131d] via-transparent to-transparent" />

                {/* Category tag */}
                <div className="absolute top-4 left-4 text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded-full px-3 py-1 font-mono backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-white font-[family-name:var(--font-space-grotesk)] text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[10px] uppercase tracking-wider text-gray-600 bg-white/3 border border-white/5 rounded-full px-2.5 py-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-cyan-400/80 bg-cyan-400/8 border border-cyan-400/15 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon width={14} height={14} />
                      Source Code
                    </a>
                  </Button>
                  {project.demo !== "#" && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
