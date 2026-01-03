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
    artistPhoto,
    artistEmail,
    _id,
    likes,
  } = singleData || {};

  const [likeCount, setLikeCount] = useState(likes || 0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [liked, setLiked] = useState(false);
  const [totalArtworks, setTotalArtworks] = useState(0);
  const [relatedArts, setRelatedArts] = useState([]);

  // Fetch artist total artworks
  useEffect(() => {
    if (artistEmail) {
      axios
        .get(`https://assignment-ten-server-ten-theta.vercel.app/arts?artistEmail=${artistEmail}`)
        .then((res) => setTotalArtworks(res.data.length))
        .catch((err) => console.log(err));
    }
  }, [artistEmail]);

  // Check if favorited
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

  // Fetch related arts (same category)
  useEffect(() => {
    if (category) {
      axios
        .get(`https://assignment-ten-server-ten-theta.vercel.app/arts?category=${category}`)
        .then((res) => {
          const filtered = res.data.filter((art) => art._id !== _id);
          setRelatedArts(filtered);
        })
        .catch((err) => console.log(err));
    }
  }, [category, _id]);

  // Like handler
  const handleLike = async () => {
    if (!user?.email) return Swal.fire("Please login first", "", "warning");
    if (liked) return Swal.fire("You already liked this artwork!", "", "info");

    try {
      const res = await axios.post(`https://assignment-ten-server-ten-theta.vercel.app/arts/${_id}/like`);
      if (res.data) {
        setLikeCount(res.data.likes);
        setLiked(true);
        Swal.fire({ title: "Liked ❤️", text: `You liked "${title}"`, icon: "success", confirmButtonColor: "#ec4899" });
      }
    } catch (err) {
      Swal.fire("Error", "Failed to like the artwork", "error");
    }
  };

  // Favorites handler
  const handleAddToFavorites = async () => {
    if (!user?.email) return Swal.fire("Please login first", "", "warning");
    if (isFavorite) return Swal.fire("Already in Favorites", "", "info");

    const favoriteData = { artId: _id, title, artist, category, imageURL, userEmail: user.email };
    try {
      const res = await axios.post("https://assignment-ten-server-ten-theta.vercel.app/favorites", favoriteData);
      if (res.data.success) {
        setIsFavorite(true);
        Swal.fire({ title: "Added to Favorites ❤️", text: `"${title}" has been added!`, icon: "success", confirmButtonColor: "#ec4899" });
      }
    } catch (err) {
      Swal.fire("Error", "Failed to add to favorites", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50 px-6 py-12 space-y-10">
      {/* Back Button */}
      <Link to="/exploreArtworks" className="inline-block text-purple-700 font-medium hover:underline">
        ← Back to Gallery
      </Link>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Artwork Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200">
            <img
              src={imageURL || "https://via.placeholder.com/400x400?text=No+Image"}
              alt={title}
              className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Artwork Details */}
        <div className="lg:w-1/2 w-full space-y-5">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
            {category} • {medium} • {visibility}
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{description || "No description available."}</p>

          {/* Key Information */}
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

          {/* Artist Info */}
          <div className="mt-6 p-5 bg-white border border-gray-200 rounded-xl shadow-md flex items-center gap-5">
            <img
              src={artistPhoto || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
              alt={artist}
              className="w-16 h-16 rounded-full border-2 border-purple-400 object-cover"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-800">{artist}</h3>
              <p className="text-gray-600 text-sm">{artistEmail}</p>
              <p className="text-sm text-purple-600 font-medium">Total Artworks: {totalArtworks}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={handleLike}
              disabled={liked}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium shadow-md transition-transform ${
                liked ? "bg-gray-400 text-white cursor-not-allowed" : "bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:scale-105"
              }`}
            >
              ❤️ Like <span>({likeCount})</span>
            </button>

            <button
              onClick={handleAddToFavorites}
              disabled={isFavorite}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium shadow-md transition-transform ${
                isFavorite ? "bg-gray-400 text-white cursor-not-allowed" : "bg-gradient-to-r from-purple-400 to-pink-500 text-white hover:scale-105"
              }`}
            >
              ⭐ {isFavorite ? "Added to Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>

      {/* Related / Suggested Items */}
      {relatedArts.length > 0 && (
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Artworks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedArts.map((art) => (
              <Link
                key={art._id}
                to={`/explorer-details/${art._id}`}
                className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
              >
                <img src={art.imageURL} alt={art.title} className="w-full h-48 object-cover" />
                <div className="p-3 bg-white">
                  <h4 className="font-semibold text-gray-800">{art.title}</h4>
                  <p className="text-purple-600 text-sm">{art.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Reviews / Ratings Placeholder */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Reviews & Ratings</h3>
        <p className="text-gray-600">No reviews yet.</p>
      </div>
    </div>
  );
};

export default ExplorerDetails;
