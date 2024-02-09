const Banner = () => {
  return (
    <div className='flex  mx-24  items-center '>
      <div className='w-3/5'>
        <p className='text-6xl mb-6 font-semibold'>
          Book Your Seats with Ease <br /> and Convenience
        </p>
        <p className='text-3xl mb-6'>
          Book your bus seats with ease and travel in comfort. Experience the
          convenience of choosing your preferred seats with just a few clicks.
        </p>
        <div className='flex items-center mb-4'>
          <div className='bg-theme-color w-5 h-5 rounded-full'></div>
          <p className='text-2xl ml-3'>Select your favorite seats visually.</p>
        </div>
        <div className='flex items-center mb-6'>
          <div className='bg-amber-500 w-5 h-5 rounded-full'></div>
          <p className='text-2xl ml-3'>Select your favorite seats visually.</p>
        </div>
        <div>
      <button className="text-lg bg-theme-color font-bold text-white py-4 px-8">SIGN UP</button>
      <button className="text-lg bg-amber-400 ml-4 font-bold  py-4 px-8">BOOK NOW</button>
        </div>

      </div>
      <div className='w-2/5'>
        <img className='w-full p-2' src='banner-pic.png' alt='' />
      </div>
    </div>
  );
};

export default Banner;
