import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const LatestSixCard = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/arts/latest")
      .then((res) => setArts(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!arts.length) return <p className="text-center mt-10 text-gray-600">No artworks available.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent">
        Latest Artworks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {arts.map((art) => (
          <div
            key={art._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-purple-100"
          >
            <img
              src={art.imageURL}
              alt={art.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-gray-800">{art.title}</h3>
              <p className="text-purple-600 font-medium">{art.category}</p>
              <p className="text-gray-500">By: {art.artist}</p>
              <Link
                to={`/explorer-details/${art._id}`}
                className="mt-2 inline-block px-4 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-purple-600 to-rose-500 hover:from-rose-500 hover:to-purple-600 transition-all text-center"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestSixCard;
