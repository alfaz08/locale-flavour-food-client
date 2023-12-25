

import { FaTrashAlt } from "react-icons/fa";

import { FaUserShield } from "react-icons/fa";

import { FaShopify } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAllAdmin from "../../../../hooks/useAllAdmin";


const AllAdmin= () => {
  const [allAdmin,refetch] =useAllAdmin()
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
        axiosSecure.delete(`/users/admin/${email}`)
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
    <h2>User List: {allAdmin.length}</h2>

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
      
      <td>Delete</td>
      
    </tr>
  </thead>
  <tbody>


   {
    allAdmin?.map((user,index)=>
      <tr key={user._id}>
      <th>{index+1}</th>
      <td>{user.name}</td>
      
      <td>{user.roll}</td>
      <td>{user.email}</td>
      
   
      
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

export default AllAdmin;