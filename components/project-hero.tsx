"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Wrench } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProjectHeroProps {
  title: string
  subtitle: string
  category: string
  year: string
  duration: string
  role: string
  tools: string[]
  heroImage: string
}

export function ProjectHero({ title, subtitle, category, year, duration, role, tools, heroImage }: ProjectHeroProps) {
  return (
    <section className="px-8 py-16 md:px-16 lg:px-24 bg-gray-100">
      {/* Back Button */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <Link href="/#work">
          <Button className="bg-white text-black border-4 border-black font-black px-6 py-3 text-lg uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-all group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </Button>
        </Link>
      </motion.div>

      {/* Project Title */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-black text-white px-4 py-2 font-black text-sm uppercase tracking-wider border-2 border-black">
            {category}
          </span>
          <span className="bg-red-500 text-white px-4 py-2 font-black text-sm uppercase tracking-wider border-2 border-black">
            {year}
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-10xl font-black text-black mb-8 uppercase tracking-tighter leading-none">
          {title}
        </h1>

        <div className="w-32 h-2 bg-blue-500 border-2 border-black mb-8"></div>

        <p className="text-2xl md:text-3xl text-black font-medium leading-relaxed max-w-4xl">{subtitle}</p>
      </motion.div>

      {/* Project Details */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Calendar className="w-8 h-8 mb-4" />
          <h3 className="font-black text-lg uppercase tracking-wide mb-2">Duration</h3>
          <p className="text-black font-medium">{duration}</p>
        </div>

        <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <User className="w-8 h-8 mb-4" />
          <h3 className="font-black text-lg uppercase tracking-wide mb-2">Role</h3>
          <p className="text-black font-medium">{role}</p>
        </div>

        <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Wrench className="w-8 h-8 mb-4" />
          <h3 className="font-black text-lg uppercase tracking-wide mb-2">Tools</h3>
          <p className="text-black font-medium">{tools.join(", ")}</p>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="border-8 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        whileHover={{ scale: 1.02 }}
      >
        <img src={heroImage || "/placeholder.svg"} alt={title} className="w-full h-auto" />
      </motion.div>
    </section>
  )
}
