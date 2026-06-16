/** Visible on first paint; gentle motion without SSR opacity:0 flash. */
export const reveal = {
  initial: false,
  animate: { opacity: 1, y: 0 },
} as const

export const revealXLeft = {
  initial: false,
  animate: { opacity: 1, x: 0 },
} as const

export const revealXRight = {
  initial: false,
  animate: { opacity: 1, x: 0 },
} as const

export const revealUpLarge = {
  initial: false,
  animate: { opacity: 1, y: 0 },
} as const

export const revealXIn = {
  initial: false,
  animate: { opacity: 1, x: 0 },
} as const
