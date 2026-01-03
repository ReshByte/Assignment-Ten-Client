import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Glass Card */}
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-10 text-center shadow-2xl">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Stay Inspired ✨
          </h2>

          <p className="text-white/90 mb-8 text-lg">
            Get the latest artworks, artists & collections directly in your inbox
          </p>

          {/* Input */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative w-full sm:w-80">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <button className="px-8 py-3 rounded-full bg-white text-purple-600 font-semibold hover:bg-purple-100 transition shadow-lg">
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
