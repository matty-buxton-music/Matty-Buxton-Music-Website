"use client"

import { detectStreamingService, openStreamingService } from "@/lib/streaming"

type ListenNowButtonProps = {
  className?: string
}

export function ListenNowButton({ className }: ListenNowButtonProps) {
  const handleClick = () => {
    openStreamingService(detectStreamingService())
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        className ??
        "px-6 py-2 bg-white/95 text-charcoal font-sans text-[0.65rem] font-medium tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
      }
    >
      Listen Now
    </button>
  )
}
