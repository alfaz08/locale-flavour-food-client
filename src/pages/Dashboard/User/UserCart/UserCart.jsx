
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";

const UserCart = () => {
  const [cart,refetch] =useCart() 

  return (
    <div className="mt-6">
      <h2 className="text-4xl">Your Product</h2>
      <h2 className=" mt-4">There are {cart.length} products in your cart</h2>
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
            {cart?.map((item, index) => (
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
    </div>
  );
};

export default UserCart;

