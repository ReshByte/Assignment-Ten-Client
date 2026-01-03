import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle, FaHome, FaClipboardList, FaSignOutAlt } from "react-icons/fa";

const DashboardLayout = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className={`text-xl font-bold text-purple-600 ${!sidebarOpen && "hidden"}`}>Dashboard</h2>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 focus:outline-none"
            >
              ☰
            </button>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-2">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded hover:bg-purple-100"
            >
              <FaHome /> {sidebarOpen && "Home"}
            </Link>
            <Link
              to="/dashboard/artworks"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded hover:bg-purple-100"
            >
              <FaClipboardList /> {sidebarOpen && "My Artworks"}
            </Link>
            <Link
              to="/dashboard/profile"
              className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded hover:bg-purple-100"
            >
              <FaUserCircle /> {sidebarOpen && "Profile"}
            </Link>
          </nav>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 mb-4 text-red-600 rounded hover:bg-red-100 mx-2"
          >
            <FaSignOutAlt /> {sidebarOpen && "Logout"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
