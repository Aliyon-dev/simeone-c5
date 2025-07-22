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
    { icon: <Users className="w-8 h-8" />, value: "20+", label: "Projects Completed" },
    { icon: <Coffee className="w-8 h-8" />, value: "1000+", label: "Cups of Coffee" },
    { icon: <Award className="w-8 h-8" />, value: "4+", label: "Years Experience" },
    { icon: <Zap className="w-8 h-8" />, value: "∞", label: "Ideas Generated" },
  ]

  return (
    <section className="px-8 py-32 md:px-16 lg:px-24 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 lg:w-32 lg:h-32 bg-yellow-300 border-4 border-black"
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 45, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-red-500 border-4 border-black rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-16 h-40 bg-blue-400 border-4 border-black"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
        <motion.div
          className="absolute bottom-20 right-32 w-28 h-28 bg-green-400 border-4 border-black"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side - Stats and Visual Elements */}
          <div className="lg:col-span-4 space-y-6 lg:space-y-8">
            {/* Profile Card */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 lg:p-6"
              whileHover={{ scale: 1.02, rotate: -1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-black border-4 border-black flex items-center justify-center">
                  <div className="w-8 h-8 bg-white"></div>
                </div>
                <div>
                  <h3 className="font-black text-base lg:text-lg uppercase tracking-wide text-black">Aliyon Tembo</h3>
                  <p className="font-bold text-black">UX Designer</p>
                </div>
              </div>
              <div className="bg-green-300 border-2 border-black p-3">
                <p className="font-black text-sm uppercase tracking-wide text-black">Available for Projects</p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 lg:p-4 text-center"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                >
                  <div className="text-black mb-2">{stat.icon}</div>
                  <div className="font-black text-xl lg:text-2xl text-black mb-1">{stat.value}</div>
                  <div className="font-bold text-[10px] lg:text-xs text-black uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Design Tools */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-purple-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6"
            >
              <h3 className="font-black text-lg uppercase tracking-wide text-black mb-4">Toolkit</h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Sketch", "Principle", "Miro", "Notion"].map((tool, index) => (
                  <motion.span
                    key={tool}
                    className="bg-black text-white px-3 py-1 font-black text-sm uppercase tracking-wide border-2 border-black"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#EF4444" }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Main Content */}
          <div className="lg:col-span-8 order-first lg:order-last">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] xl:text-[12rem] font-black text-black mb-6 lg:mb-8 leading-none tracking-tighter"
            >
              {greeting}
            </motion.h1>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-3xl space-y-4 lg:space-y-8 text-lg md:text-xl lg:text-2xl text-black leading-relaxed font-medium"
            >
              {description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  {paragraph}
                </motion.p>
              ))}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Currently designing at{" "}
                <motion.span
                  className="bg-yellow-300 px-2 py-1 font-black uppercase tracking-wide border-2 border-black"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {currentCompany}
                </motion.span>
                , previously at{" "}
                {previousCompanies.map((company, index) => (
                  <motion.span
                    key={company}
                    className="bg-blue-300 px-2 py-1 font-black uppercase tracking-wide border-2 border-black mr-2"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {company}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap gap-4 mt-8 lg:mt-12"
            >
              <motion.button
                className="bg-red-500 text-white font-black px-6 py-3 text-base lg:px-8 lg:py-4 lg:text-lg uppercase tracking-wide border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                className="bg-white text-black font-black px-6 py-3 text-base lg:px-8 lg:py-4 lg:text-lg uppercase tracking-wide border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
