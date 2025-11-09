import React, { use, useContext } from 'react';

import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const AddArtWorks = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      imageURL: e.target.image.value,
      title: e.target.title.value,
      category: e.target.category.value,
      medium: e.target.tools.value,
      description: e.target.description.value,
      dimension: e.target.dimension.value,
      price: e.target.price.value,
      visibility: e.target.visibility.value,
      artist: e.target.artist.value,
      email: e.target.email.value
    };

    fetch('http://localhost:5000/arts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(() => navigate('/myGallery'))
    .catch(err => console.log(err));
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
      <form onSubmit={handleSubmit} className="bg-white/80 p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6">➕ Add New Artwork</h2>

        <div className="space-y-4">
          <input type="text" name="image" placeholder="Image URL" required className="input input-bordered w-full" />
          <input type="text" name="title" placeholder="Artwork Title" required className="input input-bordered w-full" />
          <input type="text" name="category" placeholder="Category" required className="input input-bordered w-full" />
          <input type="text" name="tools" placeholder="Medium / Tools" required className="input input-bordered w-full" />
          <textarea name="description" placeholder="Description" required className="textarea textarea-bordered w-full"></textarea>
          <input type="text" name="dimension" placeholder="Dimensions (optional)" className="input input-bordered w-full" />
          <input type="number" name="price" placeholder="Price (optional)" className="input input-bordered w-full" />
          <select name="visibility" className="select select-bordered w-full">
            <option>Public</option>
            <option>Private</option>
          </select>
          <input type="text" name="artist" value={user?.displayName || ""} readOnly className="input input-bordered w-full bg-gray-100" />
          <input type="email" name="email" value={user?.email || ""} readOnly className="input input-bordered w-full bg-gray-100" />

          <button type="submit" className="w-full mt-4 py-3 rounded-lg text-white bg-gradient-to-r from-purple-600 to-rose-500">
            Add Artwork
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddArtWorks;
