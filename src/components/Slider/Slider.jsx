
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
          {/* <div className="text-overlay font-bold text-amber-400 hidden sm:block">Don't miss amazing Deals <span className="text-2xl text-amber-400"> <br /> Buy your products</span></div> */}
        </div>
          
        </SwiperSlide>

        
        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="image-container">
          <img src="https://i.ibb.co/FmPSDFp/slider-1.png" alt="" />
          {/* <div className="text-overlay font-bold text-amber-400 hidden sm:block">Explore Our Exclusive Event <br /> <button className='btn btn-warning'>Get Start</button> </div> */}
        </div>
          
        </SwiperSlide>


        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="image-container">
          <img src="https://i.ibb.co/mC14knN/slider-2.png" alt="" />
          <div className="text-overlay font-bold text-amber-400 hidden sm:block">Corporate Event Solutions <span className="text-2xl text-amber-400"> <br /> Make Your Event Awesome</span></div>
        </div>
          
        </SwiperSlide>

        
        <SwiperSlide>
          {/* <img  src="https://i.ibb.co/mN994np/1x-1.jpg" alt="" /> */}
          <div className="image-container">
          <img src="https://i.ibb.co/FmPSDFp/slider-1.png" alt="" />
          <div className="text-overlay font-bold text-amber-400 hidden sm:block">Explore Our Exclusive Event <br /> <button className='btn btn-warning'>Get Start</button> </div>
        </div>
          
        </SwiperSlide>


       
        
      </Swiper>
    </div>
  );
};

export default Slider;