"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ListenNowButton } from "@/components/listen-now-button"
import {
  AppleMusicIcon,
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
} from "@/components/brand-icons"

const heroSocialLinks = [
  {
    href: "https://open.spotify.com/artist/6aVd2oxEWWoOPzswn8dv65?si=Ni5tGbIPTr6Ebous1TNg8A",
    icon: SpotifyIcon,
    label: "Spotify",
  },
  {
    href: "https://music.apple.com/nz/artist/matty-buxton/1557093508",
    icon: AppleMusicIcon,
    label: "Apple Music",
  },
  {
    href: "https://www.instagram.com/the_real_matty_buxton/",
    icon: InstagramIcon,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/matty3uxton",
    icon: FacebookIcon,
    label: "Facebook",
  },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 hero-warm-tone overflow-hidden">
        <div className="absolute -top-[calc(18%+8cm)] left-0 right-0 h-[calc(135%+8cm)]">
          <Image
            src="/images/hero-diving.jpg"
            alt="Matty Buxton diving into the water"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Vignette top + bottom only — keep the diver clear in the middle */}
      <div className="absolute inset-0 bg-amber-950/10 mix-blend-soft-light pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 from-0% via-transparent via-14% to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 from-0% via-black/20 via-16% to-transparent pointer-events-none" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 pt-[4.5rem] md:pt-24 pb-8 md:pb-10 text-center text-white pointer-events-none">
        {/* Name — top strip only, over water surface */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid w-full max-w-5xl mx-auto grid-cols-[1fr_auto_1fr] items-start gap-2 pointer-events-auto shrink-0"
        >
          <div aria-hidden="true" />
          <h1 className="font-hero text-[clamp(2rem,7.5vw,5.25rem)] font-black uppercase leading-[0.9] tracking-[0.02em] text-white whitespace-nowrap drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
            Matty Buxton
          </h1>
          <div className="flex items-center justify-end gap-3 md:gap-4">
            {heroSocialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Taglines + actions — bottom band over dark water */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto flex flex-col items-center gap-5 md:gap-6 pointer-events-auto"
        >
          <div className="space-y-2 text-white w-full">
            <p className="hero-tagline font-hero-secondary text-[clamp(1.05rem,4.1vw,3.35rem)] font-medium italic leading-none tracking-[0.1em] whitespace-nowrap">
              The Sunshine Funkadelic
            </p>
            <p className="font-sans text-[0.65rem] md:text-xs font-medium uppercase tracking-[0.24em] text-white/80">
              Live · Original Music · The Buxtones
            </p>
          </div>

          <ListenNowButton />
        </motion.div>
      </div>
    </section>
  )
}
