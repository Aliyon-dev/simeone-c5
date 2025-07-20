"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react"

interface TestingInsight {
  type: "success" | "issue" | "neutral"
  title: string
  description: string
  metric?: string
  action: string
}

interface TestingInsightsProps {
  insights: TestingInsight[]
  methodology: string[]
}

export function TestingInsights({ insights, methodology }: TestingInsightsProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <TrendingUp className="w-6 h-6 text-green-600" />
      case "issue":
        return <TrendingDown className="w-6 h-6 text-red-600" />
      default:
        return <AlertCircle className="w-6 h-6 text-yellow-600" />
    }
  }

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-100"
      case "issue":
        return "bg-red-100"
      default:
        return "bg-yellow-100"
    }
  }

  return (
    <div className="space-y-12">
      {/* Methodology */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-black text-black uppercase tracking-wide mb-6">Testing Methodology</h3>
        <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8">
          <ul className="grid md:grid-cols-2 gap-4">
            {methodology.map((method, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-black border border-black mt-3 flex-shrink-0"></div>
                <span className="text-black font-medium">{method}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Insights */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-black text-black uppercase tracking-wide mb-6">Key Insights</h3>
        <div className="space-y-6">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              className={`${getBackgroundColor(insight.type)} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6`}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{getIcon(insight.type)}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h4 className="font-black text-lg uppercase tracking-wide text-black">{insight.title}</h4>
                    {insight.metric && (
                      <span className="bg-black text-white px-3 py-1 font-black text-sm uppercase tracking-wider">
                        {insight.metric}
                      </span>
                    )}
                  </div>
                  <p className="text-black font-medium mb-4 leading-relaxed">{insight.description}</p>
                  <div className="bg-white border-2 border-black p-3">
                    <span className="font-black text-sm uppercase tracking-wide text-black">Action Taken: </span>
                    <span className="font-medium text-black">{insight.action}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
