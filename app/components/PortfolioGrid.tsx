"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 3,
    title: "Redbone (cover)",
    description: "Dynamic performances with full band arrangements",
    categories: ["Band"],
    videoUrl: "https://www.youtube.com/shorts/MrCfha8S-PU",
    videoId: "MrCfha8S-PU",
  },
  {
    id: 1,
    title: "Wicked Games (cover)",
    description: "Intimate performances showcasing raw musical talent",
    categories: ["Acoustic", "Live"],
    videoUrl: "https://www.youtube.com/shorts/UwyLoTp9g_A",
    videoId: "UwyLoTp9g_A",
  },
  {
    id: 2,
    title: "Wake Me Up (cover)",
    description: "Captivating live shows and concert highlights",
    categories: ["Acoustic", "Live"],
    videoUrl: "https://www.youtube.com/shorts/4phy-T_Iacg",
    videoId: "4phy-T_Iacg",
  },

  // {
  //   id: 4,
  //   title: "Bedroom Recording",
  //   description: "Intimate recordings from the comfort of home",
  //   thumbnailUrl: "/photos/Andrew_singing_good.jpg",
  //   categories: ["Bedroom"],
  //   videoUrl: "https://www.youtube.com/shorts/UwyLoTp9g_A",
  //   videoId: "UwyLoTp9g_A"
  // },
];

const categories = ["Acoustic", "Band"];

export default function PortfolioGrid() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            // Add autoplay parameter to the video URL
            const currentSrc = videoRef.current.src;
            if (!currentSrc.includes("autoplay=1")) {
              videoRef.current.src = `${currentSrc}${
                currentSrc.includes("?") ? "&" : "?"
              }autoplay=1&mute=1`;
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const toggleFilter = (category: string) => {
    setSelectedFilter((prev) => (prev === category ? null : category));
  };

  const filteredProjects =
    selectedFilter === null
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedFilter)
        );

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"></div>
            <img
              src="/photos/Andrew_singing_good.jpg"
              alt="Andrew performing"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl font-bold text-foreground sm:text-4xl text-gradient"
              id="music"
            >
              Music
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm deeply grateful for the opportunity to share my music with
              others and to have met so many wonderful people along the way
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300"
                    >
                      <svg
                        className="w-8 h-8 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
