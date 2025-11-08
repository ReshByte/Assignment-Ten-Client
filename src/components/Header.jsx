import React, { use } from "react";
import { Link, NavLink } from "react-router";
import artify from "../assets/Artify-logo.png";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);
  
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md font-medium tracking-wide transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-sm"
        : "text-gray-700 hover:text-purple-700 hover:bg-purple-100"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-rose-50 via-white to-purple-50 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        
        <Link to="/" className="flex items-center gap-2">
          <img
            src={artify}
            alt="Artify logo"
            className="h-12 w-12 rounded-full border-2 border-purple-200 shadow-sm"
          />
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-rose-600 to-purple-700 bg-clip-text text-transparent">
            Artify
          </span>
        </Link>

        {/* Center Menu */}
        <ul className="hidden md:flex items-center gap-2">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/exploreArtworks" className={navLinkClass}>Explore</NavLink></li>
          <li><NavLink to="/addArtworks" className={navLinkClass}>Add Artwork</NavLink></li>
          <li><NavLink to="/myGallery" className={navLinkClass}>My Gallery</NavLink></li>
          <li><NavLink to="/myFavorites" className={navLinkClass}>Favorites</NavLink></li>
        </ul>

        {/* Right — User / Auth Buttons */}
        <div className="flex items-center gap-3">
          {user && (
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || "User"}
            >
              <img
                src={
                  user.photoURL ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-purple-400 hover:scale-105 shadow-sm transition-transform"
              />
            </div>
          )}

          {user ? (
            <button
              onClick={signOutUser}
              className="btn btn-sm bg-gradient-to-r from-purple-600 to-rose-500 border-none text-white font-medium shadow-sm hover:from-rose-500 hover:to-purple-600 transition-all"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn btn-sm bg-gradient-to-r from-purple-600 to-rose-500 border-none text-white font-medium shadow-sm hover:from-rose-500 hover:to-purple-600"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-sm bg-gradient-to-r from-rose-500 to-purple-600 border-none text-white font-medium shadow-sm hover:from-purple-600 hover:to-rose-500"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-8 6h8"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content right-0 mt-3 w-52 bg-white rounded-box shadow-lg border border-purple-100"
          >
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/exploreArtworks" className={navLinkClass}>Explore</NavLink></li>
            <li><NavLink to="/addArtworks" className={navLinkClass}>Add Artwork</NavLink></li>
            <li><NavLink to="/myGallery" className={navLinkClass}>My Gallery</NavLink></li>
            <li><NavLink to="/myFavorites" className={navLinkClass}>Favorites</NavLink></li>
            <li className="mt-2 border-t pt-2">
              {user ? (
                <button
                  onClick={signOutUser}
                  className="btn btn-sm bg-gradient-to-r from-purple-600 to-rose-500 text-white border-none"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/auth/login"
                    className="btn btn-sm bg-gradient-to-r from-purple-600 to-rose-500 text-white border-none mb-1"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className="btn btn-sm bg-gradient-to-r from-rose-500 to-purple-600 text-white border-none"
                  >
                    Register
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
