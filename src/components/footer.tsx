"use client";

import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[var(--color-bg)]">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo + copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white tracking-tight"
            >
              Niloy<span className="gradient-text">.</span>
            </a>
            <p className="text-xs text-gray-600 mt-1.5 flex items-center gap-1 justify-center md:justify-start">
              © {new Date().getFullYear()} Niloy Debnath. Built with{" "}
              <Heart size={10} className="text-red-500 fill-red-500" /> using
              Next.js
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/niloydebnath-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon width={18} height={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/niloy-debnath-141929365/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon width={18} height={18} />
            </a>
            <a
              href="mailto:dniloy134@gmail.com"
              className="text-gray-500 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
