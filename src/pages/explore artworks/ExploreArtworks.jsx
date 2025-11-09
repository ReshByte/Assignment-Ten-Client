import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Card from "./Card";

const ExploreArtworks = () => {
  const data = useLoaderData(); 
  const [search, setSearch] = useState("");

 
  const artworks = data || [];

 
  const filteredArtworks = artworks.filter(
    (art) =>
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
        Explore Here!
      </h1>

      
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by title or artist..."
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
