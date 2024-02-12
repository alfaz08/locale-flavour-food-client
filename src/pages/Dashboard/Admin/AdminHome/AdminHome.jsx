import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useProfile from "../../../../hooks/useProfile";
import { FaUsers } from "react-icons/fa6";
import { GoListUnordered } from "react-icons/go";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";


const AdminHome = () => {
  const {user} =useAuth()
  const userInfo =useProfile()
  const axiosSecure= useAxiosSecure()

  const {data: stats} = useQuery({
   queryKey:['admin-stats'],
   queryFn:async()=>{
     const res= await axiosSecure.get('/admin-stats')
     return res.data
   }
  })

  console.log('stats',stats);
  
 


  return (
    <div>

    <div className="mx-auto text-center border-green-400 border-y-4 py-4 md:w-4/12 my-8">
    <h3 className="text-3xl uppercase ">Welcome {user?.displayName} DASHboard</h3>
   <h2>Whole data about your business here</h2>
    </div>

    <div className="mx-auto text-center md:w-4/12 my-8">
    <div className="stats shadow">

<div className="stat bg-green-200">
  <div className="stat-figure text-primary ">
  

  </div>
  <div className="stat-title">Total Customers</div>
  <div className="stat-value text-primary flex gap-4 "><FaUsers className="mt-1 text-4xl"/>{stats?.totalCustomers}</div>
  
</div>

<div className="stat bg-green-200">
  <div className="stat-figure text-secondary">

  </div>
  <div className="stat-title">Total orders</div>
  <div className="stat-value text-secondary flex gap-4 "><GoListUnordered  className="mt-1 text-4xl" />{stats?.totalOrders}</div>
  

</div>

<div className="stat bg-green-200 m">
  <div className="stat-figure text-secondary">

  </div>
  <div className="stat-title">Total Revenue from Customer</div>
  <div className="stat-value text-secondary flex gap-4"><BsCurrencyDollar  className="mt-1 text-4xl"/>{stats?.totalCustomerPayments}</div>
 
 
</div>



</div>
    </div>

    <div className="mx-auto text-center md:w-4/12 my-8">
    <div className="stats shadow">

<div className="stat bg-green-200">
  <div className="stat-figure text-primary ">
  

  </div>
  <div className="stat-title">Total Vendors</div>
  <div className="stat-value text-primary flex gap-4"><FaUserCog  className="mt-1 text-4xl"/>{stats?.totalVendors}</div>

</div>

<div className="stat bg-green-200">
  <div className="stat-figure text-secondary">

  </div>
  <div className="stat-title">Total Revenue from Vendors</div>
  <div className="stat-value text-secondary flex gap-4"><BsCurrencyDollar  className="mt-1 text-4xl"/>{stats?.totalVendorPayments}</div>

</div>

<div className="stat bg-green-200">
  <div className="stat-figure text-secondary">

  </div>
  <div className="stat-title">Total Comments</div>
  <div className="stat-value text-secondary flex gap-4"><FaComments  className="mt-1 text-4xl"/>
{stats?.totalComments}</div>

</div>



</div>
    </div>

  </div>
  );
};

export default AdminHome;