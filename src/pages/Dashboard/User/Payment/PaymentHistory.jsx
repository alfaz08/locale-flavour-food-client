
import { FaTrashAlt } from 'react-icons/fa';
import usePaymentHistory from '../../../../hooks/usePaymentHistory';
import { FaUserShield } from 'react-icons/fa6';

const PaymentHistory = () => {
  const [myPayments] =usePaymentHistory()
  
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2>Transaction History List: {myPayments?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <td>Price</td>
              <td>Order Date</td>
              <td>Transaction Id</td>
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