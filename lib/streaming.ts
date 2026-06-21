export type StreamingService = "spotify" | "apple-music" | "youtube-music"

export type StreamingTarget = {
  webUrl: string
  appUrl: string
}

const STORAGE_KEY = "preferred-streaming-service"

export const STREAMING_SERVICES: Record<
  StreamingService,
  { label: string; webUrl: string; appUrl: string }
> = {
  spotify: {
    label: "Spotify",
    webUrl: "https://open.spotify.com/artist/6aVd2oxEWWoOPzswn8dv65",
    appUrl: "spotify:artist:6aVd2oxEWWoOPzswn8dv65",
  },
  "apple-music": {
    label: "Apple Music",
    webUrl: "https://music.apple.com/nz/artist/matty-buxton/1557093508",
    appUrl: "music://music.apple.com/nz/artist/matty-buxton/1557093508",
  },
  "youtube-music": {
    label: "YouTube Music",
    webUrl: "https://music.youtube.com/channel/UCmattybuxton",
    appUrl: "vnd.youtube://music.youtube.com/channel/UCmattybuxton",
  },
}

/** Guess the listener's likely streaming app from device + saved preference. */
export function detectStreamingService(): StreamingService {
  if (typeof window === "undefined") return "spotify"

  const saved = localStorage.getItem(STORAGE_KEY) as StreamingService | null
  if (saved && saved in STREAMING_SERVICES) return saved

  const ua = navigator.userAgent
  const isIOS =
    /iPhone|iPad|iPod/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  const isMac = /Macintosh|Mac OS X/i.test(ua) && !isIOS

  if (isIOS || isMac) return "apple-music"
  if (/Android/i.test(ua)) return "spotify"

  return "spotify"
}

/** Open a streaming link in the native app when possible, otherwise the web player. */
export function openStreamingTarget(target: StreamingTarget, service?: StreamingService) {
  const resolved = service ?? detectStreamingService()
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  if (service) {
    localStorage.setItem(STORAGE_KEY, service)
  } else {
    localStorage.setItem(STORAGE_KEY, resolved)
  }

  if (isMobile) {
    let appOpened = false

    const onVisibilityChange = () => {
      if (document.hidden) appOpened = true
    }

    document.addEventListener("visibilitychange", onVisibilityChange)
    window.location.href = target.appUrl

    window.setTimeout(() => {
      document.removeEventListener("visibilitychange", onVisibilityChange)
      if (!appOpened) {
        window.open(target.webUrl, "_blank", "noopener,noreferrer")
      }
    }, 1500)

    return
  }

  window.open(target.webUrl, "_blank", "noopener,noreferrer")
}

/** Open the artist page in the native app when possible, otherwise the web player. */
export function openStreamingService(service?: StreamingService) {
  const resolved = service ?? detectStreamingService()
  openStreamingTarget(STREAMING_SERVICES[resolved], resolved)
}

/** Open a specific track using the listener's preferred streaming service. */
export function openTrack(
  links: Record<StreamingService, StreamingTarget>,
  service?: StreamingService
) {
  const resolved = service ?? detectStreamingService()
  openStreamingTarget(links[resolved], resolved)
}
