"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" id="about">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-bold mb-4 text-white">Music is My Language</h3>
            <p className="text-gray-300 mb-6">
              I'm Alex Rivera, a musician, artist, and event producer based in Los Angeles. My journey began in
              underground clubs, experimenting with electronic sounds and pushing the boundaries of conventional music.
            </p>
            <p className="text-gray-300">
              Over the years, I've evolved my sound to blend electronic elements with organic instruments, creating
              immersive sonic experiences that tell stories and evoke emotions. Beyond creating music, I'm passionate
              about curating events that bring together diverse artistic expressions.
            </p>
          </motion.div>
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-gray-800 rounded-lg transform -rotate-3 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Alex Rivera in studio"
                className="rounded-lg h-80 w-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
