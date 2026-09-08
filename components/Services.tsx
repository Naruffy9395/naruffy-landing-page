"use client";

import { motion } from "framer-motion";
import { Code2, Bot, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, modern websites built for conversion and performance.",
    delay: 0,
  },
  {
    icon: Bot,
    title: "Automation & AI",
    desc: "Custom bots, workflows, and AI agents that save you hours.",
    delay: 0.1,
  },
  {
    icon: Palette,
    title: "Branding",
    desc: "Identity systems that make your business instantly recognizable.",
    delay: 0.2,
  },
  {
    icon: TrendingUp,
    title: "Growth Systems",
    desc: "Marketing infrastructure that turns visitors into customers.",
    delay: 0.3,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            What we do
          </p>
          <h2 className="text-section font-bold tracking-tight text-balance">
            Services built for momentum
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: service.delay,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card p-7 transition-colors hover:border-accent/40"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition-opacity duration-500 group-hover:bg-accent/10" />
                <div className="relative mb-5 inline-flex rounded-xl bg-accent/10 p-3 text-accent ring-1 ring-accent/20 transition-all group-hover:scale-110 group-hover:bg-accent/15">
                  <Icon size={24} />
                </div>
                <h3 className="relative mb-2 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-muted">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
