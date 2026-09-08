"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-glow blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2 className="text-section font-bold tracking-tight text-balance">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted text-balance">
          Tell me about your project and I&apos;ll get back within a day.
        </p>

        <motion.a
          href="mailto:hello@sahyom.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-black transition-shadow hover:shadow-[0_0_50px_rgba(16,185,129,0.4)]"
        >
          <Mail size={20} />
          Email me
          <ArrowUpRight
            size={20}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
