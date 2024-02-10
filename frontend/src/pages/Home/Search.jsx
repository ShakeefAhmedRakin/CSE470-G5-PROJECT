const Search = () => {
  const searchFunction = (e) => {
    e.preventDefault();
    console.log("Searching");
  };

  return (
    <>
      <div className="flex items-center">
        <div className="flex justify-end items-center gap-10">
          <div className="flex-1" data-aos="fade-up" data-aos-delay="200">
            <img src="search-image.png" />
          </div>
          <div className="flex-1" data-aos="fade-up" data-aos-delay="50">
            <h1 className="font-bold text-3xl">Online Ticketing Made Easy!</h1>
            <hr className="border-black mt-2 mb-3" />
            <form className="space-y-3" onSubmit={searchFunction}>
              {/* LEAVING FROM */}
              <h2 className="text-theme-color font-semibold text-2xl">
                Leaving From
              </h2>
              <select className="select w-full bg-[#A89CFF] bg-opacity-20 font-bold">
                <option defaultValue>Select Departing Location</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
              </select>
              {/* GOING TO */}
              <h2 className="text-theme-color font-semibold text-2xl">
                Going To
              </h2>
              <select className="select w-full bg-[#A89CFF] bg-opacity-20 font-bold">
                <option defaultValue>Select Destination</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
              </select>
              {/* DEPARTING DATE */}
              <h2 className="text-theme-color font-semibold text-2xl">
                Departing On
              </h2>
              <div className="relative">
                <input
                  type="date"
                  className="select w-full bg-[#A89CFF] bg-opacity-20 font-bold"
                />
              </div>
              {/* SUBMIT BUTTON */}
              <button className="btn border-none bg-secondary-color font-bold w-full hover:bg-yellow-500">
                SEARCH
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
