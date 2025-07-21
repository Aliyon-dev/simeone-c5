"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectHero } from "@/components/project-hero"
import { NextProject } from "@/components/next-project"
import { motion } from "framer-motion"

export default function EcoMarketProject() {
  return (
    <motion.div
      className="min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header designerName="Alex Morgan" title="Designer" />

      <ProjectHero
        title="EcoMarket"
        subtitle="Creating a sustainable shopping platform that helps users make eco-conscious purchasing decisions while maintaining high conversion rates."
        category="Web Platform"
        year="2023"
        duration="6 months"
        role="Senior UX Designer"
        tools={["Figma", "Framer", "Hotjar", "Notion"]}
        heroImage="/placeholder.svg?height=600&width=1200"
      />

      {/* Add more sections here similar to FinanceFlow */}
      <div className="px-8 py-24 md:px-16 lg:px-24 bg-white text-center">
        <h2 className="text-4xl font-black text-black mb-8 uppercase">Coming Soon</h2>
        <p className="text-xl text-black font-medium">This case study is currently being developed.</p>
      </div>

      <NextProject
        title="TeamSync Tool"
        category="SaaS Platform"
        href="/projects/teamsync"
        image="/placeholder.svg?height=400&width=600"
      />

      <Footer designerName="Alex Morgan" />
    </motion.div>
  )
}
