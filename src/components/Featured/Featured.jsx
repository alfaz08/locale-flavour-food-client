import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const Clients = () => {
  const [allCategory] =useCategory()
  
  return (
    <>
     <div className="flex justify-between ">
     <div>
     <h2 className="text-center mt-8 font-semibold text-4xl mb-4 text-green-00">
        Browse All Category
      </h2>
     </div>

      <div>
      <div className="flex mt-10 gap-2">
      <div>
      <FaArrowCircleLeft  className="text-4xl"/>
      </div>
      <div>
      <FaArrowCircleRight className="text-4xl"/>
      </div>
      </div>
      </div>

     </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        pagination={false}  
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >

        
         <SwiperSlide id="image">
          <Link to="/milkProducts">
            <div className="card w-52 h-60 border  border-gray-300  shadow-xl hover:bg-green-100 hover:border hover:border-green-200 hover:text-green-500">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/yPrK83G/dairy-foods-994e5cf540.png"
                  alt="Shoes"
                  className="rounded-xl "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Milk and Dairy </h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide id="image">
          <Link to="vegetableProducts">
            <div className="card h-60 w-52 border  border-gray-300  shadow-xl hover:bg-green-100 hover:border hover:border-green-200 hover:text-green-500">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/f4YGj6G/993599f89f1adc596544cd6e110328e1.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Vegetables</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
         <SwiperSlide id="image">
          <Link to="/beveragesProducts">
            <div className="card w-52 h-60 border  border-gray-300  shadow-xl hover:bg-green-100 hover:border hover:border-green-200 hover:text-green-500">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/pwqLZMZ/hand-drawn-fast-food-set-53876-97420.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Beverages</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide id="image">
          <Link to="/fruitProducts">
            <div className="card h-60 w-52 border  border-gray-300  shadow-xl hover:bg-green-100 hover:border hover:border-green-200 hover:text-green-500">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/BqTfxC1/173142137-fruit-set-natural-tropical-fruit-fresh-organic-food-for-menu-banner-farm-product-design-ma.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Fruits</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide id="image">
          <Link to="/sweetProducts">
            <div className="card w-52 h-60 border  border-gray-300  shadow-xl hover:bg-green-100 hover:border hover:border-green-200 hover:text-green-500">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/X5MKTnj/800px-COLOURBOX5822678.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title ">Sweet and Dessert</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide id="image">
          <Link to="/snackProducts">
            <div className="card w-52 h-60 border  border-gray-300  shadow-xl hover:bg-green-100 hover:border hover:border-green-200 hover:text-green-500">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/pwqLZMZ/hand-drawn-fast-food-set-53876-97420.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Snacks</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        
      
        
      </Swiper>
    </>
  );
};

export default Clients;


