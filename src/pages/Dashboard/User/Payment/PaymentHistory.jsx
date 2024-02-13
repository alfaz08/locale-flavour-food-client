
import { FaTrashAlt } from 'react-icons/fa';
import usePaymentHistory from '../../../../hooks/usePaymentHistory';
import { FaUserShield } from 'react-icons/fa6';
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const PaymentHistory = () => {
  const [myPayments] =usePaymentHistory()
  
  
  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 my-8">
     
     <h3 className="text-3xl uppercase border-green-400 border-y-4 py-4">Transaction History List: {myPayments?.length}</h3>
   </div>
      
      <div className="overflow-x-auto ml-2 mr-2 rounded-lg">
        <table className="table table-zebra ">
          {/* head */}
          <thead className='bg-green-300'>
            <tr className='text-lg text-black'>
              <th>#</th>
              <td>Price</td>
              <td>Order Date</td>
              <td>Transaction Id</td>
              <td>Invoice</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {myPayments?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.price}</td>
                <td>{user.date && (
    new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      
    }).format(new Date(user.date))
  )}</td>
                
                
                <td>{user.transactionId}</td>
                <td>

                  <Link to={`/dashboard/invoice/${user._id}`}>
                  <button ><LiaFileInvoiceSolid className='text-4xl' /></button>
                  </Link>
                </td>
                <td>{
                user.status ==='pending'? 
                <h2 className='bg-red-300 p-4 text-center rounded-lg'>pending</h2>
                :
                <h2 className='bg-green-300 p-4 text-center rounded-lg'>complete</h2>
                }</td>

                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;