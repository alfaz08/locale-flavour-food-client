import { Helmet } from "react-helmet-async";
import useMilk from "../../../hooks/useMilk";
import SingleMilkProducts from "./SingleMilkProducts";


const MilkProducts = () => {
  const [allMilk] = useMilk()
  console.log(allMilk);
  return (
    <div className="max-w-screen-2xl mx-auto mt-4">
   <Helmet>
        <title>Locale Food | Milk Products</title>
      </Helmet>
<div className="hero rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/6y1pQ2j/header-bg.png)'}}>
  <div className="hero-overlay bg-opacity-10">
  <div className="grid justify-start ">
  <div className=" text-lg  breadcrumbs text-black">
      <h2 className="text-4xl font-bold p-6">Milk and Diaries</h2>
  <ul>
    <li><a className="text-black p-4">Home</a></li> 
    <li><a className="text-black ">All Milk Products</a></li> 
  </ul>
</div>
  </div>

  </div>

</div>

<div className="flex justify-between bg-red-300">
  <div>
  <h2 className="text-xl font-bold mt-4">We found {allMilk.length} items for you!</h2>

  </div>
<div>
<h2 className="text-xl font-bold mt-4">Search</h2>
</div>
</div>
     

     {/* card item */}
     <div>
     {
      allMilk?.map(item=> <SingleMilkProducts key={item._id} item={item}></SingleMilkProducts>
        )
     }
     </div>
     



      
    </div>
  );
};

export default MilkProducts;