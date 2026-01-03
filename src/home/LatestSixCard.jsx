import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestSixCard = () => {
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://assignment-ten-server-ten-theta.vercel.app/arts/latest")
      .then((res) => setArts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));

    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2
        data-aos="fade-down"
        className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
      >
        Latest Artworks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {loading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse rounded-3xl shadow-2xl overflow-hidden h-[420px] w-full flex flex-col"
              >
                <div className="h-64 w-full bg-gray-300" />
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div className="space-y-3">
                    <div className="h-5 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                  <div className="h-10 bg-gray-300 rounded w-full mt-4"></div>
                </div>
              </div>
            ))
          : arts.length
          ? arts.map((art, idx) => (
              <div
                key={art._id}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="relative rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 h-[420px] w-full flex flex-col border-2 border-transparent hover:border-purple-300"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 opacity-30" />
                
                {/* Image container with fixed height */}
                <div className="relative z-10 h-64 w-full overflow-hidden">
                  <img
                    src={art.imageURL}
                    alt={art.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content container */}
                <div className="relative z-20 p-5 bg-white/70 backdrop-blur-md flex flex-col justify-between flex-1">
                  {/* Text content with consistent spacing */}
                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 line-clamp-1">
                      {art.title}
                    </h3>
                    <p className="text-purple-600 font-medium line-clamp-1">
                      {art.category}
                    </p>
                    <p className="text-gray-700 text-sm line-clamp-1">
                      By: {art.artist}
                    </p>
                    
                    {/* Price and date section */}
                    <div className="flex justify-between items-center text-sm text-gray-600 pt-3 border-t border-gray-200">
                      <span className="line-clamp-1 flex-1 pr-2">
                        Price: ${art.price || "N/A"}
                      </span>
                      <span className="whitespace-nowrap text-gray-500">
                        {art.date || "2026-01-03"}
                      </span>
                    </div>
                  </div>
                  
                  {/* Button - always at bottom */}
                  <Link
                    to={`/explorer-details/${art._id}`}
                    className="w-full py-3 px-4 text-white font-semibold rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all shadow-lg text-center mt-4 block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          : <p className="text-center mt-10 text-gray-600 col-span-4">No artworks available.</p>}
      </div>
    </section>
  );
};

export default LatestSixCard;