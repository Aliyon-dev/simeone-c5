"use client"

import { motion } from "framer-motion"
import { Play, Pause, SkipForward, Volume2, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: string
  albumArt: string
  spotifyUrl: string
  isPlaying?: boolean
}

export interface SpotifyPlaylist {
  name: string
  description: string
  tracks: Track[]
  coverImage: string
}

interface SpotifySectionProps {
  currentTrack?: Track
  playlists: SpotifyPlaylist[]
  topTracks: Track[]
}

export function SpotifySection({ currentTrack, playlists, topTracks }: SpotifySectionProps) {
  const [playingTrack, setPlayingTrack] = useState<string | null>(currentTrack?.id || null)

  const togglePlay = (trackId: string) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId)
  }

  return (
    <div className="space-y-16">
      {/* Currently Playing */}
      {currentTrack && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-black text-black uppercase tracking-wide mb-8">Currently Vibing To</h3>
          <motion.div
            className="bg-green-400 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8"
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex items-center gap-6">
              <motion.div
                className="relative"
                animate={{ rotate: playingTrack === currentTrack.id ? 360 : 0 }}
                transition={{
                  duration: 10,
                  repeat: playingTrack === currentTrack.id ? Number.POSITIVE_INFINITY : 0,
                  ease: "linear",
                }}
              >
                <img
                  src={currentTrack.albumArt || "/placeholder.svg?height=120&width=120"}
                  alt={currentTrack.album}
                  className="w-24 h-24 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 border-4 border-black"></div>
              </motion.div>

              <div className="flex-1">
                <h4 className="text-2xl font-black text-black uppercase tracking-wide mb-2">{currentTrack.title}</h4>
                <p className="text-lg font-bold text-black mb-1">{currentTrack.artist}</p>
                <p className="text-black font-medium">{currentTrack.album}</p>
              </div>

              <div className="flex items-center gap-4">
                <motion.button
                  onClick={() => togglePlay(currentTrack.id)}
                  className="bg-black text-white w-16 h-16 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {playingTrack === currentTrack.id ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </motion.button>

                <Button
                  className="bg-white text-black border-4 border-black font-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-all"
                  asChild
                >
                  <a href={currentTrack.spotifyUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="bg-black h-2 border-2 border-black">
                <motion.div
                  className="bg-white h-full"
                  initial={{ width: "0%" }}
                  animate={{ width: playingTrack === currentTrack.id ? "100%" : "35%" }}
                  transition={{ duration: playingTrack === currentTrack.id ? 30 : 0 }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm font-bold text-black">1:23</span>
                <span className="text-sm font-bold text-black">{currentTrack.duration}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Design Playlists */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-black text-black uppercase tracking-wide mb-8">Design Process Soundtracks</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {playlists.map((playlist, index) => (
            <motion.div
              key={index}
              className="bg-white border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
            >
              {/* Playlist Header */}
              <div className="bg-purple-300 border-b-6 border-black p-6">
                <img
                  src={playlist.coverImage || "/placeholder.svg?height=200&width=200"}
                  alt={playlist.name}
                  className="w-full h-48 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4"
                />
                <h4 className="text-xl font-black text-black uppercase tracking-wide mb-2">{playlist.name}</h4>
                <p className="text-black font-medium">{playlist.description}</p>
              </div>

              {/* Track List */}
              <div className="p-4">
                {playlist.tracks.slice(0, 3).map((track, trackIndex) => (
                  <motion.div
                    key={track.id}
                    className="flex items-center gap-4 p-3 hover:bg-yellow-100 border-2 border-transparent hover:border-black transition-all mb-2 last:mb-0"
                    whileHover={{ x: 5 }}
                  >
                    <button
                      onClick={() => togglePlay(track.id)}
                      className="bg-black text-white w-8 h-8 border-2 border-black flex items-center justify-center hover:bg-red-500 transition-colors"
                    >
                      {playingTrack === track.id ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                    </button>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-sm text-black truncate">{track.title}</p>
                      <p className="font-medium text-xs text-gray-600 truncate">{track.artist}</p>
                    </div>
                    <span className="text-xs font-bold text-black">{track.duration}</span>
                  </motion.div>
                ))}
                <div className="text-center mt-4">
                  <span className="text-sm font-bold text-gray-600">+{playlist.tracks.length - 3} more tracks</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Top Tracks */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-black text-black uppercase tracking-wide mb-8">On Repeat This Month</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topTracks.map((track, index) => (
            <motion.div
              key={track.id}
              className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={track.albumArt || "/placeholder.svg?height=60&width=60"}
                    alt={track.album}
                    className="w-12 h-12 border-2 border-black"
                  />
                  <div className="absolute -top-2 -left-2 bg-red-500 text-white w-6 h-6 border-2 border-black flex items-center justify-center font-black text-xs">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-black text-sm text-black truncate">{track.title}</p>
                  <p className="font-medium text-xs text-gray-600 truncate">{track.artist}</p>
                </div>
                <button
                  onClick={() => togglePlay(track.id)}
                  className="bg-black text-white w-8 h-8 border-2 border-black flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  {playingTrack === track.id ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Music & Design Philosophy */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-black text-black uppercase tracking-wide mb-8">Music Fuels Creativity</h3>
        <div className="bg-blue-100 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-red-500 w-16 h-16 border-4 border-black mx-auto mb-4 flex items-center justify-center">
                <Volume2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-black text-lg uppercase tracking-wide mb-2">Research Phase</h4>
              <p className="text-black font-medium text-sm">
                Lo-fi beats and ambient sounds help me focus during user interviews and data analysis.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-yellow-500 w-16 h-16 border-4 border-black mx-auto mb-4 flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <h4 className="font-black text-lg uppercase tracking-wide mb-2">Design Phase</h4>
              <p className="text-black font-medium text-sm">
                Upbeat electronic and indie rock energize my creative process and ideation sessions.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-green-500 w-16 h-16 border-4 border-black mx-auto mb-4 flex items-center justify-center">
                <SkipForward className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-black text-lg uppercase tracking-wide mb-2">Testing Phase</h4>
              <p className="text-black font-medium text-sm">
                Calm instrumental music keeps me centered while analyzing user feedback and iterating.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
