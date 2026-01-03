import { Link } from "react-router";
import { UploadCloud } from "lucide-react";

const UploadCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Glass Card */}
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-12 text-center shadow-2xl">
          
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center text-white">
              <UploadCloud size={32} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Share Your Art?
          </h2>

          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Upload your artwork, get recognized, and inspire a global community of artists.
          </p>

          <Link
            to="/addArtworks"
            className="inline-block px-10 py-4 rounded-full bg-white text-purple-600 font-bold text-lg hover:bg-purple-100 hover:scale-105 transition transform shadow-lg"
          >
            Upload Artwork
          </Link>

        </div>
      </div>
    </section>
  );
};

export default UploadCTA;
