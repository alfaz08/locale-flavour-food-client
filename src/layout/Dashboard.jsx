import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart,FaUtensils, FaBook, FaUser } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import { FaDollarSign } from "react-icons/fa";




const Dashboard = () => {

  const {user} =useAuth()
  console.log(user.photoURL);


 const isAdmin =false
 const isVendor =true

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-green-200">
         <ul className="menu">


     {
      isAdmin ?
      <>
       <li>
              <img src={user?.photoURL} className="h-40 w-40 rounded-full ml-6" alt="" />
            </li>
       <li>
              <NavLink to="/dashboard/adminHome">
              <FaHome className="text-2xl"></FaHome>
                <h2 className="font-bold">Admin Home</h2>
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allCustomer">
              <FaUser className="text-2xl"></FaUser>
                <h2 className="font-bold">Member List</h2>
                </NavLink>
            </li>
          
            
            
            <li>
              <NavLink to="/dashboard/bookings">
              <FaBook></FaBook>
                Manage Bookings
                </NavLink>
            </li>
            
      </>
      :
      isVendor ?
      <>
      <li>
              <img src={user?.photoURL} className="h-40 w-40 rounded-full ml-6" alt="" />
            </li>
       <li>
              <NavLink to="/dashboard/vendorHome">
              <FaHome className="text-2xl"></FaHome>
                <h2 className="font-bold">Home</h2>
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addProduct">
              <FaBoxOpen className="text-2xl" />
            <h2 className=" font-bold"> Add Product</h2>
               
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/vendorProduct">
              <FaShoppingCart className="text-2xl"></FaShoppingCart>
                <h2 className="font-bold">My Product List</h2>
                </NavLink>
            </li>
            
            <li>
              <NavLink to="/dashboard/vendorOrder">
              <FaList className="text-2xl"></FaList>
                <h2 className="font-bold">Order List</h2>
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/vendorRevenue">
              <FaDollarSign className="text-2xl"></FaDollarSign>
                <h2 className="font-bold">Total Revenue</h2>
                </NavLink>
            </li>
      </>
      :
      <>
       <li>
              <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
                User Home
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
                Reservation
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
                My Cart
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/review">
              <FaAd></FaAd>
                Add a Review
                </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/bookings">
              <FaList></FaList>
                Bookings
                </NavLink>
            </li>
      </>
     }





           
            {/* home */}
        <div className="divider"></div>
        <li>
              <NavLink to="/">
              <FaHome></FaHome>
                Home
                </NavLink>
            </li>
        <li>
              <NavLink to="/order/salad">
              <FaSearch></FaSearch>
                Menu
                </NavLink>
            </li>


         </ul>
      </div>
         {/* dashboard content */}
        <div className="flex-1">
          <Outlet></Outlet>
        </div>

    </div>
  );
};

export default Dashboard;