"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import type { Project } from "@/types/portfolio"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border-8 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16"
    >
      <div className={`grid lg:grid-cols-2 ${isEven ? "" : "lg:grid-cols-2"}`}>
        <motion.div
          className={`p-12 ${isEven ? "order-1" : "order-2 lg:order-1"} bg-white`}
          whileHover={{ backgroundColor: "#fef3c7" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="mb-6"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-black text-white px-4 py-2 font-black text-sm uppercase tracking-wider border-2 border-black">
              {project.category}
            </span>
            <span className="bg-red-500 text-white px-4 py-2 font-black text-sm uppercase tracking-wider border-2 border-black ml-2">
              {project.year}
            </span>
          </motion.div>

          <motion.h3
            className="text-3xl md:text-4xl font-black text-black mb-6 leading-tight uppercase tracking-tight"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-black text-lg font-medium mb-8 leading-relaxed"
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
            <Button className="bg-white text-black border-4 border-black font-black px-8 py-4 text-lg uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-all group">
              View Case Study
              <ArrowUpRight className="w-6 h-6 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className={`${isEven ? "order-2" : "order-1 lg:order-2"} bg-gray-100 border-l-8 border-black`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.imageAlt}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
