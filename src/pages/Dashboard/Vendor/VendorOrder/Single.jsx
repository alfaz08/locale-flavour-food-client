import React from "react";
import useMyProduct from "../../../../hooks/useMyProduct";

const Single = ({ item }) => {
  const { productIds, email, name, date } = item;
  console.log(productIds);

  const [myProducts] = useMyProduct();

  // Use filter to get an array of products whose _id is included in productIds
  const orderItems = myProducts
    .filter((myProduct) => productIds.includes(myProduct._id))
    .map((filteredProduct) => ({
      _id: filteredProduct._id,
      email: email,
      name: name,
      date: date,
    }));

  // orderItems is an array containing the details of products whose _id is in productIds
  console.log("My orderItems", orderItems);

  const myOrderItems = myProducts.filter((myProduct) =>
    productIds.includes(myProduct._id)
  );
  console.log("my order product", myOrderItems);

  const totalPrice = myOrderItems.reduce(
    (total, item) => total + item.productPrice,
    0
  );

  console.log("price", totalPrice);
  console.log("total Item", myOrderItems.length);
  //  console.log('my',myProducts);

  return (
    <div>
      {myOrderItems.length > 0 && (
        <div className="mt-4">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 bg-gray-200 px-4 py-2">Order By</th>
                <th className="border border-gray-400 bg-gray-200 px-4 py-2">Email</th>
                <th className="border border-gray-400 bg-gray-200 px-4 py-2">Total Price</th>
                <th className="border border-gray-400 bg-gray-200 px-4 py-2">Number of Items</th>
                <th className="border border-gray-400 bg-gray-200 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400  px-4 py-2">{name}</td>
                <td className="border border-gray-400 px-4 py-2">{email}</td>
                <td className="border border-gray-400 px-4 py-2">{totalPrice} Taka</td>
                <td className="border border-gray-400 px-4 py-2">{myOrderItems.length} Items</td>
                <td className="border border-gray-400 px-4 py-2">Pending</td>
              </tr>
              {/* Add additional rows for each item in myOrderItems if needed */}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Single;