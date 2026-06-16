export type PerformanceVideo = {
  id: string
  title: string
  category: string
  src: string
  mimeType: string
  /** Static fallback until a frame is captured from the file */
  poster: string
}

export const performanceVideos: PerformanceVideo[] = [
  {
    id: "ladies",
    title: "Ladies — Official Music Video",
    category: "Original",
    src: "/videos/ladies.mp4",
    mimeType: "video/mp4",
    poster: "/thumbnails/ladies.jpg",
  },
  {
    id: "promo",
    title: "Matty & The Buxtones — Full Band Live",
    category: "Band",
    src: "/videos/promo.mp4",
    mimeType: "video/mp4",
    poster: "/thumbnails/promo.jpg",
  },
  {
    id: "with-you",
    title: "With You",
    category: "Original",
    src: "/videos/with-you.mp4",
    mimeType: "video/mp4",
    poster: "/thumbnails/guessing-games.jpg",
  },
  {
    id: "alcoholic",
    title: "Alcoholic v3",
    category: "Live",
    src: "/videos/alcoholic.m4v",
    mimeType: "video/mp4",
    poster: "/thumbnails/going-blind.jpg",
  },
]

export const featuredVideo = performanceVideos[0]
