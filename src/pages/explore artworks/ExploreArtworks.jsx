import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "./Card";

const ExploreArtworks = () => {
  const data = useLoaderData(); 
  const artworks = data || [];

  // State
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [page, setPage] = useState(1);
  const perPage = 12; // items per page

  // Categories
  const categories = ["All", ...new Set(artworks.map((art) => art.category))];

  // Filtered & Sorted
  const filteredArtworks = artworks
    .filter((art) => {
      const matchesSearch =
        art.title.toLowerCase().includes(search.toLowerCase()) ||
        art.artist.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || art.category === category;
      const matchesMinPrice = minPrice ? art.price >= parseFloat(minPrice) : true;
      const matchesMaxPrice = maxPrice ? art.price <= parseFloat(maxPrice) : true;
      return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
    })
    .sort((a, b) => {
      if (sortOption === "priceAsc") return a.price - b.price;
      if (sortOption === "priceDesc") return b.price - a.price;
      if (sortOption === "likes") return b.likes - a.likes;
      // default: latest first (assuming _id is time-based)
      return b._id.localeCompare(a._id);
    });

  // Pagination
  const paginatedArtworks = filteredArtworks.slice(0, page * perPage);
  const hasMore = page * perPage < filteredArtworks.length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
        Explore Artworks
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by title or artist..."
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Min Price */}
        <input
          type="number"
          placeholder="Min Price"
          className="w-24 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        {/* Max Price */}
        <input
          type="number"
          placeholder="Max Price"
          className="w-24 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        {/* Sorting */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <option value="latest">Latest</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="likes">Most Liked</option>
        </select>
      </div>

      {/* Artworks Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedArtworks.length > 0 ? (
          paginatedArtworks.map((art) => <Card key={art._id} get={art} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">No artworks found.</p>
        )}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ExploreArtworks;
