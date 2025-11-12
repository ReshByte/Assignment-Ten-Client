import React, { use, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const MyFavorites = () => {
  const { user } = use(AuthContext);
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://assignment-ten-server-ten-theta.vercel.app/favorites?email=${user.email}`)
        .then((res) => setFavorites(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleUnfavorite = (id) => {
    Swal.fire({
      title: "Remove from Favorites?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://assignment-ten-server-ten-theta.vercel.app/favorites/${id}`)
          .then((res) => {
            setFavorites(favorites.filter((fav) => fav._id !== id));
            Swal.fire("Removed!", "Artwork removed from favorites.", "success");
          })
          .catch(() =>
            Swal.fire("Error", "Failed to remove from favorites", "error")
          );
      }
    });
  };

  if (!favorites.length)
    return (
      <p className="text-center mt-10 text-gray-600">
        You haven't added any favorites yet.
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        My Favorites ❤️
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((fav) => (
          <div
            key={fav._id}
            className="card bg-white shadow-md border border-purple-100 rounded-xl overflow-hidden"
          >
            <img
              src={fav.imageURL}
              alt={fav.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{fav.title}</h3>
              <p className="text-purple-600 font-medium">{fav.category}</p>
              <p className="text-sm text-gray-500">{fav.artist}</p>

              <div className="flex gap-2 mt-3">
                <Link
                  to={`/explorer-details/${fav.artId}`}
                  className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-center hover:bg-purple-700 transition"
                >
                  View Details
                </Link>

                <button
                  onClick={() => handleUnfavorite(fav._id)}
                  className="flex-1 bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition"
                >
                  ❌ Unfavorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
