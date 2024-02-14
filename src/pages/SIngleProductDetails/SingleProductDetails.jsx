import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useMilk from "../../hooks/useMilk";
import CartToogle from "../../shared/CartToggle/CartToogle";
import { useState } from "react";
import { GrCart } from "react-icons/gr";
import useSingleProductsDetails from "../../hooks/useSingleProductDetails";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import CustomerReview from "./CustomerReview";
import AddReview from "./AddReview";
import useComment from "../../hooks/useComment";
import RatingStar from "./RatingStar";


const SingleProductDetails = () => {
  const location = useLocation()
  const [amount,setAmount] =useState(1)
  const {user} =useAuth()
  const [singleProduct]=useSingleProductsDetails()
   const [,refetch]=useCart() 
  const axiosSecure =useAxiosSecure()
   const navigate =useNavigate()

   const [comments,commentRefetch] =useComment()

   console.log('all comment',comments);
   

// Assuming comments is an array of objects with a 'rating' property
// For example: [{ rating: 5 }, { rating: 4 }, { rating: 3 }]
const totalRating = comments.reduce((total, comment) => total + comment.rating, 0);

const averageRating = Math.floor(totalRating / comments.length);


console.log("Total Rating:", totalRating);
console.log("Average Rating:", averageRating);



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
  } = singleProduct;
  

  // Check if productQuantity is defined and has value and unit properties
  const productQuantityValue = productQuantity?.value;
  const productQuantityUnit = productQuantity?.unit;
  
  

 





  
  
  

  const setDecrease =()=>{
    amount >1 ? setAmount(amount - 1) : setAmount(1)
  }


  const setIncrease = ()=>{
    amount < productQuantityValue? setAmount(amount + 1) : setAmount(productQuantityValue)
  }
  

  let money = parseFloat(amount * productPrice)
  

  const handleCart=(item)=>{
    if(user && user.email){
      //send cart too database
      const cartItem ={
          productId:_id,
          email:user.email,
          image:productImage,
          name:productName,
          spendMoney:money,
          amount:amount,
          price:productPrice,
          shopName: shopName,
          shopEmail: email
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
           refetch()
        
           axiosSecure.patch(`/products/${_id}`)



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
    <div className="max-w-screen-2xl mx-auto mt-4">

      <div className="hero-overlay bg-green-100 mb-4">
          <div className="grid justify-start ">
            <div className=" text-lg  breadcrumbs text-black">
             
              <ul>
                <li>
                  <a className="text-black p-4"><Link to="/">Home</Link></a>
                </li>
                <li>
                  <a className="text-black ">{productCategory}</a>
                </li>
                <li>
                  <a className="text-black ">{productName}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


              <div className="flex justify-center border ">
              <img src={productImage} alt="Shoes" className="rounded-xl w-96 h-96" />
              </div>



              <div className="p-2">
        
                <h2 className="font-bold text-2xl mb-2">{productName}</h2>
                 <RatingStar star={averageRating}></RatingStar>
                <h2 className="font-bold text-4xl mt-8 mb-8 text-green-600">${productPrice}</h2>
                
                <h2>
                  {productDetails}
                </h2>
                <h2 className="mt-4 mb-4 ">
                  <span className="text-xl">Size/Weight: </span> <span className="text-xl font-bold uppercase">
                  {productQuantityUnit}</span>
                </h2>


                <div className="flex gap-2 mb-4 ">
                  <div>
                    <CartToogle
                    amount ={amount}
                    setIncrease ={setIncrease}
                    setDecrease ={ setDecrease}
                    ></CartToogle>
                  </div>
                  <div>

                    
                  <button
                  onClick={()=>handleCart(singleProduct)}
                  className="btn bg-green-300 hover:text-white hover:bg-green-700">
              <span>
                <GrCart />
              </span>{" "}
              Add to Cart
            </button>



                  </div>
                </div>


                <h2 className="font-bold mb-2">Vendor:<span className="text-green-600">{shopName}</span></h2>
                <h2 className="font-bold mb-2">MFG: <span className="text-green-600">{productManufacturingDate}</span></h2>

               
             
             
              </div>


              

      </div>


      <div className="border border-gray-200 mt-4 rounded-lg">

        <div className="border-green-600 rounded-b-full mt-4" >
        <h2 className="text-2xl font-bold">Total Review({comments.length})</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className=" col-span-2">
          <CustomerReview  comments= {comments}></CustomerReview>
        <AddReview commentRefetch={commentRefetch} singleProduct={singleProduct}></AddReview>
          </div>
          <div className=" col-span-2">
            
          </div>
        </div>
            
            
            
              </div>





    </div>
  );
};

export default SingleProductDetails;