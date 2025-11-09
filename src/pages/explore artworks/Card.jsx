import React from "react";

const Card = ({ get }) => {
  const { imageURL, title, artist, category, likes } = get || {};

  if (!get) return null;

  return (
    <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 hover:scale-105 overflow-hidden">
      {/* Image */}
      <div className="w-full h-60 overflow-hidden">
        <img
          src={imageURL}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-gray-700 hover:text-purple-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{artist}</p>

        {/* Category */}
        <span className="text-xs w-1/4 text-center font-medium bg-pink-100 text-pink-800 px-2 py-1 rounded-full">
          {category}
        </span>

        {/* Likes and Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-700">❤️ {likes || 0}</span>
          <button className="px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white text-sm font-medium rounded-lg shadow-md hover:brightness-105 transition-all duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
