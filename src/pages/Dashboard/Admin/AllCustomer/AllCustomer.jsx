import React from 'react';
import useAllCustomer from '../../../../hooks/useAllCustomer';
import { FaUserShield } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';

const AllCustomer = () => {
  const [allCustomer] =useAllCustomer()
  console.log(allCustomer);
  return (
    <div>
       <div className="flex justify-evenly my-4">
    <h2>User List: {allCustomer?.length}</h2>

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
      <td>Make Admin</td>
      <td>Delete</td>
      
    </tr>
  </thead>
  <tbody>


   {
    allCustomer?.map((user,index)=>
      <tr key={user._id}>
      <th>{index+1}</th>
      <td>{user.name}</td>
      
      <td>{user.roll}</td>
      <td>{user.email}</td>
      
   
      <td>
       <button className="btn bg-green-400"><FaUserShield />

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

export default AllCustomer;