import React, { useState, useEffect } from "react";

const Single = ({ item, myProducts }) => {
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

  return (
    <tr>
      <td className="border border-gray-400 px-4 py-2">{name}</td>
      <td className="border border-gray-400 px-4 py-2">{email}</td>
      <td className="border border-gray-400 px-4 py-2">
        {totalPrices.length > 0 && totalPrices[totalPrices.length - 1]} Taka
      </td>
      <td className="border border-gray-400 px-4 py-2">{orderItems.length} Items</td>
      <td className="border border-gray-400 px-4 py-2">Pending</td>
    </tr>
  );
};

export default Single;