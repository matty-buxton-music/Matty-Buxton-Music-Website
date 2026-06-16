export type Show = {
  id: string
  date: string
  time?: string
  venue: string
  location: string
  ticketLink: string | null
  type: "Solo" | "Band" | "Festival"
}

/** Update dates, venues, and times when confirmed. */
export const upcomingShows: Show[] = [
  {
    id: "1",
    date: "2026-07-18",
    time: "TBC",
    venue: "Venue TBC",
    location: "Mount Maunganui",
    ticketLink: null,
    type: "Band",
  },
  {
    id: "2",
    date: "2026-08-02",
    time: "TBC",
    venue: "Venue TBC",
    location: "Tauranga",
    ticketLink: null,
    type: "Band",
  },
  {
    id: "3",
    date: "2026-08-16",
    time: "TBC",
    venue: "Venue TBC",
    location: "Bay of Plenty",
    ticketLink: null,
    type: "Band",
  },
  {
    id: "4",
    date: "2026-09-06",
    time: "TBC",
    venue: "Venue TBC",
    location: "New Zealand",
    ticketLink: null,
    type: "Festival",
  },
]
