import { Helmet } from "react-helmet-async";

import useVegetables from "../../../hooks/useVegetables";
import SingleVegetablesProducts from "./SingleVegetableProducts";

const VegetablesProducts = () => {
  const [allVegetables] =useVegetables()
  
  return (
    

    <div className="max-w-screen-2xl mx-auto mt-4">
    <Helmet>
         <title>Locale Food | Vegetables Products</title>
       </Helmet>
 <div className="hero rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/6y1pQ2j/header-bg.png)'}}>
   <div className="hero-overlay bg-opacity-10">
   <div className="grid justify-start ">
   <div className=" text-lg  breadcrumbs text-black">
       <h2 className="text-4xl font-bold p-6">Vegetables</h2>
   <ul>
     <li><a className="text-black p-4">Home</a></li> 
     <li><a className="text-black ">All Vegetables Products</a></li> 
   </ul>
 </div>
   </div>

   </div>

 </div>

 <div className="flex justify-between bg-red-300">
   <div>
   <h2 className="text-xl font-bold mt-4">We found {allVegetables.length} items for you!</h2>

   </div>
 <div>
 <h2 className="text-xl font-bold mt-4">Search</h2>
 </div>
 </div>


      {/* card item */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {
       allVegetables?.map(item=> <SingleVegetablesProducts key={item._id} item={item}></SingleVegetablesProducts>
         )
      }
      </div>





     </div>
  );
};

export default VegetablesProducts;