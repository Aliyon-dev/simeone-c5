"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Nav() {
  return (
    <>
      {/* Top Navigation Bar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md bg-opacity-80 bg-[#131313] border-b border-[#939277]"
      >
        <div className="text-2xl font-bold tracking-tighter text-white hover:text-[#FFFF00] transition-colors font-headline uppercase">
          ARCH/ENG/DEV
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#work" className="font-space-grotesk uppercase tracking-widest text-sm text-[#FFFF00] border-b-2 border-[#FFFF00] pb-1">
            WORK
          </Link>
          <Link href="#experience" className="font-space-grotesk uppercase tracking-widest text-sm text-white opacity-80 hover:opacity-100 transition-all duration-0">
            EXPERIENCE
          </Link>
          <Link href="#skills" className="font-space-grotesk uppercase tracking-widest text-sm text-white opacity-80 hover:opacity-100 transition-all duration-0">
            SKILLS
          </Link>
          <Link href="#contact" className="font-space-grotesk uppercase tracking-widest text-sm text-white opacity-80 hover:opacity-100 transition-all duration-0">
            CONTACT
          </Link>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FFFF00] text-[#131313] font-space-grotesk font-bold uppercase tracking-widest text-sm px-6 py-2 hover:bg-white transition-all duration-0"
        >
          GET IN TOUCH
        </motion.button>
      </motion.nav>

      {/* Side Navigation */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed left-0 top-0 h-full w-20 md:w-64 hidden lg:flex flex-col border-r border-[#484831] bg-[#0e0e0e] z-40 pt-24"
      >
        <div className="px-6 mb-12">
          <h3 className="font-space-grotesk text-xs tracking-tighter uppercase text-[#FFFF00] font-bold">DISCIPLINES</h3>
          <p className="font-space-grotesk text-[10px] tracking-widest text-outline uppercase">TECHNICAL REPOSITORY</p>
        </div>

        <nav className="flex flex-col w-full">
          <Link href="#uiux" className="flex items-center px-6 py-4 space-x-4 bg-[#FFFF00] text-[#131313] font-bold group">
            <span className="material-symbols-outlined text-xl">layers</span>
            <span className="font-space-grotesk text-xs tracking-tighter uppercase">UI/UX DESIGN</span>
          </Link>
          <Link href="#software" className="flex items-center px-6 py-4 space-x-4 text-white hover:bg-[#FFFF00] hover:text-[#131313] transition-all duration-0 group">
            <span className="material-symbols-outlined text-xl">code</span>
            <span className="font-space-grotesk text-xs tracking-tighter uppercase">SOFTWARE ENG</span>
          </Link>
          <Link href="#archviz" className="flex items-center px-6 py-4 space-x-4 text-white hover:bg-[#FFFF00] hover:text-[#131313] transition-all duration-0 group">
            <span className="material-symbols-outlined text-xl">clarity</span>
            <span className="font-space-grotesk text-xs tracking-tighter uppercase">ARCHVIZ</span>
          </Link>
          <Link href="#biography" className="flex items-center px-6 py-4 space-x-4 text-white hover:bg-[#FFFF00] hover:text-[#131313] transition-all duration-0 group">
            <span className="material-symbols-outlined text-xl">person</span>
            <span className="font-space-grotesk text-xs tracking-tighter uppercase">BIOGRAPHY</span>
          </Link>
        </nav>
      </motion.aside>
    </>
  )
}
