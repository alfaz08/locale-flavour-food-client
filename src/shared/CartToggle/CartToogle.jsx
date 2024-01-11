import React from 'react';
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";

const CartToogle = ({amount,setIncrease,setDecrease}) => {

  return (
     
    <div className='border  border-green-400 border-2 w-16'>
      <div className='grid grid-cols-2'>
        <div>
        <h2 className='flex justify-center mt-2 font-bold text-xl'>{amount}</h2>
        </div>
        <div className=''>
        <button onClick={()=>setIncrease()}><IoIosArrowUp /></button>
        <button onClick={()=>setDecrease()}><IoIosArrowDown /></button>
        </div>
      </div>
    </div>
  );
};

export default CartToogle;