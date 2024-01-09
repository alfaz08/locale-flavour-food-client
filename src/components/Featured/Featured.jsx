import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Clients = () => {
  return (
    <>
      <h2 className="text-center mt-8 font-semibold text-4xl">
        Featured Categories
      </h2>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
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
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide id="image">
          <Link to="/login">
            <div className="card w-56 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide id="image">
          <Link to="/login">
            <div className="card w-56 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide id="image">
          <Link to="/login">
            <div className="card w-56 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide id="image">
          <Link to="/login">
            <div className="card w-56 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide id="image">
          <Link to="/login">
            <div className="card w-56 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide id="image">
          <Link to="/login">
            <div className="card w-56 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide id="image">
          <Link to="/login">
            <div className="card w-56 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide id="image">
          <Link to="/login">
            <div className="card w-56 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide id="image">
          <Link to="/login">
            <div className="card w-56 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide id="image">
          <Link to="/login">
            <div className="card w-56 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Clients;
