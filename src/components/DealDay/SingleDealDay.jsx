import { useState, useEffect } from 'react';
import { GrCart } from 'react-icons/gr';
import './deal.css';
import { Link } from 'react-router-dom';

const SingleDealDay = ({ item }) => {
  const initialCountdown = 15 * 24 * 60 * 60; // Set the initial countdown duration to 15 days in seconds
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const displayCountdown = () => {
    const days = Math.floor(countdown / (24 * 60 * 60));
    const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((countdown % (60 * 60)) / 60);
    const seconds = countdown % 60;

    return (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max mb-4">
        {days > 0 && (
          <div className="flex flex-col p-2 bg-white text-black rounded-box ">
            <span className="countdown font-mono text-5xl">{formatTime(days)}</span>
            days
          </div>
        )}
        {hours > 0 && (
          <div className="flex flex-col p-2  rounded-box bg-white text-black">
            <span className="countdown font-mono text-5xl">{formatTime(hours)}</span>
            hours
          </div>
        )}
        {minutes > 0 && (
          <div className="flex flex-col p-2 rounded-box bg-white text-black">
            <span className="countdown font-mono text-5xl">{formatTime(minutes)}</span>
            min
          </div>
        )}
        <div className="flex flex-col p-2 rounded-box bg-white text-black">
          <span className="countdown font-mono text-5xl">{formatTime(seconds)}</span>
          sec
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="relative">
        <img src="https://i.ibb.co/SRh9N5K/2.png" className="blur-image rounded-xl" alt="" />
        <div className="absolute top-12 left-0 w-full h-full flex flex-col items-center justify-center">
          {displayCountdown()} {/* Display the countdown */}
          <div className="card w-96 bg-gray-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.productName}</h2>
              <h2 className="">
                By: <span className="text-green-700 ">{item.shopName}</span>
              </h2>
              <div className="flex justify-between gap-6">
                <h2 className="mt-3 font-bold">$:{item.productPrice}</h2>
                <Link to={`/productDetails/${item._id}`}>
                  <button className="btn bg-green-300 hover:text-white hover:bg-green-700">
                    <span>
                      <GrCart />
                    </span>{" "}
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDealDay;