const UserProfile = () => {
  return (
    <div className="p-8 bg-slate-200 shadow rounded-md mt-14">
      <img
        className="w-48 h-48 mx-auto rounded-full shadow-xl"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOdHY85BD1Z6V5ElJRWk5i_GhTmMAkedS0WPftvYYbGCP17F_pAcCNktlul8WQ4geqCs&usqp=CAU"
        alt=""
      />
      <div className="mt-5 flex justify-center">
        <label
          htmlFor="upload-button"
          className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload Picture
        </label>
        <input id="upload-button" type="file" className="hidden" />
      </div>
      <div className="pb-12 text-center pt-5">
        <h1 className="text-4xl font-medium text-gray-700">Dummy User</h1>
        <p className="font-light text-gray-600 mt-3">dummymail@gmail.com</p>
      </div>
    </div>
  );
};

export default UserProfile;
