"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: "1",
    quote: "Matty made our wedding absolutely unforgettable. His voice, the atmosphere he created - our guests are still talking about it months later.",
    author: "Sarah & James",
    role: "Wedding, Tauranga",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=200&q=80&auto=format&fit=crop",
  },
  {
    id: "2",
    quote: "The Buxtones brought incredible energy to our corporate event. Professional from start to finish and the dance floor was packed all night.",
    author: "Michael Chen",
    role: "Corporate Event Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop",
  },
  {
    id: "3",
    quote: "One of the most authentic artists we&apos;ve had perform at Bay Dreams. Matty&apos;s original music had the crowd completely captivated.",
    author: "Bay Dreams Festival",
    role: "Festival Organiser",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80&auto=format&fit=crop",
  },
  {
    id: "4",
    quote: "We&apos;ve booked Matty multiple times now. He perfectly reads the room and delivers exactly what the occasion needs.",
    author: "Totara Street",
    role: "Venue Owner, Mount Maunganui",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4 uppercase">
            Kind Words
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            What People <span className="font-serif italic">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-4 -left-2 md:-left-8 w-12 h-12 text-accent/20" />

            {/* Testimonial Content */}
            <div className="min-h-[300px] flex items-center">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: index === current ? 1 : 0,
                    x: index === current ? 0 : 20,
                    position: index === current ? 'relative' : 'absolute',
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-full ${index !== current ? 'pointer-events-none' : ''}`}
                >
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-foreground leading-relaxed mb-8 text-center">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === current ? 'bg-foreground' : 'bg-border'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
