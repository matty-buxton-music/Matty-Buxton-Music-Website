export type PerformanceVideo = {
  id: string
  title: string
  category: string
  src: string
  mimeType: string
  /** Optional static fallback while a frame is captured from the video */
  poster?: string
}

export const performanceVideos: PerformanceVideo[] = [
  {
    id: "ladies",
    title: "Ladies",
    category: "Music Video",
    src: "/videos/ladies.mp4",
    mimeType: "video/mp4",
  },
  {
    id: "promo",
    title: "Matty & The Buxtones — Promo Edit",
    category: "Live",
    src: "/videos/promo.mp4",
    mimeType: "video/mp4",
  },
]

export const featuredVideo = performanceVideos[0]
