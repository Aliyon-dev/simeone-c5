"use client"

import { ProjectCard } from "./project-card"
import { motion } from "framer-motion"
import type { Project } from "@/types/portfolio"

interface WorkSectionProps {
  title?: string
  subtitle?: string
  projects: Project[]
}

export function WorkSection({
  title = "Selected Work",
  subtitle = "A collection of projects that showcase my approach to user-centered design and problem-solving.",
  projects,
}: WorkSectionProps) {
  return (
    <section id="work" className="px-4 py-16 sm:px-8 sm:py-24 md:px-16 lg:px-24 lg:py-32 bg-gray-50">
      <motion.div
        className="mb-12 lg:mb-24"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-8 uppercase tracking-tighter leading-none">
          {title}
        </h2>
        <div className="w-24 h-2 lg:w-32 bg-red-500 border-2 border-black mb-8"></div>
        <p className="text-lg md:text-xl lg:text-2xl text-black max-w-4xl font-medium leading-relaxed">{subtitle}</p>
      </motion.div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
