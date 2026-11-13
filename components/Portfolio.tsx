"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, MessageSquare, Phone } from "lucide-react";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const NUMBER = "919559124698";
const NAME = "Sahil Saroj";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-[#070b09] text-white overflow-x-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070b09]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-3xl font-bold tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Sahil<span className="text-emerald-500">.</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-3 left-1/2 z-50 flex w-[92%] max-w-3xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
        <a href="#home" className="font-bold">
          Sahil<span className="text-emerald-500">.</span>
        </a>
        <div className="flex gap-5 text-sm text-white/70">
          <a href="#home" className="hover:text-emerald-400">Home</a>
          <a href="#contact" className="hover:text-emerald-400">Contact</a>
        </div>
      </nav>

      <section id="home" className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Scene3D />
        </div>

        <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.p
            className="mb-4 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs tracking-widest text-emerald-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? 10 : 0 }}
            transition={{ delay: 0.3 }}
          >
            WEB DEVELOPER · AUTOMATION
          </motion.p>

          <h1 className="flex flex-wrap justify-center text-5xl font-extrabold leading-tight sm:text-7xl">
            {NAME.split("").map((ch, i) => (
              <motion.span
                key={i}
                className={i >= 6 ? "text-emerald-500" : ""}
                initial={{ opacity: 0, y: 50 }}
                animate={loading ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-md text-base text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: loading ? 0 : 1 }}
            transition={{ delay: 1.4 }}
          >
            Websites, automation and smart tools built with clarity and
            performance.
          </motion.p>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Let&apos;s <span className="text-emerald-500">talk</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-white/60">
          Koi project ya idea hai? Seedha message kar.
        </p>

        <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3">
          <a
            href={`https://wa.me/${NUMBER}?text=Hi%20Sahil%2C%20I%20saw%20your%20portfolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            <MessageCircle size={20} /> WhatsApp
          </a>
          <a
            href={`sms:+${NUMBER}`}
            className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 transition hover:border-emerald-500"
          >
            <MessageSquare size={20} /> SMS
          </a>
          <a
            href={`tel:+${NUMBER}`}
            className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 transition hover:border-emerald-500"
          >
            <Phone size={20} /> +91 95591 24698
          </a>
        </div>

        <p className="mt-16 text-xs text-white/30">
          © 2026 Sahil Saroj
        </p>
      </section>
    </main>
  );
}
