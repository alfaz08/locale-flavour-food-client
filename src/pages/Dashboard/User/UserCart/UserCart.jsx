
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useState } from "react";

const UserCart = () => {
  const [cart,refetch] =useCart() 
  const [page,setPage] =useState(1)
  
  const totalPrice =cart.reduce((total,item)=>total+item.spendMoney,0)
  console.log(totalPrice);

  const selectPageHandler =(selectPage)=>{
    if(selectPage >=1 && selectPage<=Math.ceil(cart.length / 5) && selectPage !== page)
    setPage(selectPage)
  }




  return (
    <div className="mt-6">
      <h2 className="text-4xl">Your Product</h2>
      <h2 className=" mt-4">There are {cart.length} products in your cart</h2>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="ml-2 rounded-2xl col-span-3 border border-green-300">
      <div className="overflow-x-auto">
        <table className="table table-zebra mt-4">
          {/* head */}
          <thead>
            <tr className="bg-gray-100 ">
              <th>#</th>
              <td>Image</td>
              <td>Product</td>
              <td>Unit Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {cart?.slice(page * 5 - 5,page*5).map((item,index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <img src={item.image} className="w-20 h-20" alt="" />
                </td>

                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>{item.spendMoney}</td>

                
                <th>
                  <button
                    
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    
      {
    cart.length >0 && <div className="cursor-pointer pagination text-center font-bold text-xl">
      <span  className={`border border-green-300 p-4  ${page >1 ? "" : " hidden"}`}

       onClick={()=>selectPageHandler(page-1)}>
        Prev</span>
        {
  [...Array(Math.ceil(cart.length / 5))].map((_, i) => (
    <span
      className={`border border-green-300 p-4  ${page === i + 1 ? "bg-gray-300" : ""}`}
      onClick={() => selectPageHandler(i + 1)} key={i}
    >
      {i + 1}
    </span>
  ))
}
     
     
       <span  className={`border border-green-300 p-4  ${page < Math.ceil(cart.length / 5) ? "" : " hidden"}`}
       onClick={()=>selectPageHandler(page+1)}> 
       Next </span>
    </div>
      }
    
    
      </div>

      



      <div className="col-span-1 p-2">
  <div className="border-2 p-4">
    <div className="flex justify-between mt-4">
      <h2 className="text-xl font-bold">Subtotal:</h2>
      <h2>Taka</h2>
    </div>
    <div className="flex justify-between mt-4">
      <h2 className="text-xl font-bold">Shipping:</h2>
      <h2>Free</h2>
    </div>
    <div className="flex justify-between mt-4">
      <h2 className="text-xl font-bold">Apply Cupon:</h2>
      <h2>Taka</h2>
    </div>
    <div className="flex justify-between mt-4">
      <h2 className="text-xl font-bold">Total:</h2>
      <h2 className="text-xl">$ {totalPrice}</h2>
    </div>
    <div>
      <button className="btn mt-4 font-bold bg-green-300 hover:text-white hover:bg-green-700">
        Proceed To Checkout <MdShoppingCartCheckout className="text-bold" />
      </button>
    </div>
  </div>
</div>
 

     </div>


    </div>
  );
};

export default UserCart;

