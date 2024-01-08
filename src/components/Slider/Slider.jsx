
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="relative">
  <div className="image-container relative">
    <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" className="w-full" />
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-left p-4 ">
      <p className="font-bold  text-6xl hidden sm:block">Don't miss amazing Deals</p>
      <p className="text-6xl font-bold hidden sm:block">Buy your products</p>
    </div>
  </div>
</div>
          
        </SwiperSlide>

        
        <SwiperSlide>
       <div className="relative">
  <div className="image-container relative">
    <img src="https://i.ibb.co/FmPSDFp/slider-1.png" alt="" className="w-full" />
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-left p-4 ">
      <p className="font-bold  text-6xl hidden sm:block">Fresh Fruits Big Discount</p>
      <p className="text-6xl font-bold hidden sm:block">Save up to 50% off on your first order</p>
    </div>
  </div>
</div>
          
        </SwiperSlide>


        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="relative">
  <div className="image-container relative">
    <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" className="w-full" />
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-left p-4 ">
      <p className="font-bold  text-6xl hidden sm:block">Don't miss amazing Deals</p>
      <p className="text-6xl font-bold hidden sm:block">Buy your products</p>
    </div>
  </div>
</div>
          
        </SwiperSlide>

        
        <SwiperSlide>
       <div className="relative">
  <div className="image-container relative">
    <img src="https://i.ibb.co/FmPSDFp/slider-1.png" alt="" className="w-full" />
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-left p-4 ">
      <p className="font-bold  text-6xl hidden sm:block">Fresh Fruits Big Discount</p>
      <p className="text-6xl font-bold hidden sm:block">Save up to 50% off on your first order</p>
    </div>
  </div>
</div>
          
        </SwiperSlide>

       
        
      </Swiper>
  );
};

export default Slider;