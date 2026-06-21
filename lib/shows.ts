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
    id: "rubys-july",
    date: "2026-07-12",
    time: "3pm – 6pm",
    venue: "Ruby's",
    location: "Papamoa",
    ticketLink: null,
    entry: "Free entry",
    type: "Solo",
  },
  {
    id: "beach-bar-july",
    date: "2026-07-24",
    time: "4pm – 7pm",
    venue: "Beach Bar",
    location: "Papamoa",
    ticketLink: null,
    type: "Solo",
  },
]
