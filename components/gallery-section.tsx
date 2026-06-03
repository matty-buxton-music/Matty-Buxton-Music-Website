"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const images = [
  {
    id: "1",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matty_Buxton_LLB-126-o0wQI1iu0oo4LZr4l3koMitrC6I0Ef.jpg",
    alt: "Matty Buxton floating in ocean playing guitar",
    category: "Coastal",
  },
  {
    id: "2",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matty_Buxton_LLB-135-5S8zKRs6UjXih5rQ75kqEfqOAQXjFp.jpg",
    alt: "Matty Buxton crouching on coastal rocks",
    category: "Portrait",
  },
  {
    id: "3",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matty_Buxton_LLB-107-oeu4WBgZpVNzwqcAisG5tyRWW6cGxs.jpg",
    alt: "Matty Buxton underwater diving shot",
    category: "Artistic",
  },
  {
    id: "4",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Matty_Buxton_LLB-065-PQ5ZUG7bvrFdj9bc8L20hMfVUs56op.jpg",
    alt: "Matty Buxton playing guitar in nature",
    category: "Performance",
  },
  {
    id: "5",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Going%20Blind%20Cover-wE645BTICVAXi40wh2oBqtUGZ973u4.jpg",
    alt: "Going Blind album cover - artistic double exposure",
    category: "Album Art",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)

  return (
    <section id="gallery" className="py-24 md:py-32 bg-charcoal text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-white/60 mb-4 uppercase">
            Behind the Music
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Photo <span className="font-serif italic">Gallery</span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedImage(image)}
              className="relative block w-full rounded-lg overflow-hidden group break-inside-avoid"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  )
}
