import { useLoaderData, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { getBusStatus } from "../../utils/getBusStatus";

const UserProfile = () => {
  const data = useLoaderData();
  const today = new Date();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [previousBookings, setPreviousBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings/user/${data.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  useEffect(() => {
    const previous = bookings.filter(
      (booking) =>
        getBusStatus(booking.arrival_time, booking.departure_time) ===
          "On Route" ||
        getBusStatus(booking.arrival_time, booking.departure_time) ===
          "Completed"
    );
    const upcoming = bookings.filter(
      (booking) =>
        getBusStatus(booking.arrival_time, booking.departure_time) ===
        "Upcoming"
    );
    setPreviousBookings(previous);
    setUpcomingBookings(upcoming);
  }, [bookings]);

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
          <div className="flex flex-col gap-4 mt-4 w-[75%] mx-auto">
            {previousBookings.map((booking) => (
              <div
                key={booking._id}
                className="border border-dotted p-4 rounded-lg"
              >
                <div>
                  <h1 className="font-semibold text-gray-500 flex items-center gap-1">
                    {booking.idnumber}{" "}
                    <span
                      className={`badge badge-sm border-none text-white ${
                        getBusStatus(
                          booking.arrival_time,
                          booking.departure_time
                        ) === "Completed"
                          ? "bg-green-500"
                          : ""
                      } ${
                        getBusStatus(
                          booking.arrival_time,
                          booking.departure_time
                        ) === "On Route"
                          ? "bg-yellow-600"
                          : ""
                      } ${
                        getBusStatus(
                          booking.arrival_time,
                          booking.departure_time
                        ) === "Upcoming"
                          ? "bg-green-600"
                          : ""
                      }`}
                    >
                      {getBusStatus(
                        booking.arrival_time,
                        booking.departure_time
                      )}
                    </span>
                  </h1>
                </div>
                <hr className="my-1" />
                <div className="flex gap-5 justify-between items-center">
                  <div>
                    <h1 className="text-sm font-bold">
                      {booking.departure_location}
                    </h1>
                    <div className="whitespace-nowrap flex-1">
                      <h1 className="text-gray-700 font-medium text-xs">
                        {booking.departure_time.split("T")[1]}
                      </h1>
                      <h1 className="text-gray-700 font-medium text-xs">
                        {booking.departure_time.split("T")[0]}
                      </h1>
                    </div>
                  </div>
                  <FaArrowRightLong className="text-xl"></FaArrowRightLong>
                  <div className="text-right">
                    <h1 className="text-sm font-bold">
                      {booking.destination_location}
                    </h1>
                    <div className="whitespace-nowrap flex-1">
                      <h1 className="text-gray-700 font-medium text-xs">
                        {booking.arrival_time.split("T")[1]}
                      </h1>
                      <h1 className="text-gray-700 font-medium text-xs">
                        {booking.arrival_time.split("T")[0]}
                      </h1>
                    </div>
                  </div>
                </div>
                <hr className="my-1" />
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      navigate(`/booking/${booking._id}`);
                    }}
                    className="btn rounded-sm bg-transparent border-theme-color text-theme-color hover:bg-theme-color hover:text-white hover:border-theme-color"
                  >
                    Ticket Details
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/bus/${booking.bus_id}`);
                    }}
                    className="btn rounded-sm bg-transparent border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-orange-600"
                  >
                    Bus Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* UPCOMING BOOKINGS */}
        <div>
          <h1 className="text-center border-b-2 font-semibold text-xl p-2 rounded-full px-4 border-secondary-color">
            Upcoming Bookings
          </h1>
          <div className="flex flex-col gap-4 mt-4 w-[75%] mx-auto">
            {upcomingBookings.map((booking) => (
              <div
                key={booking._id}
                className="border border-dotted p-4 rounded-lg"
              >
                <div>
                  <h1 className="font-semibold text-gray-500 flex items-center gap-1">
                    {booking.idnumber}{" "}
                    <span
                      className={`badge badge-sm border-none text-white ${
                        getBusStatus(
                          booking.arrival_time,
                          booking.departure_time
                        ) === "Completed"
                          ? "bg-green-500"
                          : ""
                      } ${
                        getBusStatus(
                          booking.arrival_time,
                          booking.departure_time
                        ) === "On Route"
                          ? "bg-yellow-600"
                          : ""
                      } ${
                        getBusStatus(
                          booking.arrival_time,
                          booking.departure_time
                        ) === "Upcoming"
                          ? "bg-theme-color"
                          : ""
                      }`}
                    >
                      {getBusStatus(
                        booking.arrival_time,
                        booking.departure_time
                      )}
                    </span>
                  </h1>
                </div>
                <hr className="my-1" />
                <div className="flex gap-5 justify-between items-center">
                  <div>
                    <h1 className="text-sm font-bold">
                      {booking.departure_location}
                    </h1>
                    <div className="whitespace-nowrap flex-1">
                      <h1 className="text-gray-700 font-medium text-xs">
                        {booking.departure_time.split("T")[1]}
                      </h1>
                      <h1 className="text-gray-700 font-medium text-xs">
                        {booking.departure_time.split("T")[0]}
                      </h1>
                    </div>
                  </div>
                  <FaArrowRightLong className="text-xl"></FaArrowRightLong>
                  <div className="text-right">
                    <h1 className="text-sm font-bold">
                      {booking.destination_location}
                    </h1>
                    <div className="whitespace-nowrap flex-1">
                      <h1 className="text-gray-700 font-medium text-xs">
                        {booking.arrival_time.split("T")[1]}
                      </h1>
                      <h1 className="text-gray-700 font-medium text-xs">
                        {booking.arrival_time.split("T")[0]}
                      </h1>
                    </div>
                  </div>
                </div>
                <hr className="my-1" />
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      navigate(`/booking/${booking._id}`);
                    }}
                    className="btn rounded-sm bg-transparent border-theme-color text-theme-color hover:bg-theme-color hover:text-white hover:border-theme-color"
                  >
                    Ticket Details
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/bus/${booking.bus_id}`);
                    }}
                    className="btn rounded-sm bg-transparent border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-orange-600"
                  >
                    Bus Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
