import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Advertise = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-4'>


      <Link to="/beveragesProducts">
      <div className="relative">
    <img src="https://i.ibb.co/7WCTV8z/banner-1.png" alt="" className="w-full" />
    <h2 className="font-bold text-lg absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-black ">Everyday Fresh & Clean <br /> with Our Product</h2>
    {/* <button
        className="btn absolute top-2/3 left-1/4 transform -translate-x-1/2 -translate-y-1/3 bg-green-300 hover:text-white hover:bg-green-700">
        <span>
        <FaLongArrowAltRight />

        </span>{" "}
        Shop Now
    </button> */}
</div>
      </Link>
      


<Link to="/shopList">
<div className="relative">
    <img src="https://i.ibb.co/7yh8Y0t/banner-2.png" alt="" className="w-full" />
    <h2 className="font-bold text-lg absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-black ">Make your Breakfast <br /> Healthy and Easy</h2>
    
</div>
</Link>
      

<Link to="/vegetableProducts">
<div className="relative">
    <img src="https://i.ibb.co/PNtMqwm/banner-3.png" alt="" className="w-full" />
    <h2 className="font-bold text-lg absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-black ">The best Organic <br /> Products Online</h2>
   
</div>
</Link>

      
    </div>
  );
};

export default Advertise;