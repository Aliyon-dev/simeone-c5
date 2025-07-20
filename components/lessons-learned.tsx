"use client"

import { motion } from "framer-motion"
import { CheckCircle, XCircle, Lightbulb } from "lucide-react"

interface Lesson {
  type: "success" | "challenge" | "insight"
  title: string
  description: string
}

interface LessonsLearnedProps {
  lessons: Lesson[]
}

export function LessonsLearned({ lessons }: LessonsLearnedProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-8 h-8 text-green-600" />
      case "challenge":
        return <XCircle className="w-8 h-8 text-red-600" />
      default:
        return <Lightbulb className="w-8 h-8 text-yellow-600" />
    }
  }

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-100"
      case "challenge":
        return "bg-red-100"
      default:
        return "bg-yellow-100"
    }
  }

  const getTitle = (type: string) => {
    switch (type) {
      case "success":
        return "What Worked Well"
      case "challenge":
        return "Challenges Faced"
      default:
        return "Key Insights"
    }
  }

  const groupedLessons = lessons.reduce(
    (acc, lesson) => {
      if (!acc[lesson.type]) acc[lesson.type] = []
      acc[lesson.type].push(lesson)
      return acc
    },
    {} as Record<string, Lesson[]>,
  )

  return (
    <div className="space-y-12">
      {Object.entries(groupedLessons).map(([type, typeLessons], groupIndex) => (
        <motion.div
          key={type}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            {getIcon(type)}
            <h3 className="text-3xl font-black text-black uppercase tracking-wide">{getTitle(type)}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {typeLessons.map((lesson, index) => (
              <motion.div
                key={index}
                className={`${getBackgroundColor(type)} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6`}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-black text-lg uppercase tracking-wide mb-3 text-black">{lesson.title}</h4>
                <p className="text-black font-medium leading-relaxed">{lesson.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
