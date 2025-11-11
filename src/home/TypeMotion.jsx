import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeMotion = () => {
  return (
    <div className="flex flex-col justify-center items-center  text-2xl px-6 text-center">
     

      <span className="text-purple-700 font-semibold text-4xl sm:text-xl md:text-2xl leading-relaxed max-w-3xl mt-20">
        <Typewriter
          words={[
            "An online art-sharing platform for creative minds 🎭",
            "Upload and display your stunning artworks 🖼️",
            "Explore other artists’ galleries and get inspired ✨",
            "Curate your favorite collections 💖",
            "Connect through appreciation and interaction 🤝",
            "Experience a modern, clean, and artistic UI 🌈",
          ]}
          loop={0} 
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </span>
    </div>
  );
};

export default TypeMotion;
