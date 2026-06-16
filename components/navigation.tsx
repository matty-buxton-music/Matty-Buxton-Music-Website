"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Music, Instagram, Facebook, Youtube } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#music", label: "Music" },
  { href: "#shows", label: "Shows" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://open.spotify.com/artist/mattybuxton", icon: Music, label: "Spotify" },
  { href: "https://instagram.com/mattybuxton", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/mattybuxton", icon: Facebook, label: "Facebook" },
  { href: "https://youtube.com/@mattybuxton", icon: Youtube, label: "YouTube" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const onHero = !scrolled

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className={`font-hero text-sm md:text-base font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
              onHero ? "text-white" : "text-foreground"
            }`}
          >
            Matty Buxton
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.12em] uppercase font-medium transition-colors duration-200 ${
                  onHero
                    ? "text-white/75 hover:text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-200 ${
                  onHero
                    ? "text-white/70 hover:text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
            <Link
              href="#contact"
              className={`ml-4 px-5 py-2 text-sm tracking-[0.12em] uppercase font-semibold transition-colors duration-200 ${
                onHero
                  ? "bg-white text-charcoal hover:bg-white/90"
                  : "bg-foreground text-background hover:bg-foreground/90"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden p-2 transition-colors ${onHero ? "text-white" : "text-foreground"}`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <Link 
                  href="/" 
                  className="text-xl tracking-wide font-semibold text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  MATTY BUXTON
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-foreground"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center px-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-3xl font-light text-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="px-6 py-8 border-t border-border">
                <div className="flex items-center gap-6 mb-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 text-center text-sm tracking-wide bg-foreground text-background rounded-full"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
