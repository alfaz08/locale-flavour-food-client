
import useAllProduct from "../../hooks/useAllProduct";
import SingleMilkProducts from "../../pages/ProductsList/MilkProducts/SingleMilkProducts";


const PopularProduct = () => {
  const [allProducts] = useAllProduct() 
  const sortedAllProducts = allProducts.sort((a, b) => b.popularity - a.popularity);

  console.log(sortedAllProducts);
  return (
    <div>
      <h2 className=" mt-8 font-semibold text-4xl mb-4 text-green-00">Popular Products</h2>
    
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {sortedAllProducts?.slice(0,12).map((item) => (
              <SingleMilkProducts
                key={item._id}
                item={item}
              ></SingleMilkProducts>
            ))
      }
      </div>
    
    </div>
  );
};

export default PopularProduct;