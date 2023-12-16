import useMyProduct from "../../../../hooks/useMyProduct";


const VendorProduct = () => {
  const [myProduct,refetch] =useMyProduct()
  console.log(myProduct);
  return (
    <div>
      ghffgghf
    </div>
  );
};

export default VendorProduct;