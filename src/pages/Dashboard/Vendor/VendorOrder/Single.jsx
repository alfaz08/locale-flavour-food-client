import React from 'react';
import useMyProduct from '../../../../hooks/useMyProduct';

const Single = ({item}) => {

  const { productIds,email,name,date } = item;

const [myProducts] = useMyProduct();

// Use filter to get an array of products whose _id is included in productIds
const orderItems = myProducts
  .filter(myProduct => productIds.includes(myProduct._id))
  .map(filteredProduct => ({
    _id: filteredProduct._id,
    email: email,
    name: name,
    date: date,
    // Add any other properties you want to include
    // You can also use object destructuring like {...filteredProduct} to include all properties
  }));


// orderItems is an array containing the details of products whose _id is in productIds
console.log('orderItems', orderItems);

  //  console.log(item);
  //  console.log('my',myProducts);

  return (
    <div>
      
    </div>
  );
};

export default Single;