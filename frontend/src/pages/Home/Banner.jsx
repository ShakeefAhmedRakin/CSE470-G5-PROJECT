const Banner = () => {
  return (
    <div className="flex items-center gap-10">
      <div className="w-3/5">
        <p className="text-5xl mb-6 font-semibold">
          Book Your Seats with Ease <br /> and Convenience
        </p>
        <p className="text-2xl mb-6 text-gray-500">
          Book your bus seats with ease and travel in comfort. Experience the
          convenience of choosing your preferred seats with just a few clicks.
        </p>
        <div className="flex items-center mb-4 text-gray-500">
          <div className="bg-theme-color w-5 h-5 rounded-full"></div>
          <p className="text-xl ml-3">Select your favorite seats visually.</p>
        </div>
        <div className="flex items-center mb-6 text-gray-500">
          <div className="bg-amber-500 w-5 h-5 rounded-full"></div>
          <p className="text-xl ml-3">
            Receive your tickets directly to your inbox.
          </p>
        </div>
        <div className="flex  gap-4">
          <button className="btn btn-lg bg-theme-color font-bold text-white border-none hover:bg-theme-color hover:shadow-xl">
            SIGN UP
          </button>

          <button className="btn btn-lg bg-secondary-color font-bold border-none hover:bg-secondary-color hover:shadow-xl">
            BOOK NOW
          </button>
        </div>
      </div>
      <div className="w-2/5">
        <img className="w-full p-2" src="banner-pic.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
