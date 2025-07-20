"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ProjectSectionProps {
  title: string
  children: ReactNode
  backgroundColor?: "white" | "gray" | "yellow" | "blue"
  index?: number
}

export function ProjectSection({ title, children, backgroundColor = "white", index = 0 }: ProjectSectionProps) {
  const bgColors = {
    white: "bg-white",
    gray: "bg-gray-100",
    yellow: "bg-yellow-100",
    blue: "bg-blue-100",
  }

  return (
    <motion.section
      className={`px-8 py-24 md:px-16 lg:px-24 ${bgColors[backgroundColor]}`}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        className="text-5xl md:text-7xl font-black text-black mb-12 uppercase tracking-tighter leading-none"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <div className="w-24 h-2 bg-red-500 border-2 border-black mb-12"></div>
      {children}
    </motion.section>
  )
}
