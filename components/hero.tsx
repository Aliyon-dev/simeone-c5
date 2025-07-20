"use client"

import { motion } from "framer-motion"

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
  currentCompany = "Acme Corp",
  previousCompanies = ["Design Studio", "Creative Agency"],
}: HeroProps) {
  return (
    <section className="px-8 py-32 md:px-16 lg:px-24 min-h-[80vh] flex items-center">
      <div className="max-w-6xl">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-black mb-16 leading-none tracking-tighter"
        >
          {greeting}
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl space-y-8 text-xl md:text-2xl text-black leading-relaxed font-medium"
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
      </div>
    </section>
  )
}
