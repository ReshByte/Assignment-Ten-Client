import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import artify from "../assets/Artify-logo.png";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md font-medium tracking-wide transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-sm"
        : "text-gray-700 hover:text-purple-700 hover:bg-purple-100"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-rose-50 via-white to-purple-50 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className=" px-28">
        <nav className="flex items-center justify-between py-3 md:py-4">
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

          <ul className="hidden md:flex items-center gap-2">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/exploreArtworks" className={navLinkClass}>Explore</NavLink></li>
            <li><NavLink to="/addArtworks" className={navLinkClass}>Add Artwork</NavLink></li>
            <li><NavLink to="/myGallery" className={navLinkClass}>My Gallery</NavLink></li>
            <li><NavLink to="/myFavorites" className={navLinkClass}>Favorites</NavLink></li>
          </ul>

          <div className="flex items-center gap-3">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={(e) => handleThemeToggle(e.target.checked)}
              />
              <svg
                className="swap-on fill-current w-6 h-6 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64 17.657l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zm12.728-12.728l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM12 5a1 1 0 011-1h0a1 1 0 010 2h0a1 1 0 01-1-1zm0 12a1 1 0 011-1h0a1 1 0 010 2h0a1 1 0 01-1-1zm6-6a1 1 0 011-1h0a1 1 0 010 2h0a1 1 0 01-1-1zm-12 0a1 1 0 011-1h0a1 1 0 010 2h0a1 1 0 01-1-1zm9.071 5.071l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zm-9.9-9.9l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM12 7a5 5 0 100 10 5 5 0 000-10z"/>
              </svg>
              <svg
                className="swap-off fill-current w-6 h-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.752 15.002A9 9 0 1112 3a7 7 0 009.752 12.002z"/>
              </svg>
            </label>

            {user && (
              <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
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

          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h8" />
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
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
