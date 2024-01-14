import { Helmet } from "react-helmet-async";

import useSweet from "../../../hooks/useSweet";
import SingleSweetProducts from "./SingleSweetProducts";
import './sweetitem.css'
const SweetProducts = () => {
  const [allSweet] =useSweet()
  console.log(allSweet);
  return (
   

    <div className="max-w-screen-2xl mx-auto mt-4">
    <Helmet>
         <title>Locale Food | Sweet and Dessert Products</title>
       </Helmet>
 <div className="hero rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/6y1pQ2j/header-bg.png)'}}>
   <div className="hero-overlay bg-opacity-10">
   <div className="grid justify-start ">
   <div className=" text-lg  breadcrumbs text-black">
       <h2 className="text-4xl font-bold p-6">Sweet and Dessert</h2>
   <ul>
     <li><a className="text-black p-4">Home</a></li> 
     <li><a className="text-black ">All Sweet and Dessert Products</a></li> 
   </ul>
 </div>
   </div>

   </div>

 </div>

 <div className="flex justify-between bg-red-300">
   <div>
   <h2 className="text-xl font-bold mt-4">We found {allSweet.length} items for you!</h2>

   </div>
 <div>
 <h2 className="text-xl font-bold mt-4">Search</h2>
 </div>
 </div>


      {/* card item */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {
       allSweet?.map(item=> <SingleSweetProducts key={item._id} item={item}></SingleSweetProducts>
         )
      }
      </div>





     </div>
  );
};

export default SweetProducts