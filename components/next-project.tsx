"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NextProjectProps {
  title: string
  category: string
  href: string
  image: string
}

export function NextProject({ title, category, href, image }: NextProjectProps) {
  return (
    <motion.section
      className="px-8 py-24 md:px-16 lg:px-24 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
          Next Project
        </h2>
        <div className="w-32 h-2 bg-yellow-300 border-2 border-white mx-auto"></div>
      </div>

      <Link href={href}>
        <motion.div
          className="bg-white border-8 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.02, rotate: -1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <span className="bg-yellow-300 text-black px-4 py-2 font-black text-sm uppercase tracking-wider border-2 border-black mb-6 inline-block">
                {category}
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-black mb-8 uppercase tracking-tight leading-tight group-hover:text-red-500 transition-colors">
                {title}
              </h3>
              <Button className="bg-black text-white border-4 border-black font-black px-8 py-4 text-lg uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-red-500 transition-all group self-start">
                View Project
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="bg-gray-100">
              <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.section>
  )
}
