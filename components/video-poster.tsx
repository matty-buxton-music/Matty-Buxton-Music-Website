"use client"

import { useEffect, useState } from "react"
type VideoPosterProps = {
  src: string
  fallback: string
  alt: string
  className?: string
  captureTime?: number
}

/** Renders a poster image captured from the video file, with a photo fallback. */
export function VideoPoster({
  src,
  fallback,
  alt,
  className,
  captureTime = 1.5,
}: VideoPosterProps) {
  const [poster, setPoster] = useState(fallback)

  useEffect(() => {
    setPoster(fallback)

    const video = document.createElement("video")
    video.muted = true
    video.playsInline = true
    video.preload = "metadata"
    video.src = src

    const captureFrame = () => {
      if (!video.videoWidth || !video.videoHeight) return
      try {
        const canvas = document.createElement("canvas")
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        const ctx = canvas.getContext("2d")
        if (!ctx) return
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        setPoster(canvas.toDataURL("image/jpeg", 0.82))
      } catch {
        /* keep fallback */
      }
    }

    const onLoadedMetadata = () => {
      const target = Number.isFinite(video.duration)
        ? Math.min(captureTime, Math.max(0.5, video.duration * 0.08))
        : captureTime
      video.currentTime = target
    }

    video.addEventListener("loadedmetadata", onLoadedMetadata)
    video.addEventListener("seeked", captureFrame, { once: true })
    video.addEventListener("error", () => {})

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata)
      video.removeEventListener("seeked", captureFrame)
      video.pause()
      video.removeAttribute("src")
      video.load()
    }
  }, [src, fallback, captureTime])

  return (
    // eslint-disable-next-line @next/next/no-img-element -- poster may be a canvas data URL
    <img src={poster} alt={alt} className={`absolute inset-0 h-full w-full ${className ?? ""}`} />
  )
}
