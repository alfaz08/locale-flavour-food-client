import React from 'react';
import { useForm } from "react-hook-form";
import { IoLocationSharp } from "react-icons/io5";

import { MdOutlineHeadsetMic } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    console.log(data);
  }


  return (
    <div>
      <div className='container text-center md:text-left mx-auto grid grid-cols-1 md:grid-cols-3 mt-4'>


<div className="col-span-1 ">
<h2 className='font-bold text-4xl text-green-500'>How can help you ?</h2>
<h2 className='font-bold text-2xl mt-4'>Let us know how we can help you</h2>
<h2 className='text-lg text-justify mt-4'>Consider implementing a user-friendly feedback form on your website, possibly on key pages.
Utilize tools like surveys, polls, or feedback widgets to gather specific information.
Regularly review and analyze feedback to identify areas for improvement.</h2>
</div>
<div className="col-span-1  md:mt-14 md:ml-24">
     <h2 className='font-bold text-xl'>
      01. Visit Feedback
     </h2>
     <h2 className='text-lg mt-2'>
      For your queries visit our website Feedback
     </h2>
     <h2 className='font-bold text-xl mt-2'>
     
      03.  Billing Inquiries
     </h2>
     <h2 className='text-lg mt-2'>
     
      For your queries about billing contact our It Team.
     </h2>
</div>
<div className="col-span-1  md:mt-14 md:ml-4">
<h2 className='font-bold text-xl'>
      02.Employer Services
     </h2>
     <h2 className='text-lg mt-2'>
      For employer services contact our hot line.
     </h2>
     <h2 className='font-bold text-xl mt-2'>
      04.  General Inquiries
     </h2>
     <h2 className='text-lg mt-2'>
      For your general queries fill up contact from.
     </h2>
</div>





</div>


<div className='container mx-auto grid grid-cols-1 md:grid-cols-4'>
  

 

  <div className=' col-span-3'>

  <h2 className='font-bold text-4xl mt-8 text-green-500'>Contact form</h2>
  <h2 className="text-4xl font-bold mt-4">Drop Us a Line</h2>
  <h2 className='text-gray-400 mt-2'>Your email address will not be published. Required fields are marked *

</h2>


     <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
             <div className="form-control ">
               
               <input
                 type="text"
                 name="name"
                 {...register("name", { required: true })}
                 placeholder="First Name"
                 className="input input-bordered border-gray-300 h-16"
               />
              
             </div>

             <div className="form-control">
               
               <input
                 type="email"
                 name="email"
                 placeholder="Your Email"
                 {...register("email", { required: true })}
                 className="input input-bordered border-gray-300 h-16"
               />
               
             </div>
             </div>

             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
             <div className="form-control">
               
               <input
                 type="number"
                 name="phone"
                 placeholder="Your Phone"
                 {...register("phone", { required: true })}
                 className="input input-bordered border-gray-300 h-16"
               />
               
               
             </div>
             <div className="form-control">
               
               <input
                 type="text"
                 name="subject"
                 placeholder="Subject"
                 {...register("subject", { required: true })}
                 className="input input-bordered border-gray-300 h-16"
               />
               
             </div>
             </div>





             <div className="form-control">
        
         <textarea
           name="reviewText"
           {...register("reviewText", { required: true })}
           placeholder="Massage"
           className="textarea textarea-bordered border-gray-300 h-64"
         ></textarea>
       </div>

           




             <div className="form-control mt-6">
               <input
                 className="btn max-w-sm h-16  text-white hover:bg-green-300 hover:text-black bg-black"
                 type="submit"
                 value="Send Massage"
               />
             </div>
           </form>
</div>




<div className='col-span-1 flex justify-center items-center '>
<div>
          <div className=" ml-4 ">
          <h2 className='font-bold text-4xl mt-8 text-green-500'>Our Address</h2>
            <img
              className="w-36 "
              src="https://i.ibb.co/dJSdKHD/Green-Modern-Organic-Health-Food-Logo-1-removebg-preview-removebg-preview.png"
              alt=""
            />
            <h2 className="mt-[-28px]">Awesome grocery store website</h2>
            <h2 className="flex">
              <IoLocationSharp className="text-md mt-1" />
              <span className="font-bold text-mdg">
                Address: Dhaka,Bangladesh
              </span>
            </h2>
            <h2 className="flex">
              <MdOutlineHeadsetMic className="text-md mt-1" />
              <span className="font-bold text-mdg">Call Us: +880171234569</span>
            </h2>
            <h2 className="flex">
              <MdEmail className="text-md mt-1" />
              <span className="font-bold text-mdg">
                Email:{" "}
                <span className="  font-bold">localefood@gmail.com</span>
              </span>
            </h2>
            <h2 className="flex">
              <MdOutlineWatchLater className="text-md mt-1" />

              <span className="font-bold text-mdg">
                Hours:10:00 - 18:00, Mon - Sat
              </span>
            </h2>
          </div>
        </div>
  </div>


  </div>




    </div>
  );
};

export default Contact;