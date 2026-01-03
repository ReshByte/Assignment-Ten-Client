import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const DashboardProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSave = async () => {
    try {
      await axios.patch(`https://assignment-ten-server-ten-theta.vercel.app/users/${user._id}`, { name, email });
      Swal.fire("Saved!", "Profile updated successfully", "success");
    } catch (err) {
      Swal.fire("Error", "Failed to update profile", "error");
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
      <div className="bg-white shadow p-6 rounded-lg max-w-xl">
        <div className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="font-medium text-gray-700">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-medium text-gray-700">Email</span>
            <input
              type="email"
              value={email}
              disabled
              className="px-4 py-2 border rounded-lg bg-gray-100"
            />
          </label>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
