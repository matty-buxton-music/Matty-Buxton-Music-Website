"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Play, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matty_Buxton_LLB-126-o0wQI1iu0oo4LZr4l3koMitrC6I0Ef.jpg')`,
          }}
        />
        {/* Warm plum + charcoal — club-night depth without retro kitsch */}
        <div className="absolute inset-0 bg-funk-plum/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/25 to-background/95" />
        <div className="absolute inset-0 hero-groove-glow" />
        <div className="absolute inset-0 hero-grain" aria-hidden />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="font-sans text-[0.65rem] md:text-xs tracking-[0.4em] text-funk-gold/90 mb-8 uppercase font-medium">
            Mount Maunganui, New Zealand
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.25rem] font-semibold text-white mb-5 tracking-tight leading-[1.05]">
            <span className="block">Matty</span>
            <span className="block italic text-funk-gold font-medium">Buxton</span>
          </h1>

          <div
            className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-funk-gold/80 to-transparent"
            aria-hidden
          />

          <p className="font-sans text-sm md:text-base tracking-[0.28em] text-white/85 mb-5 uppercase font-medium">
            Funk <span className="text-funk-gold/70">•</span> Disco <span className="text-funk-gold/70">•</span> Soul
          </p>

          <p className="font-sans text-base md:text-lg text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Original music, unforgettable live performances, and premium entertainment for events across New Zealand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#video"
              className="group flex items-center gap-3 px-8 py-4 bg-funk-gold text-charcoal rounded-full font-medium tracking-wide text-sm hover:bg-funk-amber transition-all duration-300 shadow-[0_4px_24px_-4px_color-mix(in_oklch,var(--funk-gold)_45%,transparent)]"
            >
              <Play className="w-5 h-5 fill-current" />
              Watch Showreel
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 border border-funk-gold/35 text-white rounded-full font-medium tracking-wide text-sm hover:border-funk-gold/60 hover:bg-funk-gold/10 transition-all duration-300"
            >
              Book a Show
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#video"
          className="flex flex-col items-center gap-2 text-funk-gold/50 hover:text-funk-gold/80 transition-colors font-sans"
        >
          <span className="text-[0.65rem] tracking-[0.35em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
