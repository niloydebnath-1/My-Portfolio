"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dniloy134@gmail.com",
    href: "mailto:dniloy134@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1893 567193",
    href: "tel:+8801893567193",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sector-10, Uttara, Dhaka-1230",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/niloydebnath-1",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/niloy-debnath-141929365/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:dniloy134@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-surface)]">
      <div className="section-wrapper">
        <SectionHeading
          tag="// Get In Touch"
          title="Contact"
          highlight="Me"
        />

        <div className="grid md:grid-cols-5 gap-8 mt-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Let&apos;s work together
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach
                out!
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={info.href}
                    className="glass-card p-4 flex items-center gap-4 group cursor-pointer block"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 flex items-center justify-center border border-cyan-500/10 shrink-0">
                      <info.icon size={18} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider">
                        {info.label}
                      </div>
                      <div className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon width={18} height={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form
              action={`https://formsubmit.co/dniloy134@gmail.com`}
              method="POST"
              className="glass-card p-6 md:p-8 space-y-5"
            >
              {/* Honeypot & redirect */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="Portfolio Contact Form"
              />
              <input type="text" name="_honey" className="hidden" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs text-gray-500 uppercase tracking-wider block mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/40 focus:bg-white/5 transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs text-gray-500 uppercase tracking-wider block mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/40 focus:bg-white/5 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-xs text-gray-500 uppercase tracking-wider block mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/40 focus:bg-white/5 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs text-gray-500 uppercase tracking-wider block mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/40 focus:bg-white/5 transition-all duration-300 resize-none"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send size={16} />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
