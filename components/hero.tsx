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
    { icon: <Users className="w-6 h-6 md:w-8 md:h-8" />, value: "20+", label: "Projects Completed" },
    { icon: <Coffee className="w-6 h-6 md:w-8 md:h-8" />, value: "1000+", label: "Cups of Coffee" },
    { icon: <Award className="w-6 h-6 md:w-8 md:h-8" />, value: "4+", label: "Years Experience" },
    { icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />, value: "∞", label: "Ideas Generated" },
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
      {/* Background Decorative Elements - Responsive positioning */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mobile decorations - smaller and positioned to avoid overlap */}
        <motion.div
          className="absolute top-10 left-4 w-12 h-12 sm:top-20 sm:left-10 sm:w-16 sm:h-16 lg:w-32 lg:h-32 bg-yellow-300 border-2 sm:border-4 border-black"
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 45, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-20 right-4 w-16 h-16 sm:top-40 sm:right-20 sm:w-24 sm:h-24 bg-red-500 border-2 sm:border-4 border-black rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        <motion.div
          className="absolute bottom-40 left-4 w-12 h-24 sm:bottom-32 sm:left-20 sm:w-16 sm:h-40 bg-blue-400 border-2 sm:border-4 border-black"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
        <motion.div
          className="absolute bottom-20 right-8 w-20 h-20 sm:bottom-20 sm:right-32 sm:w-28 sm:h-28 bg-green-400 border-2 sm:border-4 border-black"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Main Content - First on mobile */}
          <div className="w-full lg:col-span-8 lg:order-last">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-black text-black mb-4 sm:mb-6 lg:mb-8 leading-[0.8] tracking-tighter transform -rotate-1"
            >
              {greeting}
            </motion.h1>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl lg:max-w-3xl space-y-4 lg:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed font-medium mb-6 lg:mb-8"
            >
              {description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
                >
                  {paragraph}
                </motion.p>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-wrap items-center gap-2 bg-purple-200 border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1"
              >
                <span className="font-bold">Currently designing at</span>
                <motion.span
                  className="bg-yellow-300 px-3 py-1 font-black text-sm sm:text-base uppercase tracking-wide border-2 border-black inline-block transform rotate-2"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {currentCompany}
                </motion.span>
                <span className="font-bold">, previously at</span>
                {previousCompanies.map((company, index) => (
                  <motion.span
                    key={company}
                    className="bg-blue-300 px-3 py-1 font-black text-sm sm:text-base uppercase tracking-wide border-2 border-black inline-block transform -rotate-1"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {company}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0"
            >
              <motion.button
                onClick={scrollToWork}
                className="bg-red-500 text-white font-black px-6 py-4 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg uppercase tracking-wide border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all w-full sm:w-auto transform rotate-1 hover:rotate-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 View My Work
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                className="bg-yellow-300 text-black font-black px-6 py-4 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg uppercase tracking-wide border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-green-300 transition-all w-full sm:w-auto transform -rotate-1 hover:rotate-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 Get In Touch
              </motion.button>
            </motion.div>
          </div>

          {/* Side Content - Second on mobile */}
          <div className="w-full lg:col-span-4 space-y-4 lg:space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 lg:p-6 transform rotate-2"
              whileHover={{ scale: 1.05, rotate: -1 }}
            >
              <div className="flex items-center gap-3 lg:gap-4 mb-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-black border-2 lg:border-4 border-black flex items-center justify-center flex-shrink-0 transform rotate-45">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white transform -rotate-45">
                    <div className="w-full h-full bg-gradient-to-br from-red-400 to-blue-400"></div>
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-black text-sm lg:text-lg uppercase tracking-wide text-black">Aliyon Tembo</h3>
                  <p className="font-bold text-xs lg:text-base text-black bg-yellow-200 px-2 py-1 inline-block border border-black">
                    UX Designer
                  </p>
                </div>
              </div>
              <div className="bg-green-300 border-2 border-black p-2 lg:p-3 transform -rotate-1">
                <p className="font-black text-xs lg:text-sm uppercase tracking-wide text-black text-center">
                  ⚡ Available for Projects ⚡
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className={`bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-3 lg:p-4 text-center transform ${
                    index % 2 === 0 ? "rotate-1" : "-rotate-1"
                  }`}
                  whileHover={{
                    scale: 1.1,
                    rotate: index % 2 === 0 ? -2 : 2,
                    backgroundColor:
                      index % 4 === 0
                        ? "#FEF3C7"
                        : index % 4 === 1
                          ? "#DBEAFE"
                          : index % 4 === 2
                            ? "#FEE2E2"
                            : "#D1FAE5",
                  }}
                >
                  <div className="text-black mb-1 lg:mb-2 flex justify-center">{stat.icon}</div>
                  <div className="font-black text-lg lg:text-2xl text-black mb-1">{stat.value}</div>
                  <div className="font-bold text-[9px] lg:text-xs text-black uppercase tracking-wide leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Design Tools */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-purple-300 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 lg:p-6 transform -rotate-2"
            >
              <h3 className="font-black text-base lg:text-lg uppercase tracking-wide text-black mb-3 lg:mb-4">
                🛠️ Toolkit
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Sketch", "Principle", "Miro", "Notion"].map((tool, index) => (
                  <motion.span
                    key={tool}
                    className="bg-black text-white px-2 py-1 lg:px-3 lg:py-1 font-black text-xs lg:text-sm uppercase tracking-wide border-2 border-black transform rotate-1"
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: Math.random() * 4 - 2 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"][index],
                      rotate: Math.random() * 10 - 5,
                    }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
