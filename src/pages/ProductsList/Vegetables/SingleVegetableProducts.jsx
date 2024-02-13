import { GrCart } from "react-icons/gr";
import { useState } from "react";
import { GrView } from "react-icons/gr";
import "./vegetables.css";
import CartToogle from "../../../shared/CartToggle/CartToogle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
const SingleVegetablesProducts = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location =useLocation()
  const navigate = useNavigate()
  const {user} =useAuth()
  const axiosSecure =useAxiosSecure()
  const [,refetch]=useCart() 

  const {
    _id,
    email,
    productCategory,
    productDetails,
    productExpireDate,
    productImage,
    productManufacturingDate,
    productName,
    productPrice,
    productQuantity,
    productionCost,
    profitMarin,
    shopAddress,
    shopImage,
    shopName,
  } = item;

  const handleCart=(item)=>{
    if(user && user.email){
      //send cart too database
      const cartItem ={
          productId:_id,
          email:user.email,
          image:productImage,
          name:productName,
          spendMoney:productPrice,
          amount:1,
          price:productPrice,
          shopName: shopName
      }



      axiosSecure.post('/carts',cartItem)
      .then(res=>{
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1200
          });
          //refetch the cart to update  the cart items
          axiosSecure.patch(`/products/${_id}`)
          refetch()
        }
      })
  }
  else{
    Swal.fire({
      title: "You are not login",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log in!"
    }).then((result) => {
      if (result.isConfirmed) {
        //send the user to the login page
        navigate('/login',{state: {from: location}})
      }
    });
  }

}


  return (
    <div className="">
      <div className="card md:w-56 border mt-4 shadow-xl hover:border border-green-200">
      <Link to={`/productDetails/${_id}`}>
        <div
          className={`figure relative`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <figure className="px-10 pt-10 ">
            <img src={productImage} alt="Shoes" className="rounded-xl h-36" />
          </figure>
          {isHovered && (
            <div className="overlay">

              <div className="tooltip tooltip-open " data-tip="See Details">
                <GrView
                  className="text-4xl  cursor-pointer"

                />
              </div>

            </div>
          )}
        </div>
        </Link>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{productName}</h2>
          <h2 className="">
            By: <span className="text-green-700 ">{shopName}</span>
          </h2>

          <div className="flex justify-between gap-6">
            <h2 className="mt-3 font-bold">$:{productPrice}</h2>
            <button 
            onClick={()=>handleCart(item)}
            className="btn bg-green-300 hover:text-white hover:bg-green-700">
              <span>
                <GrCart />
              </span>{" "}
              Add
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default  SingleVegetablesProducts;