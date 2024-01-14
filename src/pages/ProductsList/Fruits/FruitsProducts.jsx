
import { Helmet } from "react-helmet-async";
import useFruits from "../../../hooks/UseFruits";
import SingleFruitsProducts from "./SingleFruitsProducts";

const FruitsProducts = () => {
  const [allFruits] =useFruits()
  console.log(allFruits);
  return (
    
    <div className="max-w-screen-2xl mx-auto mt-4">
    <Helmet>
         <title>Locale Food | Fruits Products</title>
       </Helmet>
 <div className="hero rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/6y1pQ2j/header-bg.png)'}}>
   <div className="hero-overlay bg-opacity-10">
   <div className="grid justify-start ">
   <div className=" text-lg  breadcrumbs text-black">
       <h2 className="text-4xl font-bold p-6">Fruits </h2>
   <ul>
     <li><a className="text-black p-4">Home</a></li> 
     <li><a className="text-black ">All Fruits Products</a></li> 
   </ul>
 </div>
   </div>

   </div>

 </div>

 <div className="flex justify-between bg-red-300">
   <div>
   <h2 className="text-xl font-bold mt-4">We found {allFruits.length} items for you!</h2>

   </div>
 <div>
 <h2 className="text-xl font-bold mt-4">Search</h2>
 </div>
 </div>


      {/* card item */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {
       allFruits?.map(item=> <SingleFruitsProducts key={item._id} item={item}></SingleFruitsProducts>
         )
      }
      </div>





     </div>
  );
};

export default FruitsProducts;