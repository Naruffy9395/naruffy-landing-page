"use client";

import { motion } from "framer-motion";
import images from "@/app/images-config";

const projects = [
  {
    title: "Project One",
    tag: "Landing page & automation",
    gradient: "from-emerald-900 via-bg-card to-bg-card",
    image: images.projects.webdev,
  },
  {
    title: "Project Two",
    tag: "WhatsApp AI chatbot",
    gradient: "from-teal-900 via-bg-card to-bg-card",
    image: images.projects.whatsapp,
  },
  {
    title: "Project Three",
    tag: "Telegram automation suite",
    gradient: "from-green-900 via-bg-card to-bg-card",
    image: images.projects.telegram,
  },
];
  {
    title: "Project Three",
    tag: "Telegram automation suite",
    gradient: "from-green-900 via-bg-card to-bg-card",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Selected work
          </p>
          <h2 className="text-section font-bold tracking-tight text-balance">
            Projects we&apos;ve shipped
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div
                className={`relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${project.gradient} transition-all duration-500 group-hover:border-accent/40`}
              >
                <div className="absolute inset-0 grain opacity-50" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                  >
                    View case study →
                  </motion.div>
                </div>
                {/* Decorative number */}
                <span className="absolute bottom-4 right-5 text-5xl font-bold text-white/5">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-muted">{project.tag}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
