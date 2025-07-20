"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface HeaderProps {
  designerName?: string
  title?: string
}

export function Header({ designerName = "Alex Morgan", title = "Designer" }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-8 py-8 md:px-16 lg:px-24"
    >
      <motion.div
        className="flex items-center gap-4"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="w-12 h-12 bg-black border-4 border-black flex items-center justify-center">
          <div className="w-4 h-4 bg-white"></div>
        </div>
        <div>
          <div className="text-sm font-bold text-black uppercase tracking-wider">{title}</div>
          <div className="text-sm font-bold text-black uppercase tracking-wider">{designerName}</div>
        </div>
      </motion.div>

      <nav className="hidden md:flex items-center gap-12">
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Link
            href="#work"
            className="text-black font-bold text-lg hover:text-gray-600 transition-colors uppercase tracking-wide"
          >
            Work
          </Link>
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Link
            href="#about"
            className="text-black font-bold text-lg hover:text-gray-600 transition-colors uppercase tracking-wide"
          >
            About
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 text-lg uppercase tracking-wide border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            Work with me
          </Button>
        </motion.div>
      </nav>
    </motion.header>
  )
}
