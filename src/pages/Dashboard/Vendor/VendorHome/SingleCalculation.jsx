import React, { useEffect, useState } from 'react';

const SingleCalculation = ({ item, myProducts }) => {
  const { productIds, email, name, date } = item;
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrices, setTotalPrices] = useState([]);

  useEffect(() => {
    // Use filter to get an array of products whose _id is included in productIds
    const filteredOrderItems = myProducts
      .filter((myProduct) => productIds?.includes(myProduct._id))
      .map((filteredProduct) => ({
        _id: filteredProduct._id,
        email: email,
        name: name,
        date: date,
      }));

    setOrderItems(filteredOrderItems);

    const myOrderItems = myProducts.filter((myProduct) =>
      productIds?.includes(myProduct?._id)
    );

    const totalPrice = myOrderItems.reduce(
      (total, item) => total + item?.productPrice,
      0
    );

    setTotalPrices((prevTotalPrices) => [...prevTotalPrices, totalPrice]);
  }, [myProducts, productIds, email, name, date]);

  // Calculate the total of totalPrices
  const totalPricesTotal = totalPrices.reduce((total, price) => total + price, 0);

  // Calculate the total number of items in orderItems
  const orderItemsTotal = orderItems.length;

  return (
    <div>
      {/* Your existing JSX */}
      <p>Total of totalPrices: {totalPricesTotal} Taka</p>
      <p>Total number of items: {orderItemsTotal}</p>
    </div>
  );
};

export default SingleCalculation;