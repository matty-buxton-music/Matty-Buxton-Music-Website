"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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
          className="w-full max-w-5xl mx-auto pointer-events-auto shrink-0"
        >
          <h1 className="font-hero text-[clamp(2rem,7.5vw,5.25rem)] font-black uppercase leading-[0.9] tracking-[0.02em] text-white whitespace-nowrap drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
            Matty Buxton
          </h1>
        </motion.div>

        {/* Taglines + actions — bottom band over dark water */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="w-full max-w-3xl mx-auto flex flex-col items-center gap-5 md:gap-6 pointer-events-auto"
        >
          <div className="space-y-2 text-white">
            <p className="hero-tagline font-hero-tagline text-[clamp(2.75rem,7.5vw,5.5rem)] font-normal leading-[1.05] tracking-[0.06em] drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]">
              The sunshine funkadelic
            </p>
            <p className="font-sans text-[0.65rem] md:text-xs font-medium uppercase tracking-[0.24em] text-white/80">
              Live · Original Music · The Buxtones
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
            <Link
              href="#shows"
              className="px-4 py-1.5 bg-white/95 text-charcoal font-sans text-[0.65rem] font-medium tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
            >
              Shows
            </Link>
            <Link
              href="#video"
              className="px-4 py-1.5 border border-white/50 text-white font-sans text-[0.65rem] font-medium tracking-[0.2em] uppercase backdrop-blur-[2px] hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Watch
            </Link>
            <Link
              href="#contact"
              className="px-4 py-1.5 border border-white/50 text-white font-sans text-[0.65rem] font-medium tracking-[0.2em] uppercase backdrop-blur-[2px] hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Book a Show
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
