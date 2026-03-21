"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-12 lg:px-16 bg-transparent"
    >
      {/* Left: Brand */}
      <motion.div whileHover={{ opacity: 0.7 }} transition={{ duration: 0.3 }}>
        <span className="text-lg font-bold tracking-tight text-white">Aliyon</span>
      </motion.div>

      {/* Right: Navigation */}
      <nav className="flex items-center gap-8 text-sm font-medium">
        {/* Free Audit */}
        <motion.div whileHover={{ opacity: 0.7 }} transition={{ duration: 0.3 }}>
          <Link
            href="#audit"
            className="relative text-white/70 hover:text-white transition-colors duration-300
            after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0
            after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Work
          </Link>
        </motion.div>

        {/* Get in Touch */}
        <motion.div whileHover={{ opacity: 0.7 }} transition={{ duration: 0.3 }}>
          <Link
            href="#contact"
            className="relative text-white/70 hover:text-white transition-colors duration-300
            after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0
            after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Get in Touch
          </Link>
        </motion.div>
      </nav>
    </motion.header>
  )
}