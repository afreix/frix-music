"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Alex's performance was the highlight of our festival. The energy and connection with the audience was extraordinary.",
    author: "Sarah Johnson",
    position: "Festival Director, Soundwave",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with Alex on our collaboration track was incredible. Their production skills and creative vision took the project to another level.",
    author: "DJ Pulse",
    position: "Recording Artist",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The Resonance event series has redefined what an immersive music experience can be. Alex's attention to detail in both sound and visuals is unmatched.",
    author: "Michael Chen",
    position: "Music Critic, Beat Magazine",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What People Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
