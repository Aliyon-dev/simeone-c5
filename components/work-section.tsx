"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import { projects } from "@/data/portfolio-data"
import type { Project } from "@/types/portfolio"

interface WorkSectionProps {
  projects?: Project[]
}

export function WorkSection({ projects: propProjects }: WorkSectionProps) {
  // Use provided projects or fall back to default
  const projectList = propProjects || projects

  return (
    <section
      id="work"
      className="px-4 sm:px-8 py-16 sm:py-24 md:py-32 md:px-16 lg:px-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-blue-300 border-4 border-black transform rotate-12"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 12 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-yellow-300 border-4 border-black rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 lg:mb-8 leading-none tracking-tighter transform -rotate-1"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            Selected Work
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed font-medium max-w-3xl mx-auto bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
            whileHover={{ scale: 1.02, rotate: -0.5 }}
          >
            A collection of projects where I've helped businesses solve complex problems through thoughtful design and
            user research.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:gap-12 lg:gap-16">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-24"
        >
          <motion.div
            className="bg-red-400 border-4 border-black p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2 max-w-2xl mx-auto"
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black mb-4 uppercase tracking-wide">
              🎯 Ready to Create Something Amazing?
            </h3>
            <p className="text-lg sm:text-xl text-black font-medium mb-6">
              Let's collaborate and bring your ideas to life!
            </p>
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                } else {
                  window.location.href =
                    "mailto:aliyon@example.com?subject=Let's work together&body=Hi Aliyon, I'd love to discuss a potential project with you."
                }
              }}
              className="bg-yellow-300 text-black font-black px-8 py-4 text-lg uppercase tracking-wide border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all transform -rotate-2 hover:rotate-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Let's Create Something Amazing
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkSection
