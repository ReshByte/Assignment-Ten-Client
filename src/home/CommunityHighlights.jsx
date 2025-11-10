import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CommunityHighlights = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const highlights = [
    {
      title: "Top Artists",
      description: "Discover the most creative artists in our community.",
      icon: "🎨",
      color: "from-pink-400 to-purple-500",
    },
    {
      title: "Trending Artworks",
      description: "Explore artworks that are trending right now.",
      icon: "🔥",
      color: "from-yellow-400 to-red-500",
    },
    {
      title: "Curated Collections",
      description: "Enjoy specially curated collections by our team.",
      icon: "🖼️",
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Community Favorites",
      description: "See artworks loved and appreciated by the community.",
      icon: "💖",
      color: "from-indigo-400 to-purple-600",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Community Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className={`p-6 rounded-3xl shadow-2xl bg-gradient-to-r ${item.color} text-white transform transition-transform hover:scale-105 hover:shadow-3xl`}
          >
            <div className="text-5xl mb-4 animate-bounce">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm opacity-90">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityHighlights;
