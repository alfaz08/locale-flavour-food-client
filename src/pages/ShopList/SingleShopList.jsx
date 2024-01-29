import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";

const SingleShopList = ({ item }) => {
  console.log(item);
  const year = new Date(item.date).getFullYear();
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mt-4">
        <figure>
          <img
            src={item.image}
            className="w-42 h-48"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="">Since {year}</h2>
          <h2 className="card-title"> {item.shop}</h2>
          <h2>Rating</h2>
          <h2 className="flex gap-2"><CiLocationOn  className="mt-1 text-xl"/> Adress:{item.address}</h2>
          <h2 className="flex gap-2"><LuPhoneCall  className="mt-1 text-xl"/> call us:{item.phone}</h2>

          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
          <button
            
             className="btn bg-green-300 hover:text-white hover:bg-green-700">
              
              Visit Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShopList;
