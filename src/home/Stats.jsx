import { Palette, Users, Heart, Layers } from "lucide-react";

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800">
          Artify in <span className="text-purple-600">Numbers</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Artworks */}
          <div className="rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 hover:scale-105 transition">
            <Palette size={36} className="mx-auto mb-3 opacity-90" />
            <h3 className="text-4xl font-extrabold">10K+</h3>
            <p className="mt-1 opacity-90">Artworks</p>
          </div>

          {/* Artists */}
          <div className="rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br from-pink-500 to-rose-600 hover:scale-105 transition">
            <Users size={36} className="mx-auto mb-3 opacity-90" />
            <h3 className="text-4xl font-extrabold">5K+</h3>
            <p className="mt-1 opacity-90">Artists</p>
          </div>

          {/* Likes */}
          <div className="rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br from-red-500 to-orange-500 hover:scale-105 transition">
            <Heart size={36} className="mx-auto mb-3 opacity-90" />
            <h3 className="text-4xl font-extrabold">20K+</h3>
            <p className="mt-1 opacity-90">Likes</p>
          </div>

          {/* Collections */}
          <div className="rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br from-emerald-500 to-teal-600 hover:scale-105 transition">
            <Layers size={36} className="mx-auto mb-3 opacity-90" />
            <h3 className="text-4xl font-extrabold">100+</h3>
            <p className="mt-1 opacity-90">Collections</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
