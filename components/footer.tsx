import Link from "next/link"
import { Music, Instagram, Facebook, Youtube, Mail } from "lucide-react"

const socialLinks = [
  { href: "https://open.spotify.com/artist/mattybuxton", icon: Music, label: "Spotify" },
  { href: "https://instagram.com/mattybuxton", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/mattybuxton", icon: Facebook, label: "Facebook" },
  { href: "https://youtube.com/@mattybuxton", icon: Youtube, label: "YouTube" },
  { href: "mailto:hello@mattybuxton.com", icon: Mail, label: "Email" },
]

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#music", label: "Music" },
  { href: "#shows", label: "Shows" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-hero inline-block text-2xl tracking-wide font-bold uppercase mb-4">
              MATTY BUXTON
            </Link>
            <p className="text-white/60 leading-relaxed max-w-md mb-6">
              Neo soul, hip-hop, and funk from the coast. Creating authentic musical experiences for festivals, weddings, and events across New Zealand.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="mailto:hello@mattybuxton.com" className="hover:text-white transition-colors">
                  hello@mattybuxton.com
                </a>
              </li>
              <li>Mount Maunganui, NZ</li>
              <li>Available for bookings across New Zealand & Australia</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Matty Buxton. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
