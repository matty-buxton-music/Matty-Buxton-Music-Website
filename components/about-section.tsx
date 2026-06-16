"use client"

import { motion } from "framer-motion"
import { revealXLeft, revealXRight } from "@/lib/motion"

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            {...revealXLeft}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matty_Buxton_LLB-065-PQ5ZUG7bvrFdj9bc8L20hMfVUs56op.jpg"
                alt="Matty Buxton playing guitar barefoot on rocks in nature"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-accent/20 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            {...revealXRight}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4 uppercase">
              The Artist
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
              Soulful Sounds from the <span className="font-serif italic">Coast</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Born and raised from the beachside haven of Tauranga Moana, NZ, Matty Buxton and his show-stopping band, &apos;The Buxtones&apos; first originated when charismatic frontman and songwriter Matty Buxton began study at local polytech, Toi Ohomai. Here he created strong relationships with many members of the local musical community, but none more pivotal than local reggae and gypsy jazz legend, Regan Perry.
              </p>
              <p>
                For several years the two played shows throughout the Bay Of Plenty and central North Island. Under the wing of Regan, Matty&apos;s natural flare for groove and lyric writing began to flourish. It wasn&apos;t long before local producer Nathan Sowter took notice and Matty took his first steps into the world of a recording artist.
              </p>
              <p>
                Matty and Nathan came out swinging with four successful singles, including &apos;Going Blind&apos;, &apos;Ride it Out&apos; and &apos;White Tee&apos; feat Regan Perry. Magic struck when seasoned musicians Nick Ririnui, Ash Edwards, and Argentinian-born Federico Daconti joined the band. Their shared love of latin groove, neo-soul, and hip-hop styles created a truly original sound sure to make your hips swing.
              </p>
              <p>
                Fast forward to today, Matty and The Buxtones have headlined a hugely successful tour supporting their latest EP, &apos;Eitherway&apos;. They have also opened for heavy hitters Summer Thieves, Coterie, Lime Cordiale and Black Comet.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div>
                <p className="text-3xl md:text-4xl font-light text-foreground">200+</p>
                <p className="text-sm text-muted-foreground mt-1">Shows Performed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light text-foreground">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Weddings</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light text-foreground">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Performing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
