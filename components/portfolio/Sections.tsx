"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Bot, Code2, Palette, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const SKILLS = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Three.js",
  "GSAP", "Framer Motion", "Automation", "WordPress", "SEO", "UI Design",
];

const PROJECTS = [
  {
    title: "Sahyom Studio",
    tag: "Agency website",
    desc: "Modern agency site with services, work showcase and a clean contact flow.",
    href: "/",
  },
  {
    title: "Business Listing Page",
    tag: "Landing page",
    desc: "Fast landing page that helps local businesses get found online.",
    href: "#",
  },
  {
    title: "Exam Practice Platform",
    tag: "Coming soon",
    desc: "Mock tests with timer, ranking and result analytics.",
    href: "#",
  },
];

const SERVICES = [
  { icon: Code2, title: "Web Development", text: "Fast, responsive websites built with Next.js and React." },
  { icon: Bot, title: "Automation", text: "Scripts and workflows that save hours of manual work." },
  { icon: Palette, title: "UI and Animation", text: "Clean design with smooth 3D and scroll animations." },
  { icon: Rocket, title: "Launch and Hosting", text: "Domain, hosting and deployment set up end to end." },
];

export function About() {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-square w-64 sm:w-72">
            <div className="absolute -inset-4 rounded-3xl bg-emerald-500/20 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-emerald-500/30 bg-emerald-500/10">
              {photoOk ? (
                <img
                  src="/me.jpg"
                  alt="Sahil Saroj"
                  className="h-full w-full object-cover"
                  onError={() => setPhotoOk(false)}
                />
              ) : (
                <span className="text-6xl font-extrabold text-emerald-400">SS</span>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-xs tracking-widest text-emerald-400">ABOUT ME</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Building things for the <span className="text-emerald-500">web</span>
          </h2>
          <p className="mt-4 text-white/60">
            I am Sahil, a web developer who loves turning ideas into fast,
            good looking websites and useful tools. I work with Next.js,
            automation and animation to build things that feel smooth and
            actually help people.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Web Developer", "Automation", "Creative Coding"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  const list = [...SKILLS, ...SKILLS];
  return (
    <section className="overflow-hidden border-y border-white/10 py-8">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
      >
        {list.map((s, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80"
          >
            {s}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function Tilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [r, setR] = useState({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        if (!ref.current) return;
        const b = ref.current.getBoundingClientRect();
        const px = (e.clientX - b.left) / b.width - 0.5;
        const py = (e.clientY - b.top) / b.height - 0.5;
        setR({ x: -py * 14, y: px * 14 });
      }}
      onPointerLeave={() => setR({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${r.x}deg) rotateY(${r.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      {children}
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs tracking-widest text-emerald-400">SELECTED WORK</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Projects I am <span className="text-emerald-500">proud of</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <Tilt>
                <a
                  href={p.href}
                  className="group block h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6 transition hover:border-emerald-500/60 hover:shadow-[0_0_40px_-10px_#10b981]"
                >
                  <span className="text-xs text-emerald-400">{p.tag}</span>
                  <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                  <span className="mt-6 inline-block text-sm text-emerald-400 transition group-hover:translate-x-1">
                    View project →
                  </span>
                </a>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs tracking-widest text-emerald-400">WHAT I DO</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Services that <span className="text-emerald-500">deliver</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <s.icon className="text-emerald-400" size={28} />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-white/60">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
      }
