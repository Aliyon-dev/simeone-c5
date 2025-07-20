"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WorkSection } from "@/components/work-section"
import { AboutSection } from "@/components/about-section"
import { SpotifySection } from "@/components/spotify-section"
import { Footer } from "@/components/footer"
import { projects } from "@/data/portfolio-data"
import { currentTrack, designPlaylists, topTracks } from "@/data/spotify-data"
import { motion } from "framer-motion"
import { GallerySection } from "@/components/gallery-section"

export default function Portfolio() {
  return (
    <motion.div
      className="min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <Header designerName="Alex Morgan" title="Designer" />

      {/* Hero Section */}
      <Hero
        greeting="Hi,"
        description={[
          "I'm a UX designer passionate about creating meaningful digital experiences that solve real problems and delight users.",
        ]}
        currentCompany="Acme Corp"
        previousCompanies={["Design Studio", "Creative Agency"]}
      />

      {/* Work Section */}
      <WorkSection
        title="Selected Work"
        subtitle="A collection of projects that showcase my approach to user-centered design and problem-solving."
        projects={projects}
      />

      {/* About Section */}
      <AboutSection
        title="About"
        paragraphs={[
          "I'm a UX designer with 6+ years of experience creating digital products that people love to use. My approach combines user research, strategic thinking, and visual design to solve complex problems.",
          "When I'm not designing, you can find me exploring new coffee shops, hiking local trails, or experimenting with new design tools and techniques.",
        ]}
        profileImageAlt="Alex Morgan - UX Designer"
      />

      {/* Gallery Section */}
      <GallerySection projects={projects} />

      {/* Spotify Section */}
      <section id="music" className="px-8 py-32 md:px-16 lg:px-24 bg-gray-50">
        <motion.div
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-black text-black mb-8 uppercase tracking-tighter leading-none">
            Music & Design
          </h2>
          <div className="w-32 h-2 bg-green-500 border-2 border-black mb-8"></div>
          <p className="text-xl md:text-2xl text-black max-w-4xl font-medium leading-relaxed">
            Music is the soundtrack to my creative process. Here's what keeps me inspired and focused while designing.
          </p>
        </motion.div>

        <SpotifySection currentTrack={currentTrack} playlists={designPlaylists} topTracks={topTracks} />
      </section>

      {/* Footer */}
      <Footer designerName="Alex Morgan" />
    </motion.div>
  )
}
