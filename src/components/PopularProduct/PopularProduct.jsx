
import { useState } from "react";
import useAllProduct from "../../hooks/useAllProduct";

import SingleMilkProducts from "../../pages/ProductsList/MilkProducts/SingleMilkProducts";
import useCategory from "../../hooks/useCategory";
import useVegetables from "../../hooks/useVegetables";
import useFruits from "../../hooks/UseFruits";
import useMilk from "../../hooks/useMilk";
import useBeverages from "../../hooks/useBeverages";
import useSweet from "../../hooks/useSweet";
import useSnack from "../../hooks/useSnack";
import SingleProducts from "./SingleProducts";



const PopularProduct = () => {


  

  const [allProducts] = useAllProduct() 
  const [allCategory] = useCategory()
  const [allVegetables] =useVegetables()
  const [allFruits] = useFruits();
  const [allMilk] =useMilk()
  const [allBeverages] =useBeverages()
  const [allSweet] =useSweet()
  const [allSnack] =useSnack()
  
  const [selectedCategory, setSelectedCategory] = useState('All');


  const [sortProduct, setSortProduct] = useState([]);
  


  const sortedAllProducts = allProducts.sort((a, b) => b.popularity - a.popularity);
  
  
  const handleSort = (event) => {
   

    if(event==='vegetables'){
      const sortedVegetables = allVegetables.sort((a, b) => b.popularity - a.popularity);
      setSortProduct(sortedVegetables)
      setSelectedCategory('vegetables')
    } else if(event==='fruit'){
      const sortedFruits = allFruits.sort((a, b) => b.popularity - a.popularity);
      setSortProduct(sortedFruits)
      setSelectedCategory('fruit')
    }else if(event==='milk'){
      const sortedMilk = allMilk.sort((a, b) => b.popularity - a.popularity);
      setSortProduct(sortedMilk)
      setSelectedCategory('milk')
    }else if(event==='beverage'){
      const sortedBeverage = allBeverages.sort((a, b) => b.popularity - a.popularity);
      setSortProduct(sortedBeverage)
      setSelectedCategory('beverage')
    }else if(event==='sweet'){
      const sortedSweet = allSweet.sort((a, b) => b.popularity - a.popularity);
      setSortProduct(sortedSweet)
      setSelectedCategory('sweet')
    }else if(event==='snack'){
      const sortedSnack = allSnack.sort((a, b) => b.popularity - a.popularity);
      setSortProduct(sortedSnack)
      setSelectedCategory('snack')
    }else{
      setSortProduct(sortedAllProducts)
      setSelectedCategory('All')
    }
  };
 
 
  
  



  return (
    <div>
     

     <div className="grid  md:flex justify-between ">
     <div>
     <h2 className=" mt-8 font-semibold text-4xl mb-4 text-green-00">Popular Products</h2>
     </div>
     <div className="grid grid-cols-2 md:flex gap-6 mt-10 ">
     
  <button onClick={() => handleSort("All")}
  className={selectedCategory === "All" ? "text-red-400" : ""}
  >All</button>
  
  {allCategory?.map(item => (
    <button
      onClick={() => handleSort(item.category)}
      className={selectedCategory === item.category ? "text-red-400" : ""}
      key={item.id}
    >
      <h2 className="text-xl">{item.category}</h2>
    </button>
  ))}
     </div>
     </div>
    
       

      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

      {sortProduct.length > 0
          ? sortProduct?.slice(0,10).map((item) => (
            <SingleProducts
              key={item._id}
              item={item}
            ></SingleProducts>
          ))
          : sortedAllProducts?.slice(0,10).map((item) => (
            <SingleProducts
              key={item._id}
              item={item}
            ></SingleProducts>
          ))}
      {
      }
      </div>
    
    </div>
  );
};

export default PopularProduct;