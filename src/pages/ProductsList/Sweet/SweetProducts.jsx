import { Helmet } from "react-helmet-async";

import useSweet from "../../../hooks/useSweet";
import SingleSweetProducts from "./SingleSweetProducts";
import './sweetitem.css'
import { useState } from "react";
import { Link } from "react-router-dom";
const SweetProducts = () => {
  const [allSweet] =useSweet()
  console.log(allSweet);
  const [sortProduct, setSortProduct] = useState([]);
  console.log(sortProduct);
  const handleSort = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    const sortedData = allSweet.slice().sort((a, b) => {
      return selectedValue === "asc"
        ? a.productPrice - b.productPrice
        : b.productPrice - a.productPrice;
    });
    setSortProduct(sortedData);
  };
  return (
   

    <div className="max-w-screen-2xl mx-auto mt-4">
   
      <div
        className="hero rounded-xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/6y1pQ2j/header-bg.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-10">
          <div className="grid justify-start ">
            <div className=" text-lg  breadcrumbs text-black">
              <h2 className="text-4xl font-bold p-6">Sweet </h2>
              <ul>
                <li>
                  <Link to="/">
                  <a className="text-black p-4">Home</a>
                  </Link>
                </li>
                <li>
                  <a className="text-black ">All Sweet Products</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between bg-green-100 rounded-lg">
        <div>
          <h2 className="text-xl font-bold mt-4 ml-4">
            We found {allSweet.length} items for you!
          </h2>
        </div>

        <div>
          <div className="flex mr-4 ">
            <select
              className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
              name="sortBy"
              id="sortBy"
              onChange={handleSort}
            >
              <option value="">
                {" "}

                Sort
              </option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* card item */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {sortProduct.length > 0
          ? sortProduct?.map((item) => (
              <SingleSweetProducts
                key={item._id}
                item={item}
              ></SingleSweetProducts>
            ))
          : allSweet?.map((item) => (
              <SingleSweetProducts
                key={item._id}
                item={item}
              ></SingleSweetProducts>
            ))}
      </div>





     </div>
  );
};

export default SweetProducts