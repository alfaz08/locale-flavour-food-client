import useAllProduct from "../../hooks/useAllProduct";
import SingleDealDay from "./SingleDealDay";



const DealDay = () => {

  const [allProducts] =useAllProduct()
  
  return (
    <div>
      <div>
     <h2 className=" mt-8 font-semibold text-4xl mb-4 text-green-00">Deals of the day</h2>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

     
       {
        allProducts?.slice(0,3).map(item=> <SingleDealDay key={item._id} item={item}></SingleDealDay>)
       }

    



    


     </div>
    





    </div>
  );
};

export default DealDay;