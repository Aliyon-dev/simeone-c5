"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import type { Project } from "@/types/portfolio"
import { projects as defaultProjects } from "@/data/portfolio-data"

interface WorkSectionProps {
  title?: string
  subtitle?: string
  /** Pass a custom project list or omit to use the default one */
  projects?: Project[]
}

export function WorkSection({
  title = "Selected Work",
  subtitle = "A collection of projects that showcase my approach to user-centred design and problem-solving.",
  projects,
}: WorkSectionProps) {
  // If no prop supplied, use the default data
  const usedProjects = projects ?? defaultProjects

  return (
    <section id="work" className="bg-gray-50 px-4 py-16 sm:px-8 sm:py-24 md:px-16 lg:px-24 lg:py-32">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 text-center lg:mb-24"
      >
        <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-black sm:text-6xl md:text-7xl lg:text-8xl">
          {title}
        </h2>
        <div className="mx-auto mb-6 h-2 w-24 border-2 border-black bg-red-500 sm:w-32 lg:mb-8"></div>
        <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-black sm:text-xl lg:text-2xl">
          {subtitle}
        </p>
      </motion.div>

      <div className="grid gap-8">
        {usedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center lg:mt-24"
      >
        <motion.button
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block rounded border-4 border-black bg-black px-8 py-4 font-black uppercase tracking-wide text-white shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] transition-all hover:shadow-[4px_4px_0px_0px_rgba(239,68,68,1)] sm:px-12 sm:py-6 sm:text-xl"
          onClick={() => {
            const contactEl = document.getElementById("contact")
            if (contactEl) {
              contactEl.scrollIntoView({ behavior: "smooth" })
            } else {
              window.location.href =
                "mailto:aliyon@example.com?subject=Let's work together&body=Hi Aliyon, I'd love to discuss a potential project with you."
            }
          }}
        >
          Let&apos;s Create Something Amazing
        </motion.button>
      </motion.div>
    </section>
  )
}
