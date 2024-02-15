import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={` h-28 px-8 shadow-box-shadow mx-24 my-14 flex items-center justify-between`}
      >
        <div className="flex items-center ">
          <Link to={'/'}>
          <div className="h-16 mr-6">
            <img className="h-full" src="logo.png" alt="" />
          </div>
          </Link>
          <div>
            <p
              className={`${styles.glow} font-iceland text-3xl font-bold text-theme-color`}
            >
              BLue Line
            </p>
          </div>
        </div>
        <div>
          <Link to={"/"}>
            <button className="mx-12 text-lg font-bold">Home</button>
          </Link>
          <Link to={"/about"}>
            <button className="mx-12 text-lg">About</button>
          </Link>
          <Link to={"/support"}>
            <button className="mx-12 text-lg">Support</button>
          </Link>
          <button
            onClick={() => navigate("/login")}
            className="btn btn-lg bg-theme-color font-bold text-white border-none hover:bg-theme-color hover:shadow-xl"
          >
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
