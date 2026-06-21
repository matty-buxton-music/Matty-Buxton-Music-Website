import type { StreamingService, StreamingTarget } from "@/lib/streaming"

export type TrackStreamingLinks = Record<StreamingService, StreamingTarget>

export type Release = {
  id: string
  title: string
  type: string
  year: string
  image: string
  streaming: TrackStreamingLinks
}

function spotifyTrack(id: string): StreamingTarget {
  return {
    webUrl: `https://open.spotify.com/track/${id}`,
    appUrl: `spotify:track:${id}`,
  }
}

function appleMusicSong(songId: number, slug: string): StreamingTarget {
  const webUrl = `https://music.apple.com/nz/song/${slug}/${songId}`
  return {
    webUrl,
    appUrl: `music://${webUrl.replace("https://", "")}`,
  }
}

function youtubeMusicSearch(query: string): StreamingTarget {
  const webUrl = `https://music.youtube.com/search?q=${encodeURIComponent(query)}`
  return {
    webUrl,
    appUrl: `vnd.youtube://music.youtube.com/search?q=${encodeURIComponent(query)}`,
  }
}

export const topStreamingTracks: Release[] = [
  {
    id: "going-blind",
    title: "Going Blind",
    type: "Single",
    year: "2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Going%20Blind%20Cover-wE645BTICVAXi40wh2oBqtUGZ973u4.jpg",
    streaming: {
      spotify: spotifyTrack("3d9wqrv22WjVsncRRM0KW0"),
      "apple-music": appleMusicSong(1565016872, "going-blind"),
      "youtube-music": youtubeMusicSearch("Matty Buxton Going Blind"),
    },
  },
  {
    id: "ride-it-out",
    title: "Ride It Out",
    type: "Single",
    year: "2023",
    image: "/images/ride-it-out-cover.png",
    streaming: {
      spotify: spotifyTrack("1ZZsPlbtOVT4q2doy3EOFM"),
      "apple-music": appleMusicSong(1774860864, "ride-it-out"),
      "youtube-music": youtubeMusicSearch("Matty Buxton Ride It Out"),
    },
  },
  {
    id: "guessing-games",
    title: "Guessing Games",
    type: "Single",
    year: "2023",
    image: "/images/guessing-games-cover.png",
    streaming: {
      spotify: spotifyTrack("608feq6JYjaV3GRdgzOodH"),
      "apple-music": appleMusicSong(1776246995, "guessing-games"),
      "youtube-music": youtubeMusicSearch("Matty Buxton Guessing Games"),
    },
  },
]
