import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";

const SingleShopList = ({ item }) => {
  console.log(item);
  const year = new Date(item.date).getFullYear();
  return (
    <div>
      <div className="card card-side border border-green-300 shadow-xl mt-4">
        <figure>
          <img
            src={item.image}
            className="w-42 h-48 p-2"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="">Since {year}</h2>
          <h2 className="card-title"> {item.shop}</h2>
          <h2>Rating</h2>
          <h2 className="flex gap-2 mt-6"><CiLocationOn  className="mt-1 text-xl"/> Address:{item.address}</h2>
          <h2 className="flex gap-2"><LuPhoneCall  className="mt-1 text-xl"/> call us:{item.phone}</h2>

          <p>Shop your daily necessary.</p>
          
          <div className="card-actions justify-end">
          <Link to={`/shopDetails/${item._id}`}>
          <button 
            
             className="btn bg-green-300 hover:text-white hover:bg-green-700">
              
              Visit Store
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShopList;
