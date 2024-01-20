import { Link, useParams } from "react-router-dom";
import useMilk from "../../hooks/useMilk";
import CartToogle from "../../shared/CartToggle/CartToogle";
import { useState } from "react";
import { GrCart } from "react-icons/gr";
import useSingleProductsDetails from "../../hooks/useSingleProductDetails";


const SingleProductDetails = () => {
  // const {id} =useParams()
  // const [allMilk] =useMilk()
  const [amount,setAmount] =useState(1)
  const [singleProduct]=useSingleProductsDetails()
 console.log(singleProduct);

  //  // Find the milk with the matching id
  //  const selectedMilk = allMilk.find(milk => milk._id === id);
  //  console.log(selectedMilk);

  //  // Check if a milk with the given id was found
  //  if (!selectedMilk) {
  //    return <div>Milk not found</div>;
  //  }
 
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

  const setDecrease =()=>{
    amount >1 ? setAmount(amount - 1) : setAmount(1)
  }


  const setIncrease = ()=>{
    amount < productQuantity ? setAmount(amount + 1) : setAmount(productQuantity)
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
                 <h2>Rating(total review)</h2>
                <h2 className="font-bold text-4xl mt-8 mb-8 text-green-600">${productPrice}</h2>
                
                <h2>
                  {productDetails}
                </h2>
                <h2 className="mt-4 mb-4">
                  Size/Weight: 1 {
                    productQuantity?.map(item=>item.unit)
                  }
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
                  <button className="btn bg-green-300 hover:text-white hover:bg-green-700">
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


      <div className="border border-red-600">

        <div className="border-green-600 rounded-b-full mt-4" >
        <h2 >Total Review:</h2>
        </div>

        <div>
       <h2 className="p-2">
        Customer Review
       </h2>

        <div className="mb-4 mt-4 ml-4 border border-green-500 flex gap-6">
          <h2>image</h2>
          <div>
          <div className="flex gap-12">
          <h2>time</h2>
          <h2>rating</h2>
          </div>
          <h2>text</h2>
          </div>
        </div>

        </div>
               
              </div>





    </div>
  );
};

export default SingleProductDetails;