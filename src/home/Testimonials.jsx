import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Digital Artist",
    img: "https://i.pravatar.cc/150?img=32",
    text: "Artify helped me showcase my art professionally and connect with amazing artists around the world.",
  },
  {
    name: "Tanvir Hasan",
    role: "Photographer",
    img: "https://i.pravatar.cc/150?img=12",
    text: "The platform is clean, inspiring, and easy to use. I love discovering new artwork every day!",
  },
  {
    name: "Nusrat Jahan",
    role: "Illustrator",
    img: "https://i.pravatar.cc/150?img=47",
    text: "Uploading my artwork and getting feedback has never been easier. Artify feels like home.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-gray-800">
          What <span className="text-purple-600">Artists</span> Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-center italic mb-6">
                “{item.text}”
              </p>

              {/* User */}
              <div className="flex flex-col items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-4 border-purple-400 mb-3"
                />
                <h4 className="font-semibold text-gray-800">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
