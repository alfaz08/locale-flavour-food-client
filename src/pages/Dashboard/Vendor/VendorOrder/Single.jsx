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
      {myOrderItems.length > 0 ? (
        <div className="mt-4 flex gap-4">
          <h2>{totalPrice} Taka</h2>
          <h2>{myOrderItems.length} Items</h2>
          <h2>Pending</h2>

          {/* {
         orderItems.map(orderItem=> 
           <div key={orderItem._id}> 
           {orderItem._id}
       {orderItem.name}
     {orderItem.date}
           </div>
           
           
           )
       
       } */}
        </div>
      ) : null}
    </div>
  );
};

export default Single;
