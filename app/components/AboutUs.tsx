"use client";

import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <h3 className="text-3xl font-bold mb-4 text-white">
              Music that Matters
            </h3> */}
            <p className="text-gray-300 mb-6">
              Hello I'm Frix, a musician, artist, and event producer based in
              Miami. I began my musical journey in my mid 20s and started by
              teaching myself guitar. Soon after, I was singing, songwriting,
              and playing the piano and drums.
            </p>
            <p className="text-gray-300">
              My love for life comes through my music which I see as a way to
              connect with myself and others. Not bound by any genre or
              instrument, I am excited to continue growing, collaborating and
              learning. Music will be a part of my life forever and for that,
              I'm grateful. Having performed in Miami, New York, Colombia and
              Mexico, I draw inspiration from many cultures and artists.
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
                src="/photos/about_me.jpg"
                alt="Frix in studio"
                className="rounded-lg h-80 w-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
