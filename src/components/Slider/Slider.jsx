
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
  return (
    <div >
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
          <div className="image-container">
          <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" />
          <h2 className="font-bold text-2xl md:text-6xl absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-black "><span>Fresh Vegetables </span><br /> <span className='mt-4'>Big Discount</span></h2>
        </div>
          
        </SwiperSlide>

        
        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="image-container relative">
          <img src="https://i.ibb.co/FmPSDFp/slider-1.png" alt="" />
          <h2 className="font-bold text-2xl md:text-6xl absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-black "><span>Don't miss amazing </span><br /> <span className='mt-4'>grocery deals</span></h2>
        </div>
          
        </SwiperSlide>


        







        {/* <SwiperSlide>
         
          <div className="image-container">
          <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" />
<h2 className="font-bold text-lg absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-black ">The best Organic <br /> Products Online</h2>        </div>
          
        </SwiperSlide> */}

        
        {/* <SwiperSlide>
         
          <div className="image-container">
          <img src="https://i.ibb.co/FmPSDFp/slider-1.png" alt="" />
          <h2 className="font-bold text-lg absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-black ">The best Organic <br /> Products Online</h2>
        </div>
          
        </SwiperSlide> */}


       
        
      </Swiper>
    </div>
  );
};

export default Slider;