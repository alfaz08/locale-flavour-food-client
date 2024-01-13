import { GrCart } from "react-icons/gr";
import { useState } from "react";
import { GrView } from "react-icons/gr";
import "./vegetables.css";
import CartToogle from "../../../shared/CartToggle/CartToogle";
import { Link } from "react-router-dom";
const SingleVegetableProducts = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [amount, setAmount] = useState(1);
  
  const {
    _id,
    email,
    productCategory,
    productDetails,
    productExpireDate,
    productImage,
    productManufacturingDate,
    productName,
    productPrice,
    productQuantity,
    productionCost,
    profitMarin,
    shopAddress,
    shopImage,
    shopName,
  } = item;

  const handleOpenModal = () => {
    document.getElementById("my_modal_2").showModal();
  };
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < productQuantity
      ? setAmount(amount + 1)
      : setAmount(productQuantity);
  };

  return (
    <div className="">
      <div className="card w-56 border mt-4 shadow-xl hover:border border-green-200">
        <div
          className={`figure relative`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <figure className="px-10 pt-10 ">
            <img src={productImage} alt="Shoes" className="rounded-xl" />
          </figure>
          {isHovered && (
            <div className="overlay">
              <div className="tooltip tooltip-open " data-tip="Quick View">
                <GrView
                  className="text-4xl  cursor-pointer"
                  onClick={handleOpenModal}
                />
              </div>
            </div>
          )}
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{productName}</h2>
          <h2 className="">
            By: <span className="text-green-700 ">{shopName}</span>
          </h2>

          <div className="flex justify-between gap-6">
            <h2 className="mt-3 font-bold">$:{productPrice}</h2>
            <button className="btn bg-green-300 hover:text-white hover:bg-green-700">
              <span>
                <GrCart />
              </span>{" "}
              Add
            </button>
          </div>
        </div>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box ">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <img
                  src={productImage}
                  alt="Shoes"
                  className="rounded-xl w-96 h-96"
                />
              </div>
              <div className="p-2">
                <h2 className="font-bold text-2xl mb-2">{productName}</h2>

                <h2 className="font-bold text-4xl mb-6 text-green-600">
                  ${productPrice}
                </h2>

                <div className="flex gap-2 mb-4 ">
                  <div>
                    <CartToogle
                      amount={amount}
                      setIncrease={setIncrease}
                      setDecrease={setDecrease}
                    ></CartToogle>
                  </div>
                  <div>
                    <button className="btn bg-green-300 hover:text-white hover:bg-green-700">
                      <span>
                        <GrCart />
                      </span>{" "}
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h2 className="font-bold mb-2">
                  Vendor:<span className="text-green-600">{shopName}</span>
                </h2>
                <h2 className="font-bold mb-2">
                  MFG:{" "}
                  <span className="text-green-600">
                    {productManufacturingDate}
                  </span>
                </h2>
                <Link to={`/productDetails/${_id}`}>
               <button className="btn bg-green-300 hover:text-white hover:bg-green-700">See Product Details</button>
               </Link>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default SingleVegetableProducts;