
import useAllProduct from "../../hooks/useAllProduct";
import useShopDetails from "../../hooks/useShopDetails";

import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";

import { AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";
import SingleBeveragesProduct from "../ProductsList/Beverages/SingleBeveragesProduct";

const SingleShopDetails = () => {
  const [singleShop] =useShopDetails()
  const [sortProduct, setSortProduct] = useState([]);
  const [allProducts] =useAllProduct()
  console.log('shop',singleShop);
  const year = new Date(singleShop.date).getFullYear();
  const shopProduct = allProducts?.filter(allProduct=>allProduct.email===singleShop.email)
  console.log('shop',shopProduct);
  const handleSort = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    const sortedData = shopProduct.slice().sort((a, b) => {
      return selectedValue === "asc"
        ? a.productPrice - b.productPrice
        : b.productPrice - a.productPrice;
    });
    setSortProduct(sortedData);
  };



  return (
    <div className="max-w-screen-2xl mx-auto mt-4 text-white">
     
      <div
        className="hero rounded-xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/nC7KhPT/vendor-header-bg.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-10">
        <div className="card card-side  shadow-xl mt-4">
        <figure>
          <img
            src={singleShop.image}
            className="w-42 h-48 p-2"
            alt="Movie"
          />
        </figure>
        <div className="card-body">

          <div className="flex gap-6">
          <div className="">
          <h2 className="">Since {year}</h2>
          <h2 className="card-title"> {singleShop.shop}</h2>
          <h2>Rating</h2>
          
          
          <p>Shop your daily necessary.</p>
          </div>
         

         <div className="">
         <h2 className="flex gap-2 mt-4 mb-2"><CiLocationOn  className="mt-1 text-xl"/> Address:{singleShop.address}</h2>
          <h2 className="flex gap-2 mb-2"><LuPhoneCall  className="mt-1 text-xl"/> call us: {singleShop.phone}</h2>
          <div className="flex text-md gap-2 ">
            <h2 className="text-md font-bold ">Follow Us</h2>

            <FaFacebook className=" text-2xl" />
            <AiFillInstagram className="text-2xl"/>
            <IoLogoYoutube className="text-2xl"/>

            <AiFillTwitterCircle className="text-2xl"/>
          </div>
         </div>
          </div>
          
          <div className="card-actions justify-end">
          
          </div>
        </div>
      </div>
        </div>
      </div>

      <div className="flex justify-between bg-green-100 rounded-lg">
        <div>
          <h2 className="text-xl text-black font-bold mt-4 ml-4">
            We found {shopProduct.length} items for you!
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
      <div className="grid text-black grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {sortProduct.length > 0
          ? sortProduct?.map((item) => (
              <SingleBeveragesProduct
                key={item._id}
                item={item}
              ></SingleBeveragesProduct>
            ))
          : shopProduct?.map((item) => (
              <SingleBeveragesProduct
                key={item._id}
                item={item}
              ></SingleBeveragesProduct>
            ))}
      </div>





     </div>
  );
};

export default SingleShopDetails;