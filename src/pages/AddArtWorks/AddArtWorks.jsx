import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AddArtWorks = () => {
    const {user} = use(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const image = e.target.image.value;
        const title = e.target.title.value;
        const category = e.target.category.value;
        const tools = e.target.tools.value;
        const description = e.target.description.value;
        const dimension = e.target.dimension.value;
        const price = e.target.price.value;
        const visibility = e.target.visibility.value;
        const anonymous = e.target.anonymous.value;
        const email = e.target.email.value;

        console.log(image,title,category,tools,description,dimension,price,visibility,anonymous,email);
    }

  return (
    <section className="min-h-screen bg-gradient-to-r from-rose-50 via-white to-purple-50 flex items-center justify-center px-4 py-10">
      <form onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-lg border border-purple-100"
      >
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent">
          ➕ Add New Artwork
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name='image'
            placeholder="Image URL"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name='title'
            placeholder="Artwork Title"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name='category'
            placeholder="Category"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name='tools'
            placeholder="Medium / Tools"
            required
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Description"
            name='description'
            required
            className="textarea textarea-bordered w-full"
          ></textarea>
          <input
            type="text"
            name='dimension'
            placeholder="Dimensions (optional)"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            name='price'
            placeholder="Price (optional)"
            className="input input-bordered w-full"
          />
          <select
            name='visibility' 
          className="select select-bordered w-full">
            <option>Public</option>
            <option>Private</option>
          </select>

          <input
            type="text"
            name='anonymous'
            value={`${user && user.displayName}`}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
          <input
            type="email"
            name='email'
           value={`${user && user.email}`}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />

          <button
            type="submit"
            className="cursor-pointer w-full mt-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-rose-500 hover:from-rose-500 hover:to-purple-600 transition-all"
          >
            Add Artwork
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddArtWorks;
