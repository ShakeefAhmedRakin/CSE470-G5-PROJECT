import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div
        className={` h-28 px-8 shadow-box-shadow mx-24 my-14 flex items-center justify-between`}
      >
        <div className="flex items-center ">
          <div className="h-16 mr-6">
            <img className="h-full" src="logo.png" alt="" />
          </div>
          <div>
            <p
              className={`${styles.glow} font-iceland text-3xl font-bold text-theme-color`}
            >
              BLue Line
            </p>
          </div>
        </div>
        <div>
          <button className="mx-12 text-lg font-bold">Home</button>
          <button className="mx-12 text-lg">About</button>
          <button className="mx-12 text-lg">Support</button>
          <button className="text-lg bg-theme-color font-bold text-white py-4 px-8">
            SIGN UP
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
