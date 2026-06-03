"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, ExternalLink } from "lucide-react"

const shows = [
  {
    id: "1",
    date: "2026-06-14",
    venue: "Rubys",
    location: "Papamoa",
    ticketLink: null,
    type: "Solo",
  },
  {
    id: "2",
    date: "2026-06-20",
    venue: "Rising Tide",
    location: "Mt Maunganui",
    ticketLink: null,
    type: "Solo",
  },
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return {
    day: date.getDate(),
    month: date.toLocaleDateString('en-NZ', { month: 'short' }).toUpperCase(),
    weekday: date.toLocaleDateString('en-NZ', { weekday: 'short' }),
  }
}

export function ShowsSection() {
  return (
    <section id="shows" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4 uppercase">
              On Tour
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
              Upcoming <span className="font-serif italic">Shows</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Book a Private Event
          </a>
        </motion.div>

        <div className="space-y-4">
          {shows.map((show, index) => {
            const { day, month, weekday } = formatDate(show.date)
            
            return (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group"
              >
                <div className="flex items-center gap-4 md:gap-8 p-4 md:p-6 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
                  {/* Date */}
                  <div className="w-16 md:w-20 text-center flex-shrink-0">
                    <p className="text-2xl md:text-3xl font-light text-foreground">{day}</p>
                    <p className="text-xs tracking-widest text-muted-foreground">{month}</p>
                  </div>

                  {/* Divider */}
                  <div className="w-px h-12 bg-border hidden md:block" />

                  {/* Venue Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                        {show.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{weekday}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-foreground truncate">
                      {show.venue}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {show.location}
                    </div>
                  </div>

                  {/* Action */}
                  {show.ticketLink ? (
                    <a
                      href={show.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors inline-flex items-center gap-2"
                    >
                      <span className="hidden sm:inline">Get Tickets</span>
                      <span className="sm:hidden">Tickets</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="flex-shrink-0 px-5 py-2.5 rounded-full bg-muted text-muted-foreground text-sm">
                      Free Entry
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* No shows message - hidden by default */}
        {shows.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">No upcoming public shows at the moment.</p>
            <a
              href="#contact"
              className="inline-flex px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Book a Private Performance
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
