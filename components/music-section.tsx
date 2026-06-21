"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { reveal, revealXIn } from "@/lib/motion"
import { openStreamingService, openTrack } from "@/lib/streaming"
import { topStreamingTracks } from "@/lib/tracks"

const platforms = [
  { name: "Spotify", service: "spotify" as const },
  { name: "Apple Music", service: "apple-music" as const },
  { name: "YouTube Music", service: "youtube-music" as const },
]

export function MusicSection() {
  return (
    <section id="music" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info & Releases */}
          <div>
            <motion.div
              {...reveal}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4 uppercase">
                Listen Now
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
                Original <span className="font-serif italic">Music</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                Blending neo soul, alternative hip-hop, and funk with the laid-back vibes of coastal New Zealand. Every track tells a story of ocean, sunshine, and soulful expression.
              </p>

              {/* Platform Links */}
              <div className="flex flex-wrap gap-3 mb-12">
                {platforms.map((platform) => (
                  <button
                    key={platform.name}
                    type="button"
                    onClick={() => openStreamingService(platform.service)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background hover:bg-foreground hover:text-background text-sm font-medium transition-colors duration-200"
                  >
                    {platform.name}
                    <ExternalLink className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Latest Releases */}
            <motion.div
              {...reveal}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-6">
                Top Streaming Tracks
              </h3>
              <div className="space-y-4">
                {topStreamingTracks.map((release, index) => (
                  <motion.button
                    key={release.id}
                    type="button"
                    {...revealXIn}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => openTrack(release.streaming)}
                    className="w-full flex items-center gap-4 p-3 rounded-lg bg-background hover:shadow-md transition-shadow cursor-pointer group text-left"
                  >
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={release.image}
                        alt={`${release.title} cover art`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">{release.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {release.type} • {release.year}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Spotify Embed */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-charcoal rounded-xl p-2 shadow-2xl">
              <iframe
                src="https://open.spotify.com/embed/artist/6aVd2oxEWWoOPzswn8dv65?utm_source=generator&theme=0"
                width="100%"
                height="480"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
                title="Matty Buxton on Spotify"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Follow on Spotify for new releases
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
