"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import { portfolioData } from "@/data/portfolio-data"

export function WorkSection() {
  return (
    <section id="work" className="px-4 sm:px-8 py-16 sm:py-24 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-6 sm:mb-8 uppercase tracking-tighter leading-none">
            Selected
            <br />
            <span className="bg-yellow-300 px-2 sm:px-4 py-1 sm:py-2 border-4 border-black inline-block transform -rotate-2">
              Projects
            </span>
          </h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl lg:text-2xl text-black max-w-3xl mx-auto font-medium leading-relaxed"
          >
            A curated selection of projects that showcase my approach to solving complex design challenges and creating
            meaningful user experiences.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 sm:gap-12 lg:gap-16">
          {portfolioData.projects.map((project, index) => (
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

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20 lg:mt-24"
        >
          <motion.button
            className="bg-black text-white font-black px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl uppercase tracking-wide border-4 border-black shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] hover:shadow-[4px_4px_0px_0px_rgba(239,68,68,1)] transition-all"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              } else {
                window.location.href =
                  "mailto:aliyon@example.com?subject=Let's work together&body=Hi Aliyon, I'd love to discuss a potential project with you."
              }
            }}
          >
            Let's Create Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
