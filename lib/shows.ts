export type Show = {
  id: string
  date: string
  time?: string
  venue: string
  location: string
  ticketLink: string | null
  entry?: string
  type: "Solo" | "Band" | "Festival"
}

export const upcomingShows: Show[] = [
  {
    id: "jam-factory-august",
    date: "2026-08-14",
    venue: "The Jam Factory",
    location: "Tauranga",
    ticketLink: "https://www.theincubator.co.nz/event-details/nick-herbison-at-the-jam-factory",
    type: "Solo",
  },
  {
    id: "rising-tide-september",
    date: "2026-09-12",
    venue: "Rising Tide",
    location: "Mount Maunganui",
    ticketLink: null,
    type: "Solo",
  },
]
