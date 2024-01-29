
import useOrder from "../../../../hooks/useOrder";
import Single from "./Single";

const VendorOrder = () => {
  const [orders] =useOrder()
  

  console.log('orders',orders);


  

  return (
    <div>
      {
         orders.map(item=>
          
           <Single key={item.id} item={item}></Single>)
      }
    </div>
  );
};

export default VendorOrder;