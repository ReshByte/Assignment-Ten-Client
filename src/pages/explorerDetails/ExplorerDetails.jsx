import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";
import Swal from "sweetalert2";

const ExplorerDetails = () => {
  const data = useLoaderData();
  const singleData = data.result;

  // Destructure all values
  const {
    imageURL,
    title,
    category,
    medium,
    description,
    dimensions,
    price,
    visibility,
    artist,
    email,
    likes,
    _id,
  } = singleData || {};

  // Local state only
  const [likeCount, setLikeCount] = useState(likes || 0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Handle Like (frontend only)
  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
  };

  // Handle Add to Favorites (frontend only)
  const handleAddToFavorites = () => {
    setIsFavorite(true);
    Swal.fire({
      title: "Added to Favorites ❤️",
      text: `"${title}" has been added successfully!`,
      icon: "success",
      confirmButtonColor: "#ec4899",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50 flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-10">
      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex flex-col items-center">
        <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200">
          <img
            src={imageURL}
            alt={title}
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="lg:w-1/2 w-full space-y-5">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
          {category} • {medium} • {visibility}
        </p>

        <p className="text-gray-700 leading-relaxed">
          {description || "No description available for this artwork."}
        </p>

        {/* Grid Info */}
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <p className="font-semibold text-gray-700">Artist</p>
            <p className="text-purple-600">{artist}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Email</p>
            <p className="text-pink-600">{email}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Dimensions</p>
            <p className="text-gray-600">{dimensions}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Price</p>
            <p className="text-2xl font-semibold text-purple-700">${price}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium shadow-md hover:scale-105 transition-transform"
          >
            ❤️ Like <span>({likeCount})</span>
          </button>

          <button
            onClick={handleAddToFavorites}
            disabled={isFavorite}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium shadow-md transition-transform ${
              isFavorite
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-gradient-to-r from-purple-400 to-pink-500 text-white hover:scale-105"
            }`}
          >
            ⭐ {isFavorite ? "Added to Favorites" : "Add to Favorites"}
          </button>
        </div>

        {/* Back Button */}
        <Link
          to="/exploreArtworks"
          className="inline-block mt-8 px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          ← Back to Gallery
        </Link>
      </div>
    </div>
  );
};

export default ExplorerDetails;
