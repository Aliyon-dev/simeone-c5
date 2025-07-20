"use client"

import { motion } from "framer-motion"

interface JourneyStep {
  phase: string
  actions: string[]
  thoughts: string[]
  emotions: "happy" | "neutral" | "frustrated"
  opportunities: string[]
}

interface UserJourneyProps {
  steps: JourneyStep[]
  title?: string
}

export function UserJourney({ steps, title = "User Journey Map" }: UserJourneyProps) {
  const emotionColors = {
    happy: "bg-green-300",
    neutral: "bg-yellow-300",
    frustrated: "bg-red-300",
  }

  return (
    <div>
      <motion.h3
        className="text-3xl font-black text-black uppercase tracking-wide mb-8"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>

      <div className="overflow-x-auto">
        <div className="min-w-max flex gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-80 flex-shrink-0"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Phase Header */}
              <div className="bg-black text-white p-4 text-center">
                <h4 className="font-black text-lg uppercase tracking-wide">{step.phase}</h4>
              </div>

              {/* Actions */}
              <div className="p-4 border-b-2 border-black">
                <h5 className="font-black text-sm uppercase tracking-wide mb-3">Actions</h5>
                <ul className="space-y-2">
                  {step.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-black mt-2 flex-shrink-0"></div>
                      <span className="text-sm font-medium text-black">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Thoughts */}
              <div className="p-4 border-b-2 border-black">
                <h5 className="font-black text-sm uppercase tracking-wide mb-3">Thoughts</h5>
                <ul className="space-y-2">
                  {step.thoughts.map((thought, thoughtIndex) => (
                    <li key={thoughtIndex} className="text-sm font-medium text-black italic">
                      "{thought}"
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emotions */}
              <div className={`p-4 border-b-2 border-black ${emotionColors[step.emotions]}`}>
                <h5 className="font-black text-sm uppercase tracking-wide mb-2">Emotion</h5>
                <div className="text-2xl font-black uppercase tracking-wide text-black">{step.emotions}</div>
              </div>

              {/* Opportunities */}
              <div className="p-4">
                <h5 className="font-black text-sm uppercase tracking-wide mb-3 text-blue-600">Opportunities</h5>
                <ul className="space-y-2">
                  {step.opportunities.map((opportunity, oppIndex) => (
                    <li key={oppIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span className="text-sm font-medium text-black">{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
