import React from 'react';

const AddArtWorks = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-rose-50 via-white to-purple-50 flex items-center justify-center px-4 py-10">
      <form
        className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-lg border border-purple-100"
      >
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent">
          ➕ Add New Artwork
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Image URL"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Artwork Title"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Category"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Medium / Tools"
            required
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Description"
            required
            className="textarea textarea-bordered w-full"
          ></textarea>
          <input
            type="text"
            placeholder="Dimensions (optional)"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            placeholder="Price (optional)"
            className="input input-bordered w-full"
          />
          <select className="select select-bordered w-full">
            <option>Public</option>
            <option>Private</option>
          </select>

          <input
            type="text"
            value="Anonymous"
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
          <input
            type="email"
            value="Not provided"
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />

          <button
            type="button"
            className="w-full mt-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-rose-500 hover:from-rose-500 hover:to-purple-600 transition-all"
          >
            Add Artwork
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddArtWorks;
