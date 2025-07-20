"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  icon: ReactNode
  details: string[]
  index: number
}

export function ProcessStep({ number, title, description, icon, details, index }: ProcessStepProps) {
  return (
    <motion.div
      className="bg-white border-6 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8"
      initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-6">
        <div className="bg-black text-white w-16 h-16 flex items-center justify-center font-black text-2xl border-4 border-black">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-black">{icon}</div>
            <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-wide">{title}</h3>
          </div>
          <p className="text-lg text-black font-medium mb-6 leading-relaxed">{description}</p>
          <ul className="space-y-2">
            {details.map((detail, detailIndex) => (
              <li key={detailIndex} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 border border-black mt-3 flex-shrink-0"></div>
                <span className="text-black font-medium">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
