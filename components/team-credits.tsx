"use client"

import { motion } from "framer-motion"

interface TeamMember {
  name: string
  role: string
  avatar: string
  contribution: string
}

interface TeamCreditsProps {
  members: TeamMember[]
}

export function TeamCredits({ members }: TeamCreditsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {members.map((member, index) => (
        <motion.div
          key={index}
          className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
        >
          <div className="bg-blue-300 border-b-4 border-black p-6">
            <div className="w-20 h-20 bg-black border-4 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
              <img
                src={member.avatar || "/placeholder.svg?height=64&width=64"}
                alt={member.name}
                className="w-12 h-12 rounded-full"
              />
            </div>
            <h3 className="font-black text-lg text-black uppercase tracking-wide">{member.name}</h3>
            <p className="font-bold text-black text-sm">{member.role}</p>
          </div>
          <div className="p-4">
            <p className="text-black font-medium text-sm leading-relaxed">{member.contribution}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
