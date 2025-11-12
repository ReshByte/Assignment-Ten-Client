import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestSixCard = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    axios
      .get("https://assignment-ten-server-ten-theta.vercel.app/arts/latest")
      .then((res) => setArts(res.data))
      .catch((err) => console.error(err));

    // Initialize AOS
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!arts.length)
    return <p className="text-center mt-10 text-gray-600">No artworks available.</p>;

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2
        data-aos="fade-down"
        className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
      >
        Latest Artworks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {arts.map((art, idx) => (
          <div
            key={art._id}
            data-aos="fade-up"
            data-aos-delay={idx * 150} // staggered effect
            data-aos-once="true"
            className="relative rounded-3xl shadow-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 opacity-30" />
            <img
              src={art.imageURL}
              alt={art.title}
              className="w-full h-64 object-cover relative z-10"
            />
            <div className="relative z-20 p-5 bg-white/60 backdrop-blur-md flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">{art.title}</h3>
              <p className="text-purple-600 font-medium">{art.category}</p>
              <p className="text-gray-700 text-sm">By: {art.artist}</p>
              <div className="mt-3">
                <Link
                  to={`/explorer-details/${art._id}`}
                  className="block w-full py-2 px-4 text-white font-semibold rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all shadow-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default LatestSixCard;
