"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MousePointer2, Sparkles, Waves, Zap } from "lucide-react"

const showcaseCards = [
  {
    title: "Pulse Interactions",
    description: "Snappy hover states and progressive motion that feels alive without distracting from content.",
  },
  {
    title: "Neon Storytelling",
    description: "Layered gradients, glassmorphism cards, and flowing lines that frame each section.",
  },
  {
    title: "Performance First",
    description: "Built with lightweight effects and reusable patterns so the interface scales cleanly.",
  },
]

const stats = [
  { value: "180ms", label: "Micro-interaction response" },
  { value: "98", label: "Lighthouse accessibility target" },
  { value: "24/7", label: "Visual brand consistency" },
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(57,255,20,0.2),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(57,255,20,0.15),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(30,30,30,0.85),transparent_60%)]" />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />
      <div className="neon-orb neon-orb-left" />
      <div className="neon-orb neon-orb-right" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex w-fit items-center gap-2 rounded-full border border-[#39ff14]/40 bg-[#39ff14]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#b7ffab]"
        >
          <Sparkles className="h-3.5 w-3.5" /> Inspired by Appy Camper style motion
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.75 }}
          className="max-w-4xl text-5xl font-black leading-[0.92] tracking-tight md:text-7xl"
        >
          Neon black digital experiences with motion that feels electric.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          className="mt-7 max-w-2xl text-lg text-zinc-300"
        >
          A bold landing concept with energetic transitions, glowing accents, and modern typography. Designed to capture the playful, high-craft animation energy you liked—while keeping the palette strictly neon green and black.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.75 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button className="group inline-flex items-center gap-2 rounded-full border border-[#39ff14]/50 bg-[#39ff14] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(57,255,20,0.6)]">
            Start a Project <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#39ff14]/50 hover:text-[#d4ffc9]">
            <MousePointer2 className="h-4 w-4" /> View Motion Demo
          </button>
        </motion.div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-14 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {showcaseCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 shadow-[inset_0_0_0_1px_rgba(57,255,20,0.06)] backdrop-blur"
            >
              <h3 className="text-2xl font-bold text-[#dcffd4] transition group-hover:text-[#39ff14]">{card.title}</h3>
              <p className="mt-3 text-zinc-400">{card.description}</p>
              <div className="mt-5 h-1 w-16 rounded-full bg-[#39ff14]/40 transition-all group-hover:w-24 group-hover:bg-[#39ff14]" />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
        <div className="rounded-3xl border border-[#39ff14]/35 bg-zinc-950/60 p-8 md:p-10">
          <div className="mb-8 flex items-center gap-2 text-[#b6ffa8]">
            <Waves className="h-5 w-5" />
            <p className="text-sm uppercase tracking-[0.2em]">Neon System Signals</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-zinc-800 bg-black/60 p-6"
              >
                <p className="text-3xl font-extrabold text-[#39ff14] md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-zinc-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex items-center gap-2 text-sm text-zinc-300"
          >
            <Zap className="h-4 w-4 text-[#39ff14]" />
            This concept is ready to expand into sections like Services, Work, and Contact with matching animation language.
          </motion.div>
        </div>
      </section>
    </main>
  )
}
