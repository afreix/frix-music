"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Frix it was an honor to be there I love how our night turned out so thank you again for the performance! ",
    author: "Fan",
  },
  {
    quote:
      "Hey!! Omg thank you for having us! Please let us know when you perform again. We love live music and you have an incredible gift!",
    author: "Fan",
  },
];

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
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <p className="font-bold text-white">- {testimonial.author}</p>
                {/* <p className="text-gray-400">{testimonial.position}</p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
