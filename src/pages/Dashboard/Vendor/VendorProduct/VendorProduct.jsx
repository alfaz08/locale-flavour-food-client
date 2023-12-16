import useMyProduct from "../../../../hooks/useMyProduct";
import { FaTrashAlt } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";

const VendorProduct = () => {
  const [myProduct,refetch] =useMyProduct()
  console.log(myProduct);
  return (
    <div>
       <div className="flex justify-evenly my-4">
    <h2>MyProduct: {myProduct.length}</h2>

    </div>
    <div className="overflow-x-auto">
<table className="table table-zebra">
  {/* head */}
  <thead>
    <tr>
    <th>#</th>
      <td>Name</td>
      <td>Image</td>
      <td>Quantity</td>
      <td>Cost</td>
      <td>Margin</td>
      <td>Price</td>
      <td>Review</td>
      <td>Delete</td>
    </tr>
  </thead>
  <tbody>


   {
    myProduct.map((product,index)=>
      <tr key={product._id}>
      <th>{index+1}</th>
      <td>{product.productName}</td>
      <td>
      
      <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product.productImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
      </td>
      <td>{product.productQuantity}</td>
      <td>{product.productionCost}</td>
      <td>{product.profitMarin}%</td>
      <td>{product.productPrice}</td>
   
      <td>
       <button className="btn bg-green-400"><IoChatbubbleEllipses className="" />
</button>
      </td>
      <th>
          <button
          
           className="btn btn-ghost btn-lg">
         <FaTrashAlt className="text-red-600"></FaTrashAlt>
          </button>
        </th>
    </tr>
      )
  }

  </tbody>
</table>
</div>
    </div>
  );
};

export default VendorProduct;