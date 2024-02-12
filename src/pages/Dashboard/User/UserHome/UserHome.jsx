import useAuth from "../../../../hooks/useAuth";
import usePaymentHistory from "../../../../hooks/usePaymentHistory";
import { AiFillDollarCircle } from "react-icons/ai";

import { FaShopify } from "react-icons/fa";


const UserHome = () => {

  const {user} =useAuth()
  const [myPayments] =usePaymentHistory()

  console.log('my',myPayments);

  const totalSpendMoney =myPayments.reduce((total,item)=>total+item.price,0)
  const totalItem =myPayments.reduce((total,item)=>total+item.cartIds.length,0)
  console.log(totalItem);

  return (
    <div>

      <div className="mx-auto text-center md:w-4/12 my-8">
      <h3 className="text-3xl uppercase border-green-400 border-y-4 py-4">Welcome {user?.displayName}</h3>

      </div>

      <div className="mx-auto text-center md:w-4/12 my-8">
      <div className="stats shadow">
  
  <div className="stat bg-green-200">
    <div className="stat-figure text-primary ">
    <FaShopify className="text-4xl"/>
    

    </div>
    <div className="stat-title">Total Shopping Item</div>
    <div className="stat-value text-primary">{totalItem}</div>
    <div className="stat-desc"></div>
  </div>
  
  <div className="stat bg-green-200">
    <div className="stat-figure text-secondary">
    <AiFillDollarCircle  className="text-4xl"/>
    </div>
    <div className="stat-title">Total Shopping Money</div>
    <div className="stat-value text-secondary">{totalSpendMoney}</div>

  </div>
  
  <div className="stat bg-green-200">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Shopping done</div>
    
  </div>
  
</div>
      </div>
    </div>
  );
};

export default UserHome;