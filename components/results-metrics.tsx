"use client"

import { motion } from "framer-motion"

interface Metric {
  value: string
  label: string
  description: string
}

interface ResultsMetricsProps {
  metrics: Metric[]
}

export function ResultsMetrics({ metrics }: ResultsMetricsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          className="bg-white border-6 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
        >
          <motion.div
            className="text-6xl md:text-7xl font-black text-red-500 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
          >
            {metric.value}
          </motion.div>
          <h3 className="text-xl font-black text-black uppercase tracking-wide mb-2">{metric.label}</h3>
          <p className="text-black font-medium">{metric.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
