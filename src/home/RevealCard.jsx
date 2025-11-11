import React from "react";
import { Bounce } from "react-awesome-reveal";

const RevealCard = () => {
  const features = [
    "Upload Art",
    "Explore Galleries",
    "Curate Favorites",
    "Connect",
    "Like & Appreciate",
    "Share Your Work",
    "Join Events",
    "Discover Trending Art"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <Bounce cascade damping={0.2} triggerOnce>
        <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
          Welcome to Artify
        </h1>
      </Bounce>

      <Bounce direction="up" cascade damping={0.2} triggerOnce>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-800 text-center max-w-3xl mb-8">
          An online art-sharing platform where artists can upload, explore, and
          connect with art lovers. Modern UI and interactive experience.
        </p>
      </Bounce>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((item, idx) => (
          <Bounce key={idx} delay={idx * 150} triggerOnce>
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold text-purple-600 mb-2">{item}</h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </Bounce>
        ))}
      </div>
    </div>
  );
};

export default RevealCard;
