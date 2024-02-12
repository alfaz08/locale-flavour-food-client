
import useAuth from '../../../../hooks/useAuth';
import useMyProduct from '../../../../hooks/useMyProduct';
import useOrder from '../../../../hooks/useOrder';
import useProfile from '../../../../hooks/useProfile';
import { RiListUnordered } from "react-icons/ri";

import { AiFillShop } from "react-icons/ai";
import { LuDollarSign } from "react-icons/lu";



const VendorHome = () => {
  const {user} =useAuth()
  const userInfo =useProfile()
  const [orders] = useOrder();
  const [myProduct]=useMyProduct()




  return (

<div>
<div className="mx-auto border-green-400 border-y-4 py-4 text-center md:w-4/12 my-8">
      <h3 className="text-3xl uppercase ">Welcome {user?.displayName} Dashboard</h3>
    <h2 className='text-xl'>Whole data about your business here</h2>
      </div>
    <div className='mx-auto text-center md:w-4/12 my-8 '>
    <div className="stats shadow ">
  
  <div className="stat bg-green-200">
    <div className="stat-figure text-secondary">
    <AiFillShop className='text-4xl'/>

    </div>
    <div className="stat-title">Total Products</div>
    <div className="stat-value">{myProduct?.length}</div>
    
  </div>
  
  <div className="stat bg-green-200">
    <div className="stat-figure text-secondary">
    <RiListUnordered  className='text-4xl'/>

    </div>
    <div className="stat-title">Total Orders</div>
    <div className="stat-value">{orders?.length}</div>
   
  </div>
  
  <div className="stat bg-green-200">
    <div className="stat-figure text-secondary">
    <LuDollarSign className='text-4xl'/>

    </div>
    <div className="stat-title">Total Revenue</div>
    <div className="stat-value">1,5000</div>
   
  </div>
  
</div>
    </div>


 <div className='mx-auto text-center md:w-4/12 my-8'>
 <p className='text-lg font-bold mt-1'>Shop Owner: {user?.displayName}</p>
 <p className='text-lg font-bold mt-1'>Shop Owner: {userInfo?.shop}</p>
        <p className='text-lg font-bold mt-1'>Email: {user?.email}</p>
        <p className='text-lg font-bold mt-1'>Roll: {userInfo?.roll}</p>
        <p className='text-lg font-bold mt-1'>Shop Address: {userInfo?.address}</p>
        <p className='text-lg font-bold mt-1'>Shop Phone: {userInfo?.phone}</p>
        
        <p className='text-lg font-bold mt-1'>Membership: {userInfo?.membership}</p>
 </div>
 




    </div>
  );
};

export default VendorHome;