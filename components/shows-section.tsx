"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Clock, ExternalLink } from "lucide-react"
import { upcomingShows } from "@/lib/shows"
import { reveal } from "@/lib/motion"

function formatDate(dateString: string) {
  const date = new Date(`${dateString}T12:00:00`)
  return {
    day: date.getDate(),
    month: date.toLocaleDateString("en-NZ", { month: "short" }).toUpperCase(),
    weekday: date.toLocaleDateString("en-NZ", { weekday: "short" }),
  }
}

export function ShowsSection() {
  return (
    <section id="shows" className="py-24 md:py-32 bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          {...reveal}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="font-sans text-sm tracking-[0.3em] text-muted-foreground mb-4 uppercase">
              On Tour
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold uppercase tracking-[0.04em] text-foreground">
              Upcoming Shows
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.08em] uppercase text-foreground hover:text-accent transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Book a Private Event
          </a>
        </motion.div>

        <div className="space-y-4">
          {upcomingShows.map((show, index) => {
            const { day, month, weekday } = formatDate(show.date)

            return (
              <motion.div
                key={show.id}
                {...reveal}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group"
              >
                <div className="flex items-center gap-4 md:gap-8 p-4 md:p-6 border border-border hover:border-foreground/20 transition-colors">
                  <div className="w-16 md:w-20 text-center flex-shrink-0">
                    <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">{day}</p>
                    <p className="font-sans text-xs tracking-widest text-muted-foreground">{month}</p>
                  </div>

                  <div className="w-px h-12 bg-border hidden md:block" />

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-sans text-xs px-2 py-0.5 uppercase tracking-wider bg-secondary text-foreground">
                        {show.type}
                      </span>
                      <span className="font-sans text-xs text-muted-foreground">{weekday}</span>
                      {show.time && (
                        <span className="font-sans text-xs text-muted-foreground inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {show.time}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-medium text-foreground truncate">
                      {show.venue}
                    </h3>
                    <div className="flex items-center gap-1 font-sans text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {show.location}
                    </div>
                  </div>

                  {show.ticketLink ? (
                    <a
                      href={show.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 px-5 py-2.5 bg-foreground text-background font-sans text-sm font-medium tracking-[0.08em] uppercase hover:bg-foreground/90 transition-colors inline-flex items-center gap-2"
                    >
                      <span className="hidden sm:inline">Tickets</span>
                      <span className="sm:hidden">Tickets</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : show.entry ? (
                    <span className="flex-shrink-0 px-5 py-2.5 bg-secondary font-sans text-sm text-foreground tracking-[0.06em] uppercase">
                      {show.entry}
                    </span>
                  ) : (
                    <span className="flex-shrink-0 px-5 py-2.5 bg-secondary font-sans text-sm text-muted-foreground tracking-[0.06em] uppercase">
                      Details soon
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
