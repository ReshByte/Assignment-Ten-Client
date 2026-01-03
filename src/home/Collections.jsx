const collections = [
  {
    title: "Digital Dreams",
    subtitle: "Modern & AI Art",
    img: "https://i.ibb.co/7R4QJkS/art.jpg",
  },
  {
    title: "Nature & Life",
    subtitle: "Photography & Realism",
    img: "https://i.ibb.co/Z69s8bWs/pexels-photo-7763082.jpg",
  },
  {
    title: "Abstract Waves",
    subtitle: "Colors & Emotions",
    img: "https://i.ibb.co/FbfxsJPS/pexels-steve-2130475.jpg",
  },
];

const Collections = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-gray-800">
          Popular <span className="text-purple-600">Collections</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Collections;
