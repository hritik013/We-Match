import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import love from "../../assets/love.png";
import "./Nav.css";
import logo from '/services_photos/logo.png'
const toastInfo = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.error("Logged out", toastInfo))
      .catch((err) => console.log(err.message));
  };

  const links = (
    <>
      <li className="relative text-md font-semibold text-white transition-transform duration-300 hover:scale-110 hover:text-sky-200 hover:-translate-y-1">
        <NavLink to={"/"} className="inline-block py-2 px-4">
          Home
        </NavLink>
      </li>
      <li className="relative text-md font-semibold text-white transition-transform duration-300 hover:scale-110 hover:text-sky-200 hover:-translate-y-1">
        <NavLink to={"/about"} className="inline-block py-2 px-4">
          Our Love
        </NavLink>
      </li>
      <li className="relative text-md font-semibold text-white transition-transform duration-300 hover:scale-110 hover:text-sky-200 hover:-translate-y-1">
        <NavLink to={"/blog"} className="inline-block py-2 px-4">
          Vibes & Verses
        </NavLink>
      </li>
      {user && (
        <>
          <li className="relative text-md font-semibold text-white transition-transform duration-300 hover:scale-110 hover:text-sky-200 hover:-translate-y-1">
            <NavLink to={"/mySelection"} className="inline-block py-2 px-4">
              Your Choices
            </NavLink>
          </li>
          <li className="relative text-md font-semibold text-white transition-transform duration-300 hover:scale-110 hover:text-sky-200 hover:-translate-y-1">
            <NavLink to={"/reviews"} className="inline-block py-2 px-4">
              Reviews
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-pink-500">
      <div className="navbar text-white px-6 lg:px-12">
        {/* Mobile Menu Button */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-pink-400 bg-opacity-90 rounded-box w-52 text-white"
            >
              {links}
            </ul>
          </div>

          {/* Logo & Heart */}
          <div className="flex items-center gap-2 text-lg md:text-2xl">
          <h1 className="text-sm md:text-base italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
            We-Match
            </h1>
            <h1
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                style={{
                display: "inline-block",
                animation: "heartbeat 2s infinite ease-in-out",
                }}
            >
                <img src={logo} alt="logo_image" className="w-12 h-12" />
            </h1>
            <style>
                {`
                @keyframes heartbeat {
                    0% { transform: scale(1); }
                    25% { transform: scale(1.2); }
                    50% { transform: scale(1); }
                    75% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
                `}
            </style>
            </div>

        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex list-none lg:gap-6 menu-horizontal px-1 text-white">
            {links}
          </ul>
        </div>

        {/* User Section */}
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 items-center">
              <img
                src={user.photoURL}
                className="rounded w-6 md:w-8 border border-white"
                alt="userImage"
              />
              <p className="bg-white text-pink-600 p-1 rounded md:text-base font-medium">
                {user.displayName}
              </p>
              <button
                className="btn btn-xs md:btn-sm btn-outline border-white text-white hover:bg-white hover:text-pink-300"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              {/* Love Icon */}
              <img src={love} alt="Love Icon" className="w-6 h-6" />

              {/* Login & Register Buttons */}
              <Link to={"/login"}>
                <button className="btn btn-outline border-white text-white btn-xs md:btn-sm hover:bg-white hover:text-pink-500 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="btn btn-outline border-white text-white btn-xs md:btn-sm hover:bg-white hover:text-pink-500 transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
