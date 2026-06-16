"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { reveal } from "@/lib/motion"

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Private Function",
  "Venue Booking",
  "Festival",
  "Other",
]

export function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormState("success")
    
    // Reset after showing success
    setTimeout(() => {
      setFormState("idle")
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        date: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.3em] text-muted-foreground mb-4 uppercase">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
              Book Your <span className="font-serif italic">Experience</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Whether you&apos;re planning a wedding, corporate event, or private celebration, let&apos;s create something unforgettable together.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Email</h3>
                <a href="mailto:hello@mattybuxton.com" className="text-muted-foreground hover:text-accent transition-colors">
                  hello@mattybuxton.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Based In</h3>
                <p className="text-muted-foreground">Mount Maunganui, New Zealand</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Performs Across</h3>
                <p className="text-muted-foreground">New Zealand & Australia</p>
              </div>
            </div>

            {/* Image */}
            <div className="mt-12 aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop"
                alt="Mount Maunganui coastline"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-secondary rounded-2xl p-8 md:p-10">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-accent mb-6" />
                  <h3 className="text-2xl font-light text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I&apos;ll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground"
                        placeholder="+64 21 xxx xxxx"
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground appearance-none cursor-pointer"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-foreground resize-none"
                      placeholder="Tell me about your event..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
