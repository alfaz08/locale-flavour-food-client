
import useMyProduct from "../../../../hooks/useMyProduct";
import useOrder from "../../../../hooks/useOrder";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";
import Single from "./Single";

const VendorOrder = () => {
  const [orders] =useOrder()
  

  const [myProducts] = useMyProduct();

  return (
    <div>
      <SectionTitle heading='Your Order List' subHeading=''></SectionTitle>
      {orders.length > 0 && (
        <div className="mt-4">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 bg-gray-200 px-4 py-2">Name</th>
                <th className="border border-gray-400 bg-gray-200 px-4 py-2">Email</th>
                <th className="border border-gray-400 bg-gray-200 px-4 py-2">Total Price</th>
                <th className="border border-gray-400 bg-gray-200 px-4 py-2">Number of Items</th>
                <th className="border border-gray-400 bg-gray-200 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item) => (
                <Single key={item.id} item={item} myProducts={myProducts} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default VendorOrder;