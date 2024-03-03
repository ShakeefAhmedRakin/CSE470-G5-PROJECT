import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineEventSeat } from "react-icons/md";
import { PiSteeringWheel } from "react-icons/pi";
import { toast } from "sonner";
const BusDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/bus/get/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      });
  }, [params]);

  const selectSeat = (seatNumber) => {
    if (!selectedSeats.includes(seatNumber)) {
      if (selectedSeats.length < 4) {
        setSelectedSeats([...selectedSeats, seatNumber]);
      } else {
        toast.error("Select Upto 4 Seats.");
      }
    } else {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    }
  };

  return (
    <div className="min-h-screen mx-auto container">
      {loading ? (
        <>
          <div className="flex justify-center items-center pt-40">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-20">
            <div className="h-fit flex-1">
              <div className="flex justify-between">
                <div>
                  <h1 className="font-semibold text-3xl">{details.company}</h1>
                  <h1 className="font-semibold text-gray-500">
                    {details.idnumber}
                  </h1>
                  <h1 className="font-semibold text-gray-500 mb-4">
                    {details.type}
                  </h1>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-3xl font-medium">{details.price} ৳</p>
                </div>
              </div>
              <hr className="border-dotted"></hr>
              <div className="flex justify-between my-4">
                <h1 className="text-lg flex items-center gap-2 font-medium text-[#828489]">
                  <MdOutlineEventSeat className="text-3xl"></MdOutlineEventSeat>
                  Available
                </h1>
                <h1 className="text-lg flex items-center gap-2 font-medium text-red-400">
                  <MdOutlineEventSeat className="text-3xl"></MdOutlineEventSeat>
                  Booked
                </h1>
                <h1 className="text-lg flex items-center gap-2 font-medium text-[#1DD100]">
                  <MdOutlineEventSeat className="text-3xl"></MdOutlineEventSeat>
                  Selected
                </h1>
              </div>
              <hr className="border-dotted"></hr>
              <div className="mt-4">
                <div className="flex justify-end">
                  <button className="btn w-24 border-none btn-disabled">
                    <PiSteeringWheel className="text-3xl text-black" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-x-12 gap-y-4 mt-4">
                {details.seats.map((seat) => (
                  <div key={seat.seat_number} className="flex justify-end">
                    <button
                      className={`btn border-none w-24 ${
                        selectedSeats.includes(seat.seat_number)
                          ? "bg-[#1cd100] hover:bg-[#4daf3e]"
                          : seat.status === "available"
                          ? "bg-[#f1f1f1] hover:bg-[#e4e4e4]"
                          : "bg-red-400 hover:bg-red-600"
                      } `}
                      onClick={() => {
                        if (seat.status === "available") {
                          selectSeat(seat.seat_number);
                        } else {
                          toast.error("Seat is not available");
                        }
                      }}
                    >
                      {seat.seat_number}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:max-w-md">
              <h1 className="font-semibold text-2xl mb-4">
                Your Selected Seats
              </h1>
              <hr className="border-dotted mb-4"></hr>
              <div className="bg-[#F7F8F8] p-5 rounded-xl">
                <div className="grid grid-cols-2 gap-16">
                  <h1 className="flex items-center gap-1 font-bold whitespace-nowrap">
                    Seats
                    <span className="bg-theme-color badge badge-lg text-white">
                      {selectedSeats.length}
                    </span>
                  </h1>
                  <h1 className="font-bold flex justify-end">Price</h1>
                </div>
                <hr className="my-1 border-dotted"></hr>
                <div className="grid grid-cols-2 gap-x-16 gap-y-2">
                  {selectedSeats.map((seat) => (
                    <>
                      <div className="font-medium">{seat}</div>
                      <div className="text-right">{details.price}</div>
                    </>
                  ))}
                </div>
                <hr className="mb-5"></hr>
                <div className="flex justify-between my-1">
                  <h1 className="font-bold">Total Price</h1>
                  <h1 className="font-semibold">
                    BDT{" "}
                    <span id="total-price">
                      {selectedSeats.length * details.price}
                    </span>
                  </h1>
                </div>
                <div
                  id="discounted-amount-container"
                  className="flex justify-between my-1 opacity-0"
                >
                  <h1 className="font-bold">Discounted Amount</h1>
                  <h1 className="font-semibold">
                    BDT <span id="discounted-amount">0</span>
                  </h1>
                </div>

                <div className="flex justify-between my-1">
                  <h1 className="font-bold">Grand Total</h1>
                  <h1 className="font-semibold">
                    BDT <span id="grand-total">0</span>
                  </h1>
                </div>
              </div>
              {/* <div className="p-4">
                <h1 className="font-bold">Passenger Name*</h1>
                <input
                  type="text"
                  className="input input-bordered border-gray-300 w-full my-3"
                  placeholder="Enter Your Name"
                ></input>
                <h1 className="font-bold">Phone Number*</h1>
                <input
                  type="text"
                  id="phone-number-input"
                  className="input input-bordered border-gray-300 w-full my-3"
                  placeholder="Enter Your Number"
                ></input>
                <h1 className="font-bold">Email ID</h1>
                <input
                  type="text"
                  className="input input-bordered border-gray-300 w-full my-3"
                  placeholder="Enter Your Email"
                ></input>
                <button
                  id="next-button"
                  className="btn w-full bg-[#1DD100] hover:bg-[#1DD100] text-white btn-disabled"
                >
                  Next
                </button>
                <div className="flex justify-around gap-3 mt-5">
                  <span className="link text-gray-500">
                    Terms and Condition
                  </span>
                  <span className="link text-gray-500">
                    Cancellation Policy
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BusDetails;
