export type PerformanceVideo = {
  id: string
  title: string
  category: string
  src: string
  mimeType: string
}

export const performanceVideos: PerformanceVideo[] = [
  {
    id: "promo",
    title: "Matty & The Buxtones — Promo",
    category: "Band",
    src: "/videos/promo.mp4",
    mimeType: "video/mp4",
  },
  {
    id: "alcoholic",
    title: "Alcoholic",
    category: "Live",
    src: "/videos/alcoholic.m4v",
    mimeType: "video/x-m4v",
  },
  {
    id: "ladies",
    title: "Ladies",
    category: "Original",
    src: "/videos/ladies.mp4",
    mimeType: "video/mp4",
  },
]

export const featuredVideo = performanceVideos[0]
