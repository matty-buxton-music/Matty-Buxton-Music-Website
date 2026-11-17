export type Show = {
  id: string
  date: string
  time?: string
  venue: string
  location: string
  with?: string
  ticketLink: string | null
  entry?: string
  type: string
}

export const upcomingShows: Show[] = [
  {
    id: "totara-street-december",
    date: "2026-12-19",
    venue: "Totara Street",
    location: "Mount Maunganui",
    with: "Joel Shadbolt & the Rnbeast",
    ticketLink:
      "https://totara.flicket.co.nz/events/1f49c98b-fc46-4599-9cc6-04ea668a4df1",
    type: "Matty & The Buxtones",
  },
  {
    id: "the-yard-raglan-january",
    date: "2027-01-10",
    venue: "The Yard",
    location: "Raglan",
    ticketLink: null,
    entry: "Tickets on sale soon",
    type: "Matty Buxton & Regan Perry",
  },
  {
    id: "med-lounge-january",
    date: "2027-01-15",
    venue: "The Med Lounge",
    location: "Tauranga",
    ticketLink: null,
    entry: "Free",
    type: "Solo",
  },
]
