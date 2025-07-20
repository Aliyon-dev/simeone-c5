"use client"

import { motion } from "framer-motion"

interface Persona {
  name: string
  age: string
  occupation: string
  bio: string
  goals: string[]
  frustrations: string[]
  avatar: string
}

interface UserPersonasProps {
  personas: Persona[]
}

export function UserPersonas({ personas }: UserPersonasProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {personas.map((persona, index) => (
        <motion.div
          key={index}
          className="bg-white border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
        >
          {/* Avatar */}
          <div className="bg-yellow-300 border-b-4 border-black p-6 text-center">
            <div className="w-24 h-24 bg-black border-4 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
              <img
                src={persona.avatar || "/placeholder.svg?height=80&width=80"}
                alt={persona.name}
                className="w-16 h-16 rounded-full"
              />
            </div>
            <h3 className="font-black text-2xl text-black uppercase tracking-wide">{persona.name}</h3>
            <p className="font-bold text-black">
              {persona.age} • {persona.occupation}
            </p>
          </div>

          {/* Bio */}
          <div className="p-6">
            <p className="text-black font-medium mb-6 leading-relaxed">{persona.bio}</p>

            {/* Goals */}
            <div className="mb-6">
              <h4 className="font-black text-lg uppercase tracking-wide mb-3 text-green-600">Goals</h4>
              <ul className="space-y-2">
                {persona.goals.map((goal, goalIndex) => (
                  <li key={goalIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 border border-black mt-2 flex-shrink-0"></div>
                    <span className="text-black font-medium text-sm">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Frustrations */}
            <div>
              <h4 className="font-black text-lg uppercase tracking-wide mb-3 text-red-600">Frustrations</h4>
              <ul className="space-y-2">
                {persona.frustrations.map((frustration, frustIndex) => (
                  <li key={frustIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 border border-black mt-2 flex-shrink-0"></div>
                    <span className="text-black font-medium text-sm">{frustration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
