import { useParams } from "react-router-dom";
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
    <div>
      <div className="grid grid-cols-2 gap-2">
              <div>
              <img src={productImage} alt="Shoes" className="rounded-xl w-96 h-96" />
              </div>
              <div className="p-2">
        
                <h2 className="font-bold text-2xl mb-2">{productName}</h2>
               
                <h2 className="font-bold text-4xl mb-6 text-green-600">${productPrice}</h2>
                
                
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
    </div>
  );
};

export default SingleProductDetails;