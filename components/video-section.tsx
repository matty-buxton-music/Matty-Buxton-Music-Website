"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useRef, useState } from "react"
import { featuredVideo, performanceVideos, type PerformanceVideo } from "@/lib/videos"
import { VideoPoster } from "@/components/video-poster"

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<PerformanceVideo | null>(null)
  const playerRef = useRef<HTMLVideoElement>(null)

  const playVideo = (video: PerformanceVideo) => {
    setActiveVideo(video)
    requestAnimationFrame(() => {
      playerRef.current?.play().catch(() => {})
    })
  }

  return (
    <section id="video" className="py-24 md:py-32 bg-charcoal text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm tracking-[0.3em] text-white/50 mb-4 uppercase">
            Watch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold uppercase tracking-[0.04em]">
            Videos
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative aspect-video max-w-5xl mx-auto mb-10 overflow-hidden bg-black"
        >
          {activeVideo ? (
            <video
              ref={playerRef}
              key={activeVideo.id}
              className="absolute inset-0 h-full w-full object-contain bg-black"
              controls
              playsInline
              preload="metadata"
            >
              <source src={activeVideo.src} type={activeVideo.mimeType} />
              Your browser does not support video playback.
            </video>
          ) : (
            <>
              <VideoPoster
                src={featuredVideo.src}
                alt={featuredVideo.title}
                className="object-cover transition-transform duration-700"
                captureTime={2}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => playVideo(featuredVideo)}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 group/btn"
                  aria-label={`Play ${featuredVideo.title}`}
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1 group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-display text-xl md:text-2xl font-medium uppercase tracking-[0.04em]">
                  {featuredVideo.title}
                </h3>
              </div>
            </>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {performanceVideos.map((video, index) => (
            <motion.button
              key={video.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => playVideo(video)}
              className={`relative aspect-video overflow-hidden group text-left ring-2 transition-all ${
                activeVideo?.id === video.id
                  ? "ring-white"
                  : "ring-transparent hover:ring-white/30"
              }`}
            >
              <VideoPoster
                src={video.src}
                alt={video.title}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                captureTime={index === 0 ? 2 : 4}
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors flex items-center justify-center">
                <Play className="w-10 h-10 text-white/90 group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-sans text-xs text-white/60 uppercase tracking-wider mb-1">
                  {video.category}
                </p>
                <p className="font-display text-base text-white font-medium leading-snug">
                  {video.title}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
