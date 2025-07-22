"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import type { Project } from "@/types/portfolio"
import { useRouter } from "next/navigation"
interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0
  const router = useRouter()

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border-8 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 lg:mb-16"
    >
      <div className={`grid md:grid-cols-1 lg:grid-cols-2 ${isEven ? "" : "lg:grid-cols-2"}`}>
        <motion.div
          className={`p-6 sm:p-8 lg:p-12 ${isEven ? "order-1" : "order-2 lg:order-1"} bg-white`}
          whileHover={{ backgroundColor: "#fef3c7" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="mb-6"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-black text-white px-3 py-1 font-black text-xs sm:px-4 sm:py-2 sm:text-sm uppercase tracking-wider border-2 border-black">
              {project.category}
            </span>
            <span className="bg-red-500 text-white px-3 py-1 font-black text-xs sm:px-4 sm:py-2 sm:text-sm uppercase tracking-wider border-2 border-black ml-1 sm:ml-2">
              {project.year}
            </span>
          </motion.div>

          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-black mb-4 lg:mb-6 leading-tight uppercase tracking-tight"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-base lg:text-lg text-black font-medium mb-6 lg:mb-8 leading-relaxed"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              className="bg-white text-black border-4 border-black font-black px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-all group"
              asChild
            >
              <a href={project.hasFullCaseStudy ? project.caseStudyUrl : `#${project.id}-gallery`}>
                {project.hasFullCaseStudy ? "View Case Study" : "View Gallery"}
                <ArrowUpRight className="w-6 h-6 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className={`${isEven ? "order-2" : "order-1 lg:order-2"} bg-gray-100 border-t-8 lg:border-t-0 lg:border-l-8`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.imageAlt}
            objectFit="contain"
            width={600}
            height={400}
            className="w-full h-full object-cover min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
