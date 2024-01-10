import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorElement from "../pages/ErrorElements/ErrorElement";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "../Routes/PrivateRoute"
import UserHome from "../pages/Dashboard/User/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import VendorHome from "../pages/Dashboard/Vendor/VendorHome/VendorHome"
import VendorPayment from "../components/VendorPayment/VendorPayment";
import AddProduct from "../pages/Dashboard/Vendor/AddProduct/AddProduct";
import VendorProduct from "../pages/Dashboard/Vendor/VendorProduct/VendorProduct";
import VendorOrder from "../pages/Dashboard/Vendor/VendorOrder/VendorOrder";
import VendorRevenue from "../pages/Dashboard/Vendor/VendorRevenue/VendorRevenue";
import AllCustomer from "../pages/Dashboard/Admin/AllCustomer/AllCustomer";
import AllVendor from "../pages/Dashboard/Admin/AllVendor/AllVendor";
import AllAdmin from "../pages/Dashboard/Admin/AllAdmin/AllAdmin";
import AdminRoutes from "./AdminRoute";
import AdminRoute from "./AdminRoute";
import Membership from "../components/VendorPayment/Membership";
import MilkProducts from "../pages/ProductsList/MilkProducts/MilkProducts";
const router = createBrowserRouter([
  {
   path: "/",
   element: <MainLayout></MainLayout>,
   errorElement: <ErrorElement></ErrorElement>,
   children: [
    {
      path:"/",
      element: <Home></Home>
    },
    { 
      
      path:"login",
    element: <Login></Login>
    },
    { 
      
      path:"signUp",
    element: <SignUp></SignUp>
    },
    {
      path:"member",
      element: <VendorPayment></VendorPayment>
    },
    {
      path:"milkProducts",
      element: <MilkProducts></MilkProducts>
    }
   ]
  },

  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      //for all users
      {
        path:'userHome',
        element: <UserHome></UserHome>,
      },
     


      //for admin
      {
        path:'adminHome',
        element: <AdminHome></AdminHome>,
      },
      {
        path:'allCustomer',
        element: <AdminRoute><AllCustomer></AllCustomer></AdminRoute>
      },
      {
        path:'allVendor',
        element: <AdminRoute><AllVendor></AllVendor></AdminRoute>
      },
      {
        path:'allAdmin',
        element: <AdminRoute><AllAdmin></AllAdmin></AdminRoute>
      },
      
      //for verndor

      {
        path: 'vendorHome',
        element: <VendorHome></VendorHome>
      },
      {
        path: 'addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: 'vendorProduct',
        element: <VendorProduct></VendorProduct>
      },
      {
        path: 'vendorOrder',
        element: <VendorOrder></VendorOrder>
      },
      {
        path: 'vendorRevenue',
        element: <VendorRevenue></VendorRevenue>
      },
      {
        path: 'membership',
        element: <Membership></Membership>
      },
      
    ]
  }
   ]);

export default router;