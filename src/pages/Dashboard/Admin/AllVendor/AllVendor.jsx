import useAllVendor from "../../../../hooks/useAllVendor";

import { FaTrashAlt } from "react-icons/fa";

import { FaUserShield } from "react-icons/fa";

import { FaShopify } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const AllVendor = () => {
  const [allVendor,refetch] =useAllVendor()
  const axiosSecure =useAxiosSecure()

  const handleDelete = (email) =>{
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
        axiosSecure.delete(`/users/vendor/${email}`)
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
       <div className="flex justify-evenly my-4">
    <h2>User List: {allVendor.length}</h2>

    </div>
    <div className="overflow-x-auto">
<table className="table table-zebra">
  {/* head */}
  <thead>
    <tr>
    <th>#</th>
      <td>Name</td>
      <td>Roll</td>
      <td>Email</td>
      <td>Shop Details</td>
      <td>Delete</td>
      
    </tr>
  </thead>
  <tbody>


   {
    allVendor?.map((user,index)=>
      <tr key={user._id}>
      <th>{index+1}</th>
      <td>{user.name}</td>
      
      <td>{user.roll}</td>
      <td>{user.email}</td>
      
   
      
      <Link to={`/shopDetails/${user._id}`}>
      <td>
      <button className="btn bg-green-400">
       <FaShopify className="text-red-600"></FaShopify>
</button>
      </td>
        </Link>
       

      <td>
        
          <button
          
           className="btn btn-ghost btn-lg"
           onClick={()=>handleDelete(user?.email)}>
         <FaTrashAlt className="text-red-600"></FaTrashAlt>
          </button>
        </td>
      


    </tr>
      )
  }

  </tbody>
</table>
</div>
    </div>
  );
};

export default AllVendor;