"use client"

import { motion } from "framer-motion"
import { Users, Coffee, Award, Zap } from "lucide-react"

interface HeroProps {
  greeting?: string
  description?: string[]
  currentCompany?: string
  previousCompanies?: string[]
}

export function Hero({
  greeting = "Hi,",
  description = [
    "I'm a UX designer passionate about creating meaningful digital experiences that solve real problems and delight users.",
  ],
  currentCompany = "Illusion Labs",
  previousCompanies = ["Dufuna Tech", "ZitFuse"],
}: HeroProps) {
  const stats = [
    { icon: <Users className="w-6 h-6 md:w-8 md:h-8" />, value: "20+", label: "Projects" },
    { icon: <Coffee className="w-6 h-6 md:w-8 md:h-8" />, value: "1000+", label: "Coffee" },
    { icon: <Award className="w-6 h-6 md:w-8 md:h-8" />, value: "4+", label: "Years" },
    { icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />, value: "∞", label: "Ideas" },
  ]

  const scrollToWork = () => {
    const workSection = document.getElementById("work")
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href =
        "mailto:aliyon@example.com?subject=Let's work together&body=Hi Aliyon, I'd love to discuss a potential project with you."
    }
  }

  return (
    <section className="px-4 sm:px-8 py-16 sm:py-24 md:py-32 md:px-16 lg:px-24 min-h-screen flex items-center relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-24 h-24 md:w-32 md:h-32 bg-yellow-300 border-4 border-black"
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 45, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="absolute bottom-32 left-10 w-28 h-28 md:w-40 md:h-40 bg-red-500 border-4 border-black rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 md:w-40 md:h-40 bg-blue-400 border-4 border-black"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="w-full lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black mb-6 leading-[0.9] tracking-tighter"
            >
              {greeting}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 mb-8"
            >
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed font-medium bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap items-center gap-3 text-base md:text-lg font-bold">
                <span>Currently at</span>
                <span className="bg-yellow-300 px-4 py-2 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {currentCompany}
                </span>
                <span>Previously</span>
                {previousCompanies.map((company) => (
                  <span
                    key={company}
                    className="bg-blue-300 px-4 py-2 font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToWork}
                className="bg-black text-white font-black px-8 py-4 text-lg uppercase tracking-wide border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                View Work
              </button>
              <button
                onClick={scrollToContact}
                className="bg-yellow-300 text-black font-black px-8 py-4 text-lg uppercase tracking-wide border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Get In Touch
              </button>
            </motion.div>
          </div>

          <div className="w-full lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-blue-400 border-4 border-black flex-shrink-0"></div>
                <div>
                  <h3 className="font-black text-xl uppercase text-black">Aliyon Tembo</h3>
                  <p className="font-bold text-sm bg-yellow-200 px-3 py-1 inline-block border-2 border-black mt-1">
                    UX Designer
                  </p>
                </div>
              </div>
              <div className="bg-green-300 border-4 border-black p-3 text-center">
                <p className="font-black text-sm uppercase text-black">Available for Projects</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 text-center hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <div className="text-black mb-2 flex justify-center">{stat.icon}</div>
                  <div className="font-black text-2xl text-black mb-1">{stat.value}</div>
                  <div className="font-bold text-xs text-black uppercase">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
