"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Projects delivered" },
  { value: "5yr", label: "Building software" },
  { value: "1day", label: "Average response time" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            The Studio
          </p>
          <h2 className="text-section font-bold tracking-tight text-balance">
            Built solo. Shipped fast.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted text-balance">
            Sahyom is a solo-run studio focused on building practical software,
            automation, and AI systems for businesses that want to move fast
            without hiring a full team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="rounded-2xl border border-border bg-bg-card p-8 text-center"
            >
              <div className="text-4xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
