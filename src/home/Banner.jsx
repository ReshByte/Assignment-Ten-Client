import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const images = [
  {
    src: "https://i.ibb.co/Z69s8bWs/pexels-photo-7763082.jpg",
    title: "Discover Stunning Art",
    desc: "Explore creativity from talented artists worldwide",
  },
  {
    src: "https://i.ibb.co/6ctc0c1n/pexels-nazila-18540736.jpg",
    title: "Share Your Artwork",
    desc: "Upload, showcase, and grow your artistic journey",
  },
  {
    src: "https://i.ibb.co/FbfxsJPS/pexels-steve-2130475.jpg",
    title: "Build Your Gallery",
    desc: "Save favorites and curate your own collection",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () =>
    setCurrent((current + 1) % images.length);

  return (
    <section className="relative w-full h-[65vh] overflow-hidden">
      
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((item, i) => (
          <div key={i} className="w-full h-full shrink-0 relative">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10" />

            {/* Text + CTA */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
                  {item.title}
                </h1>
                <p className="max-w-md mb-6 text-lg opacity-90">
                  {item.desc}
                </p>
                <Link
                  to="/exploreArtworks"
                  className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold transition"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              current === i ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce text-white opacity-80">
        <ArrowDown />
      </div>
    </section>
  );
};

export default Banner;
