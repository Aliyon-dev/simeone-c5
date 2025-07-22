"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Calendar, Users } from "lucide-react"
import type { Project } from "@/types/portfolio"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0
  const colors = ["bg-yellow-300", "bg-blue-300", "bg-green-300", "bg-purple-300", "bg-red-300"]
  const bgColor = colors[index % colors.length]

  return (
    <motion.div
      className={`grid lg:grid-cols-12 gap-6 lg:gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Project Image */}
      <motion.div
        className={`lg:col-span-7 ${isEven ? "" : "lg:col-start-6"}`}
        whileHover={{ rotate: isEven ? 2 : -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className={`${bgColor} border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-6 lg:p-8`}>
          <div className="relative aspect-[4/3] overflow-hidden border-4 border-black">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </motion.div>

      {/* Project Content */}
      <div className={`lg:col-span-5 space-y-4 sm:space-y-6 ${isEven ? "" : "lg:col-start-1"}`}>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Badge className="bg-black text-white border-2 border-black font-black uppercase tracking-wide text-xs sm:text-sm px-2 sm:px-3 py-1">
            {project.category}
          </Badge>
          <Badge className="bg-white text-black border-2 border-black font-black uppercase tracking-wide text-xs sm:text-sm px-2 sm:px-3 py-1">
            {project.year}
          </Badge>
        </div>

        <motion.h3
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight leading-none"
          initial={{ x: isEven ? -50 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-base sm:text-lg lg:text-xl text-black leading-relaxed font-medium"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {project.description}
        </motion.p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="bg-gray-100 text-black px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wide border-2 border-black"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + tagIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, backgroundColor: "#FEF3C7" }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-red-500 hover:bg-red-600 text-white font-black px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base uppercase tracking-wide border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all w-full sm:w-auto"
            >
              <Link href={`/projects/${project.slug}`} className="flex items-center gap-2">
                {project.hasFullCaseStudy ? "View Case Study" : "View Gallery"}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="flex items-center gap-4 text-sm text-black font-bold">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{project.team}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
