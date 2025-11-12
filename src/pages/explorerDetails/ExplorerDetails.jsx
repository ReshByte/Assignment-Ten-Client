import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const ExplorerDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const singleData = data.result;

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
    _id,
    likes,
  } = singleData || {};

  // Initialize like count from loader
  const [likeCount, setLikeCount] = useState(likes || 0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [liked, setLiked] = useState(false);

  // Check if this artwork is already in favorites
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://assignment-ten-server-ten-theta.vercel.app/favorites?email=${user.email}`)
        .then((res) => {
          const exists = res.data.find((fav) => fav.artId === _id);
          if (exists) setIsFavorite(true);
        })
        .catch((err) => console.log(err));
    }
  }, [_id, user]);

  // Handle Like button click
  const handleLike = async () => {
    if (!user?.email) {
      Swal.fire("Please login first", "", "warning");
      return;
    }

    if (liked) {
      Swal.fire("You already liked this artwork!", "", "info");
      return;
    }

    try {
      const res = await axios.post(`https://assignment-ten-server-ten-theta.vercel.app/arts/${_id}/like`);
      console.log(res);
      if (res.data) {
        setLikeCount(res.data.likes); 
        setLiked(true); 
        Swal.fire({
          title: "Liked ❤️",
          text: `You liked "${title}"`,
          icon: "success",
          confirmButtonColor: "#ec4899",
        });
      } else {
        Swal.fire("Failed to like the artwork", "", "error");
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Error", "Failed to like the artwork", "error");
    }
  };

 
  const handleAddToFavorites = async () => {
    if (!user?.email) {
      Swal.fire("Please login first", "", "warning");
      return;
    }

    if (isFavorite) {
      Swal.fire("Already in Favorites", "", "info");
      return;
    }

    const favoriteData = {
      artId: _id,
      title,
      artist,
      category,
      imageURL,
      userEmail: user.email,
    };

    try {
      const res = await axios.post("https://assignment-ten-server-ten-theta.vercel.app/favorites", favoriteData);
      if (res.data.success) {
        setIsFavorite(true);
        Swal.fire({
          title: "Added to Favorites ❤️",
          text: `"${title}" has been added successfully!`,
          icon: "success",
          confirmButtonColor: "#ec4899",
        });
      } else {
        Swal.fire("Already in Favorites", "", "info");
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Error", "Failed to add to favorites", "error");
    }
  };
// design
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50 flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-10">
     
      <div className="lg:w-1/2 w-full flex flex-col items-center">
        <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200">
          <img
            src={imageURL}
            alt={title}
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

     
      <div className="lg:w-1/2 w-full space-y-5">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
          {category} • {medium} • {visibility}
        </p>

        <p className="text-gray-700 leading-relaxed">
          {description || "No description available for this artwork."}
        </p>

        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <p className="font-semibold text-gray-700">Artist</p>
            <p className="text-purple-600">{artist}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Dimensions</p>
            <p className="text-gray-600">{dimensions}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Price</p>
            <p className="text-2xl font-semibold text-purple-700">${price}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Likes</p>
            <p className="text-gray-600">{likeCount}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleLike}
            disabled={liked}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium shadow-md transition-transform ${
              liked
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:scale-105"
            }`}
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
