
import { useState } from "react";
import useAllProduct from "../../hooks/useAllProduct";

import SingleMilkProducts from "../../pages/ProductsList/MilkProducts/SingleMilkProducts";
import useCategory from "../../hooks/useCategory";



const PopularProduct = () => {


  

  const [allProducts] = useAllProduct() 
 

  const [sortProduct, setSortProduct] = useState([]);


  const sortedAllProducts = allProducts.sort((a, b) => b.popularity - a.popularity);
  
  
  const handleSort = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    const sortedData = sortedAllProducts.slice().sort((a, b) => {
      return selectedValue === "asc"
        ? a.productPrice - b.productPrice
        : b.productPrice - a.productPrice;
    });
    setSortProduct(sortedData);
  };
 
 
  
  



  return (
    <div>
     

     <div className="flex justify-between">
     <div>
     <h2 className=" mt-8 font-semibold text-4xl mb-4 text-green-00">Popular Products</h2>
     </div>
     <div className="flex gap-6 mt-10 ">
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
    
       

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

      {sortProduct.length > 0
          ? sortProduct?.slice(0,12).map((item) => (
            <SingleMilkProducts
              key={item._id}
              item={item}
            ></SingleMilkProducts>
          ))
          : sortedAllProducts?.slice(0,12).map((item) => (
            <SingleMilkProducts
              key={item._id}
              item={item}
            ></SingleMilkProducts>
          ))}
      {
      }
      </div>
    
    </div>
  );
};

export default PopularProduct;