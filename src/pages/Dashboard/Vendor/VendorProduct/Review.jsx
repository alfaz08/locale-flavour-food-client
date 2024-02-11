
import useReview from "../../../../hooks/useReview";

import { useParams } from "react-router-dom";
import { MdReport } from "react-icons/md";

import { FaTrashAlt } from "react-icons/fa";


const Review = () => {
  const { id } = useParams();
   console.log(id);
  const [singleProductReview] =useReview(id)
  console.log('single',singleProductReview);

  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 my-8">
     
     <h3 className="text-3xl uppercase border-green-400 border-y-4 py-4">Total Reviews: {singleProductReview.length}</h3>
   </div>
      <div className="overflow-x-auto">
<table className="table table-zebra">
  {/* head */}
  <thead>
    <tr>
    <th>#</th>
      <td>ProductId</td>
     
     <td>Comment</td>
     <td>Report Comment</td>
      
      
    </tr>
  </thead>
  <tbody>


   {
    singleProductReview.map((product,index)=>
      <tr key={product._id}>
      <th>{index+1}</th>
      <td>{product.productId}</td>
      
     
  
      <td>{product.commentDes}</td>
     
     
      <th>
          <button
         

           className="btn btn-ghost btn-lg">
            <MdReport className="text-red-600 text-4xl"/>

        
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

export default Review;