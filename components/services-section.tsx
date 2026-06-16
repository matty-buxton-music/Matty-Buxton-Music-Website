"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mic2, Users, Heart } from "lucide-react"
import { reveal, revealUpLarge } from "@/lib/motion"

const services = [
  {
    id: "original",
    title: "Matty Buxton",
    subtitle: "Original Artist",
    description: "Experience the original sounds of neo soul, hip-hop, and funk. Perfect for festivals, concert venues, and music lovers seeking authentic artistry.",
    icon: Mic2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matty_Buxton_LLB-135-5S8zKRs6UjXih5rQ75kqEfqOAQXjFp.jpg",
    features: ["Original Music", "Festival Ready", "Full Production"],
  },
  {
    id: "weddings",
    title: "Weddings & Events",
    subtitle: "Solo & Duo Performances",
    description: "Create the perfect atmosphere for your special day with intimate acoustic performances. Professional, reliable, and tailored to your celebration.",
    icon: Heart,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matty_Buxton_LLB-065-PQ5ZUG7bvrFdj9bc8L20hMfVUs56op.jpg",
    features: ["Ceremony Music", "Reception Entertainment", "Custom Song Requests"],
  },
  {
    id: "buxtones",
    title: "Matty & The Buxtones",
    subtitle: "7-Piece Live Band",
    description: "A high-energy, festival-ready band delivering electrifying performances of originals plus funk, soul, hip-hop, and dancefloor classics.",
    icon: Users,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matty_Buxton_LLB-107-oeu4WBgZpVNzwqcAisG5tyRWW6cGxs.jpg",
    features: ["7-Piece Band", "Covers & Originals", "Festival Energy"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          {...reveal}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4 uppercase">
            Live Entertainment
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Three Ways to <span className="font-serif italic">Experience</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              {...revealUpLarge}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[4/5] mb-6 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                
                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-white" />
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs tracking-widest text-white/60 uppercase mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="text-2xl font-light text-white mb-3">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors group/link"
              >
                Enquire Now
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
