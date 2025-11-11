import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const topArtists = [
  { id: 1, name: "Alice Monroe", avatar: "https://randomuser.me/api/portraits/women/68.jpg", artworks: 24 },
  { id: 2, name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/65.jpg", artworks: 18 },
  { id: 3, name: "Sophia Lee", avatar: "https://randomuser.me/api/portraits/women/44.jpg", artworks: 32 },
  { id: 4, name: "Michael Smith", avatar: "https://randomuser.me/api/portraits/men/34.jpg", artworks: 20 },
  { id: 5, name: "Emma Johnson", avatar: "https://randomuser.me/api/portraits/women/51.jpg", artworks: 27 },
];

const TopArtists = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold  text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Top Artists of the Week
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {topArtists.map((artist, idx) => (
          <motion.div
            key={artist.id}
            data-aos="fade-up"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-tr from-pink-50 to-purple-50 dark:from-pink-900 dark:to-purple-900 shadow-lg rounded-3xl p-6 flex flex-col items-center cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: [0, 5, -5, 0] }}
              className="relative"
            >
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-pink-300 dark:ring-purple-400"
              />
            </motion.div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4 mb-1 text-center">
              {artist.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {artist.artworks} Artworks
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full text-sm font-medium shadow-md transition-all"
            >
              Follow
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopArtists;
