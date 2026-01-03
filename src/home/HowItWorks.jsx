import { UserPlus, Upload, Heart } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800">
          How <span className="text-purple-600">Artify</span> Works
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <UserPlus size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Create Account
            </h3>
            <p className="text-gray-600">
              Sign up easily and become part of the Artify community.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-pink-100 text-pink-600">
              <Upload size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Upload Artwork
            </h3>
            <p className="text-gray-600">
              Share your creative work with art lovers worldwide.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition">
            <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Explore & Save
            </h3>
            <p className="text-gray-600">
              Discover inspiring art and save your favorites.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
