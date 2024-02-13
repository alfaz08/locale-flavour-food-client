

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
      <div className="mx-auto text-center border-green-400 border-y-4 py-4 md:w-4/12 my-8">
    <h3 className="text-3xl uppercase ">Admin List: {allAdmin.length}</h3>
   
    </div>
       
    <div className="overflow-x-auto ml-2 mr-2 rounded-lg">
<table className="table table-zebra">
  {/* head */}
  <thead className="bg-green-300">
    <tr className="text-lg text-black">
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