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
import SingleProductDetails from "../pages/SIngleProductDetails/SingleProductDetails";
import VegetablesProducts from "../pages/ProductsList/Vegetables/VegetablesProducts";
import FruitsProducts from "../pages/ProductsList/Fruits/FruitsProducts";
import SweetProducts from "../pages/ProductsList/Sweet/SweetProducts";
import SnacksProducts from "../pages/ProductsList/Snacks/SnacksProducts";
import BeveragesProducts from "../pages/ProductsList/Beverages/BeveragesProducts";
import UserCart from "../pages/Dashboard/User/UserCart/UserCart";
import Payment from "../pages/Dashboard/User/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/User/Payment/PaymentHistory";
import ShopList from "../pages/ShopList/ShopList";
import SingleShopDetails from "../pages/SingleShopDetails/SingleShopDetails";
import Invoice from "../pages/Dashboard/User/Invoice/Invoice";
import Review from "../pages/Dashboard/Vendor/VendorProduct/Review";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
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
      
      path:"contact",
    element: <Contact></Contact>
    },
    { 
      
      path:"about",
    element: <About></About>
    },
    {
      path:"member",
      element: <VendorPayment></VendorPayment>
    },
    {
      path:"milkProducts",
      element: <MilkProducts></MilkProducts>
    },
    {
      path:"vegetableProducts",
      element: <VegetablesProducts></VegetablesProducts>
    },
    {
      path:"fruitProducts",
      element: <FruitsProducts></FruitsProducts>
    },
    {
      path:"sweetProducts",
      element: <SweetProducts></SweetProducts>
    },
    {
      path:"shopList",
      element: <ShopList></ShopList>
    },
    {
      path:"snackProducts",
      element: <SnacksProducts></SnacksProducts>
    },
    {
      path:"beveragesProducts",
      element: <BeveragesProducts></BeveragesProducts>
    },
    {
      path:"productDetails/:id",
      element: <SingleProductDetails></SingleProductDetails>
    },
    
    {
      path:"shopDetails/:id",
      element: <SingleShopDetails></SingleShopDetails>
    },
   ]
  },

  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      //for all users
      {
        path:'userHome',
        element: <UserHome></UserHome>,
      },
      {
        path:'userCart',
        element: <UserCart></UserCart>,
      },
      {
        path:'userPayment',
        element: <Payment></Payment>,
      },
      {
        path:'userPaymentHistory',
        element:  <PaymentHistory></PaymentHistory>,
      },
      {
        path:'invoice/:id',
        element:  <Invoice></Invoice>,
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
        path: 'payment',
        element: <Membership></Membership>
      },
      {
        path: 'review/:id',
        element: <Review></Review>
      },
      
    ]
  }
   ]);

export default router;