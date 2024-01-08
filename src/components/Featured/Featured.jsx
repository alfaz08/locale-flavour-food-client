import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Featured = () => {

  return (
    <div className="mt-4 mb-4">
      <div className="mb-4">
       <h2 className="font-bold text-4xl text-center"> Featured Categories</h2>
      </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Link to="/login">
        <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" />
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <Link>
        <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" />
        </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link>
        <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" />
        </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link>
        <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" />
        </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link>
        <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" />
        </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link>
        <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" />
        </Link>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Featured;