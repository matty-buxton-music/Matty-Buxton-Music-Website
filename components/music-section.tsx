"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const platforms = [
  { name: "Spotify", href: "https://open.spotify.com/artist/5dHt1vcft5GhQ1V6yg14V9", color: "#1DB954" },
  { name: "Apple Music", href: "https://music.apple.com/artist/matty-buxton", color: "#FA243C" },
  { name: "YouTube Music", href: "https://music.youtube.com/channel/UCmattybuxton", color: "#FF0000" },
]

const releases = [
  {
    title: "Going Blind",
    type: "Single",
    year: "2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Going%20Blind%20Cover-wE645BTICVAXi40wh2oBqtUGZ973u4.jpg",
    spotifyUrl: "https://open.spotify.com/track/going-blind",
  },
  {
    title: "Ride it Out",
    type: "Single",
    year: "2023",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matty_Buxton_LLB-126-o0wQI1iu0oo4LZr4l3koMitrC6I0Ef.jpg",
    spotifyUrl: "https://open.spotify.com/track/ride-it-out",
  },
  {
    title: "White Tee (feat. Regan Perry)",
    type: "Single",
    year: "2023",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matty_Buxton_LLB-107-oeu4WBgZpVNzwqcAisG5tyRWW6cGxs.jpg",
    spotifyUrl: "https://open.spotify.com/track/white-tee",
  },
]

export function MusicSection() {
  return (
    <section id="music" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info & Releases */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background hover:bg-foreground hover:text-background text-sm font-medium transition-colors duration-200"
                  >
                    {platform.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Latest Releases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-6">
                Top Streaming Tracks
              </h3>
              <div className="space-y-4">
                {releases.map((release, index) => (
                  <motion.div
                    key={release.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-background hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={release.image}
                        alt={release.title}
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Spotify Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-charcoal rounded-xl p-2 shadow-2xl">
              {/* Spotify Embed - Matty Buxton */}
              <iframe
                src="https://open.spotify.com/embed/artist/5dHt1vcft5GhQ1V6yg14V9?utm_source=generator&theme=0"
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
