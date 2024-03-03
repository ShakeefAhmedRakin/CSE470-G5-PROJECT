import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();

  return (
    <>
      <div className="container mx-auto navbar py-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/support"}>Support</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <img className="h-16" src="logo.png" />
            <p
              className={`${styles.glow} font-iceland text-3xl font-bold text-theme-color`}
            >
              Blue Line
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center gap-12 text-lg px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/support"}>Support</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <h1 className="text-sm text-gray-500">{user.email}</h1>
                <button
                  onClick={() => logOut()}
                  className="btn bg-theme-color font-bold text-white border-none hover:bg-theme-color hover:shadow-xl"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="btn bg-theme-color font-bold text-white border-none hover:bg-theme-color hover:shadow-xl"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
