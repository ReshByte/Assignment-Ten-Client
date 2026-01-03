import { NavLink, Link } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import artify from "../assets/Artify-logo.png";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navClass = ({ isActive }) =>
    `px-4 py-2 rounded-md font-medium transition block ${
      isActive
        ? "bg-purple-600 text-white"
        : "text-gray-800 hover:bg-purple-100"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-purple-50 to-rose-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={artify} className="h-10 w-10" alt="logo" />
            <span className="text-2xl font-bold text-purple-700">
              Artify
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-2">
            <li><NavLink to="/" className={navClass}>Home</NavLink></li>
            <li><NavLink to="/exploreArtworks" className={navClass}>Explore</NavLink></li>
            <li><NavLink to="/about" className={navClass}>About</NavLink></li>

            {user && (
              <>
                <li><NavLink to="/dashboard" className={navClass}>Dashboard</NavLink></li>
                <li><NavLink to="/addArtworks" className={navClass}>Add Artwork</NavLink></li> {/* Added */}
                <li><NavLink to="/myGallery" className={navClass}>My Gallery</NavLink></li>
                <li><NavLink to="/myFavorites" className={navClass}>Favorites</NavLink></li>
              </>
            )}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            
            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
              className="btn btn-ghost text-xl"
              title="Toggle Theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {!user ? (
              <>
                <Link
                  to="/auth/login"
                  className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700"
                >
                  Login
                </Link>

                <Link
                  to="/auth/register"
                  className="btn btn-sm border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                >
                  Register
                </Link>
              </>
            ) : (
              /* Profile Dropdown */
              <div className="dropdown dropdown-end">
                <label tabIndex={0}>
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="w-10 h-10 rounded-full border-2 border-purple-500 cursor-pointer"
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="font-semibold text-center text-gray-800">
                    {user.displayName}
                  </li>
                  <div className="divider my-1"></div>
                  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                  <li><NavLink to="/addArtworks">Add Artwork</NavLink></li> {/* Added */}
                  <li>
                    <button
                      onClick={signOutUser}
                      className="text-red-500"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden btn btn-ghost text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden pb-4 space-y-2">
            <li><NavLink to="/" className={navClass}>Home</NavLink></li>
            <li><NavLink to="/exploreArtworks" className={navClass}>Explore</NavLink></li>
            <li><NavLink to="/about" className={navClass}>About</NavLink></li>

            {user ? (
              <>
                <li><NavLink to="/dashboard" className={navClass}>Dashboard</NavLink></li>
                <li><NavLink to="/addArtworks" className={navClass}>Add Artwork</NavLink></li> {/* Added */}
                <li><NavLink to="/myGallery" className={navClass}>My Gallery</NavLink></li>
                <li><NavLink to="/myFavorites" className={navClass}>Favorites</NavLink></li>
                <li>
                  <button
                    onClick={signOutUser}
                    className="btn btn-sm w-full btn-error text-white"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><NavLink to="/auth/login" className={navClass}>Login</NavLink></li>
                <li><NavLink to="/auth/register" className={navClass}>Register</NavLink></li>
              </>
            )}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
