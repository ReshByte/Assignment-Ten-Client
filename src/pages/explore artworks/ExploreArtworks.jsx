import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "./Card";

const ExploreArtworks = () => {
  const data = useLoaderData(); 
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const artworks = data || [];
  const categories = ["All", ...new Set(artworks.map((art) => art.category))];

  const filteredArtworks = artworks.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.artist.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || art.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
        Explore Here!
      </h1>

      <div className="flex justify-center mb-4 gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by title or artist..."
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((art) => <Card key={art._id} get={art} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No artworks found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExploreArtworks;
