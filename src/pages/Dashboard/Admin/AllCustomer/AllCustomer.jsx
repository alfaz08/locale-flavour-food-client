import React from "react";
import useAllCustomer from "../../../../hooks/useAllCustomer";
import { FaUserShield } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllCustomer = () => {
  const [allCustomer, refetch] = useAllCustomer();
  console.log(allCustomer);

  const axiosSecure = useAxiosSecure();


  const handleMakeAdmin = user =>{
    console.log(user);
     axiosSecure.patch(`/users/admin/${user._id}`)
     .then(res=>{
      console.log(res.data);
      if(res.data.modifiedCount>0){
        refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 500,
        });
      }
     })
  
   }




  const handleDelete = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/customer/${email}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted",
              text: "Your post has been deleted",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="mx-auto text-center border-green-400 border-y-4 py-4 md:w-4/12 my-8">
    <h3 className="text-3xl uppercase ">User List: {allCustomer?.length}</h3>
   
    </div>
      
      <div className="overflow-x-auto ml-2 mr-2 rounded-lg">
        <table className="table table-zebra ">
          {/* head */}
          <thead className="bg-green-300">
            <tr className="text-lg text-black">
              <th>#</th>
              <td>Name</td>
              <td>Roll</td>
              <td>Email</td>
              <td>Make Admin</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {allCustomer?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>

                <td>{user.roll}</td>
                <td>{user.email}</td>

                <td>
                  <button 
                  onClick={()=>handleMakeAdmin(user)}
                  className="btn bg-green-400">
                    <FaUserShield />
                  </button>
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(user?.email)}
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

export default AllCustomer;
