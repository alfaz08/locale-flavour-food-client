import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { useState } from "react";
import { GrView } from "react-icons/gr";
import './milkitem.css'
const SingleMilkProducts = ({item}) => {

  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

const {email,
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
  shopName} =item

 
  const handleOpenModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  return (

<div className="">

<div className='card w-56 border mt-4 shadow-xl hover:border border-green-200'>  
     <div className= {`figure relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
     >
     <figure className="px-10 pt-10 ">
      <img
        src={productImage}
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    {isHovered && (
        <div className="overlay">
          <div className="tooltip tooltip-open " data-tip="See Details">
          <GrView className="text-4xl  cursor-pointer" onClick={handleOpenModal} />
</div>
          

          
        </div>
      )}
     </div>
  

    <div className="card-body items-center text-center">
     
      <h2 className="card-title">{productName}</h2>
      <h2 className="">By: <span className="text-green-700">{shopName}</span></h2>

      <div className="flex justify-between gap-6">
      <h2 className="mt-3 font-bold">$:{productPrice}</h2>
      <button className="btn bg-green-300 hover:text-white hover:bg-green-700"><span><GrCart />
</span> Add</button>
      </div>
    </div>
   
    

   
<dialog id="my_modal_2" className="modal">
<div className="modal-box">
    <form method="dialog">
      
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
   <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
  </div>
</dialog>

  






  </div>


</div>
  );
};

export default SingleMilkProducts;
