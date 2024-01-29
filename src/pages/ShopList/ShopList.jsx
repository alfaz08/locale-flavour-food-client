import { FaSearch } from "react-icons/fa";
import useAllVendor from "../../hooks/useAllVendor";
import SingleShopList from "./SingleShopList";

const ShopList = () => {

  const [allVendor] =useAllVendor()

  return (
    <div className="container mx-auto">


      <div className="grid justify-center mt-4 p-4">
        <h2 className="text-6xl font-bold text-center">Shop List</h2>
        <div>
          <div className="relative flex mt-4">
            <input
              type="text"
              placeholder="Search for item"
              className="w-[500px] h-16 pl-4 pr-10 py-2 input input-bordered rounded-full border-green-600"
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-2xl text-green-600" />
          </div>
        </div>
      </div>





      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">


     {
       allVendor?.map(item=> <SingleShopList item={item} key={item._id}></SingleShopList> )
     }

      </div>






    </div>
  );
};

export default ShopList;
