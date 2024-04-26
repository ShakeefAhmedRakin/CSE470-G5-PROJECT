import { useLoaderData } from "react-router-dom";
import { CiUser } from "react-icons/ci";

const UserProfile = () => {
  const data = useLoaderData();

  return (
    <div className="p-8 my-24 container mx-auto">
      <div className="flex justify-center text-[100px]">
        <CiUser></CiUser>
      </div>
      <div className="mt-5 flex justify-center"></div>
      <div className="pb-12 text-center pt-5">
        <h1 className="text-4xl font-medium text-gray-700">{data.name}</h1>
        <p className="font-light text-gray-600 mt-3">{data.email}</p>
        <p className="font-light text-gray-600 mt-3">{data.phone}</p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {/* PAST BOOKINGS */}
        <div>
          <h1 className="text-center border-b-2 font-semibold text-xl p-2 rounded-full px-4 border-theme-color">
            Previous Bookings
          </h1>
        </div>
        {/* UPCOMING BOOKINGS */}
        <div>
          <h1 className="text-center border-b-2 font-semibold text-xl p-2 rounded-full px-4 border-secondary-color">
            Upcoming Bookings
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
