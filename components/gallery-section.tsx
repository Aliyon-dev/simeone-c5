"use client"

import { motion } from "framer-motion"
import { ProjectGallery } from "./project-gallery"
import type { Project } from "@/types/portfolio"

interface GallerySectionProps {
  projects: Project[]
}

export function GallerySection({ projects }: GallerySectionProps) {
  const galleryProjects = projects.filter((project) => !project.hasFullCaseStudy && project.gallery)

  if (galleryProjects.length === 0) return null

  return (
    <section className="px-8 py-32 md:px-16 lg:px-24 bg-white">
      <motion.div
        className="mb-24"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl md:text-8xl font-black text-black mb-8 uppercase tracking-tighter leading-none">
          Project Galleries
        </h2>
        <div className="w-32 h-2 bg-purple-500 border-2 border-black mb-8"></div>
        <p className="text-xl md:text-2xl text-black max-w-4xl font-medium leading-relaxed">
          Visual showcases of selected projects, highlighting key design decisions and outcomes.
        </p>
      </motion.div>

      <div className="space-y-32">
        {galleryProjects.map((project, index) => (
          <motion.div
            key={project.id}
            id={`${project.id}-gallery`}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Project Header */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-black text-white px-4 py-2 font-black text-sm uppercase tracking-wider border-2 border-black">
                  {project.category}
                </span>
                <span className="bg-red-500 text-white px-4 py-2 font-black text-sm uppercase tracking-wider border-2 border-black">
                  {project.year}
                </span>
              </div>

              <h3 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tight leading-tight">
                {project.title}
              </h3>

              <div className="w-24 h-2 bg-blue-500 border-2 border-black mb-6"></div>

              <p className="text-xl text-black font-medium leading-relaxed max-w-4xl">{project.description}</p>
            </div>

            {/* Gallery */}
            {project.gallery && <ProjectGallery images={project.gallery} title={project.title} />}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
