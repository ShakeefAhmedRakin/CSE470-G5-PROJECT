import { useEffect, useState } from "react";

const Allbuses = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("bus.json")
      .then((res) => res.json())
      .then((data) => {
        setBuses(data);
        setLoading(false);
      });
  }, []);

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
          <div className="grid grid-cols-2 gap-5">
            {buses.map((bus) => (
              <div
                key={bus.id}
                className="border rounded-xl flex justify-between items-start p-4"
              >
                <div className="whitespace-nowrap flex-1">
                  <h1 className="text-2xl font-medium">{bus.company}</h1>
                  <h1 className="text-gray-700">
                    {bus.departure_location} to {bus.destination_location}
                  </h1>
                  <p className="text-gray-500 text-sm">{bus.type}</p>
                  <p className="text-gray-500 text-sm">{bus.idnumber}</p>
                </div>
                <div className="whitespace-nowrap flex-1">
                  <h1 className="text-gray-700 font-medium text-lg">
                    {bus.departure_time.split("T")[1]}
                  </h1>
                  <h1 className="text-gray-700 font-medium text-lg">
                    {bus.departure_time.split("T")[0]}
                  </h1>
                </div>
                <div className="whitespace-nowrap flex-1 flex flex-col h-full justify-between items-end gap-2">
                  <p className="text-3xl font-medium">{bus.price} ৳</p>
                  <button className="btn btn-sm border-none bg-theme-color text-white hover:bg-theme-color">
                    View Seats
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Allbuses;
