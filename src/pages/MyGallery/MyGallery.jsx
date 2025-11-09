import React, { use, useEffect, useState } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';

const MyGallery = () => {
  const { user } = use(AuthContext);
  const [arts, setArts] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios.get(`http://localhost:5000/arts/user?email=${user.email}`)
        .then(res => setArts(res.data))
        .catch(err => console.log(err));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/arts/${id}`)
          .then(res => {
            if (res.data.success) {
              setArts(arts.filter(art => art._id !== id)); 
              Swal.fire(
                'Deleted!',
                'Your artwork has been deleted.',
                'success'
              )
            }
          })
          .catch(err => {
            console.error(err);
            Swal.fire('Error', 'Failed to delete artwork', 'error');
          });
      }
    })
  }

  if (!arts.length) return <p className="text-center mt-10 text-gray-600">You haven't added any artworks yet.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent">
        My Art Gallery
      </h2>
      
      {arts.map((art) => (
        <div key={art._id} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border-2 border-purple-200 rounded-lg shadow-sm hover:shadow-md transition bg-gradient-to-r from-rose-50 via-white to-purple-50">
          <img src={art.imageURL} alt={art.title} className="w-24 h-24 object-cover rounded border-2 border-purple-300" />
          
          <div className="flex-1 flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-gray-800">{art.title}</h3>
            <p className="text-purple-600 font-medium">{art.category}</p>
            <p className="text-gray-500">{art.medium}</p>
          </div>

          <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-rose-500 hover:from-rose-500 hover:to-purple-600 text-white rounded-lg transition">
              Update
            </button>
            <button 
              onClick={() => handleDelete(art._id)}
              className="px-4 py-2 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-purple-600 hover:to-rose-500 text-white rounded-lg transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyGallery;
