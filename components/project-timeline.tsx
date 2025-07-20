"use client"

import { motion } from "framer-motion"

interface TimelineEvent {
  phase: string
  duration: string
  activities: string[]
  deliverables: string[]
}

interface ProjectTimelineProps {
  events: TimelineEvent[]
}

export function ProjectTimeline({ events }: ProjectTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-black"></div>

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative flex items-start gap-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <div className="w-16 h-16 bg-red-500 border-4 border-black flex items-center justify-center font-black text-white text-lg z-10">
              {index + 1}
            </div>

            {/* Content */}
            <motion.div
              className="flex-1 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-black text-black uppercase tracking-wide">{event.phase}</h3>
                <span className="bg-yellow-300 text-black px-3 py-1 font-black text-sm uppercase tracking-wider border-2 border-black">
                  {event.duration}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-black text-lg uppercase tracking-wide mb-3 text-blue-600">Activities</h4>
                  <ul className="space-y-2">
                    {event.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 border border-black mt-2 flex-shrink-0"></div>
                        <span className="text-black font-medium text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-black text-lg uppercase tracking-wide mb-3 text-green-600">Deliverables</h4>
                  <ul className="space-y-2">
                    {event.deliverables.map((deliverable, delIndex) => (
                      <li key={delIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 border border-black mt-2 flex-shrink-0"></div>
                        <span className="text-black font-medium text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
