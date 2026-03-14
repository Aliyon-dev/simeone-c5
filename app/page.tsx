"use client"

import Link from "next/link"
import Script from "next/script"
import { motion } from "framer-motion"
import { Rocket, Orbit, Sparkles, Telescope } from "lucide-react"

import { CosmicScene } from "@/components/cosmic-scene"

const missions = [
  {
    title: "Orbit Commerce",
    summary: "Redesigned a checkout constellation for faster conversion and lower drop-off.",
    impact: "+34% conversion",
  },
  {
    title: "Nebula Studio",
    summary: "Built a modular design system that aligned product and marketing galaxies.",
    impact: "2.4x faster delivery",
  },
  {
    title: "Stellar Analytics",
    summary: "Crafted a data storytelling dashboard with immersive interactions.",
    impact: "58% better feature adoption",
  },
]

const timeline = [
  "Discovery through deep-space user interviews",
  "Wireframing trajectories across flows and states",
  "Prototype launches with motion-rich UI systems",
  "Post-launch telemetry and iterative optimization",
]

export default function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#040612] text-slate-100">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(146,126,255,.28),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(74,195,255,.2),transparent_34%),radial-gradient(circle_at_50%_80%,rgba(76,93,255,.18),transparent_42%)]" />
      <CosmicScene />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-20 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.2em] text-cyan-200"
        >
          <Sparkles className="h-4 w-4" /> Galactic Product Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl"
        >
          Building space-themed digital experiences with bold motion and cosmic precision.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 max-w-2xl text-lg text-slate-300 md:text-xl"
        >
          I design future-facing products where storytelling, interaction, and performance align like constellations. This portfolio was fully refreshed with cinematic visuals, animated depth, and a modern space aesthetic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="#missions" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300">
            Explore Missions
          </Link>
          <Link href="#contact" className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
            Contact Ground Control
          </Link>
        </motion.div>
      </section>

      <section id="missions" className="relative mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
        <div className="mb-8 flex items-center gap-3 text-cyan-200">
          <Rocket className="h-5 w-5" />
          <h2 className="text-2xl font-bold md:text-4xl">Featured Missions</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {missions.map((mission, index) => (
            <motion.article
              key={mission.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{mission.impact}</p>
              <h3 className="mt-3 text-2xl font-bold">{mission.title}</h3>
              <p className="mt-3 text-slate-300">{mission.summary}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0a1124] to-[#050812] p-8"
        >
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-cyan-200">
            <Orbit className="h-5 w-5" /> Navigation Process
          </h3>
          <ul className="space-y-4 text-slate-300">
            {timeline.map((step) => (
              <li key={step} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                {step}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          id="contact"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-cyan-300/25 bg-cyan-400/10 p-8"
        >
          <h3 className="mb-5 flex items-center gap-2 text-2xl font-bold">
            <Telescope className="h-5 w-5 text-cyan-200" /> Ready for Launch?
          </h3>
          <p className="text-slate-200">
            Let&apos;s co-create your next space-grade digital experience—crafted with strategy, motion, and visual gravity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-white/30 px-4 py-2">UX Strategy</span>
            <span className="rounded-full border border-white/30 px-4 py-2">Interaction Design</span>
            <span className="rounded-full border border-white/30 px-4 py-2">Creative Direction</span>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
