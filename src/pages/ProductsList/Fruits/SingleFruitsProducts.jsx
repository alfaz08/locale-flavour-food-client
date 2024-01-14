import { GrCart } from "react-icons/gr";
import { useState } from "react";
import { GrView } from "react-icons/gr";
import "./fruititem.css";
import CartToogle from "../../../shared/CartToggle/CartToogle";
import { Link } from "react-router-dom";
const SingleFruitsProducts = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);


  const {
    _id,
    email,
    productCategory,
    productDetails,
    productExpireDate,
    productImage,
    productManufacturingDate,
    productName,
    productPrice,
    productQuantity,
    productionCost,
    profitMarin,
    shopAddress,
    shopImage,
    shopName,
  } = item;

 

  return (
    <div className="">
      <div className="card w-56 border mt-4 shadow-xl hover:border border-green-200">
      <Link to={`/productDetails/${_id}`}>
        <div
          className={`figure relative`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <figure className="px-10 pt-10 ">
            <img src={productImage} alt="Shoes" className="rounded-xl h-36" />
          </figure>
          {isHovered && (
            <div className="overlay">
               
              <div className="tooltip tooltip-open " data-tip="See Details">
                <GrView
                  className="text-4xl  cursor-pointer"
                  
                />
              </div>
            
            </div>
          )}
        </div>
        </Link>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{productName}</h2>
          <h2 className="">
            By: <span className="text-green-700 ">{shopName}</span>
          </h2>

          <div className="flex justify-between gap-6">
            <h2 className="mt-3 font-bold">$:{productPrice}</h2>
            <button className="btn bg-green-300 hover:text-white hover:bg-green-700">
              <span>
                <GrCart />
              </span>{" "}
              Add
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SingleFruitsProducts;