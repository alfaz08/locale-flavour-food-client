import useMyProduct from "../../../../hooks/useMyProduct";
import { FaTrashAlt } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";
import { useState } from "react";

const VendorProduct = () => {
  const [myProduct,refetch] =useMyProduct()
  console.log(myProduct);
  const [page,setPage] =useState(1)
  //here i insert total products 5 so use 5
  const selectPageHandler =(selectPage)=>{
    if(selectPage >=1 && selectPage<=myProduct.length/5 && selectPage !== page)
    setPage(selectPage)
  }

  const axiosSecure =useAxiosSecure()
  const handleDelete =(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result)=>{
      if(result.isConfirmed){
        axiosSecure.delete(`/products/${id}`)
        .then(res=>{
          if(res.data.deletedCount>0){
            refetch()
            Swal.fire({
              title:"Deleted",
              text:"Your post has been deleted",
              icon:"success"
            })
          }
        })
      }
    })
  }




  return (
    <div>

       <div className="mx-auto text-center md:w-4/12 my-8">
     
      <h3 className="text-3xl uppercase border-green-400 border-y-4 py-4">Total Products: {myProduct.length}</h3>
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
    myProduct.slice(page * 5 -5,page*5).map((product,index)=>
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
          onClick={()=>handleDelete(product._id)}

           className="btn btn-ghost btn-lg">
         <FaTrashAlt  className="text-red-600"></FaTrashAlt>
          </button>
        </th>
    </tr>
      )
  }

  </tbody>
</table>
</div>


  {
    myProduct.length >0 && <div className="cursor-pointer pagination text-center font-bold text-xl">
      <span  className={`border border-green-300 p-4  ${page >1 ? "" : " hidden"}`}

       onClick={()=>selectPageHandler(page-1)}>
        Prev</span>
      {
        [...Array(myProduct.length / 5)].map((_, i)=>{
          return <span
          className={`border border-green-300 p-4  ${page === i + 1 ? "bg-gray-300" : ""}`}
           onClick={()=>selectPageHandler(i+1)} key={i}>
            
             {i+1}
           </span>

        })
      }
     
     
       <span  className={`border border-green-300 p-4  ${page < myProduct.length/5 ? "" : " hidden"}`}
       onClick={()=>selectPageHandler(page+1)}> 
       Next </span>
    </div>
      }

    </div>
  );
};

export default VendorProduct;