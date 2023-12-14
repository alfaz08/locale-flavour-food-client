import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate} from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const VendorPayment = () => {
  
  const axiosPublic =useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const {user} =useAuth()
  const navigate =useNavigate()
 console.log(user?.email);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 const onSubmit =async (data)=>{
 

    const imageFile ={image: data.image[0]}
    const res =await axiosPublic.post(image_hosting_api,imageFile,{
      headers:{
        "content-type": "multipart/form-data"
      }
    })
   
   if(res.data.success){
    //now send the menu item data to the server with the image URL
    const updateInfo ={
      shop: data.shop,
      date:data.date,
      address: data.address,
      phone: data.number,
      image: res.data.data.display_url,
      roll: 'vendor'
    }
   
    const patchRes = await axiosSecure.patch(`/users/email/${user?.email}`, updateInfo);
    if(patchRes.data?.modifiedCount){
      Swal.fire({
        position:"top-end",
        icon:"success",
        title:'You are now our Vendor ',
        showConfirmButton:false,
        timer:1500
      })
      navigate('/')
    }
   }
 }


  return (
    <>
    <div>
    <Helmet>
        <title>Locale Food | SignUp</title>
      </Helmet>
   
  
<div className="hero ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center mb-2">Start an online retail <br /> business with <span className="text-green-500">Locale Flavour Food</span> today</h1>
            <p className="text-center mt-4 text-lg text-red-00">Sell your products and accept credit card payments from buying customers. <br /> Shopify gives you everything you need to run a successful online store.</p>
          </div>
          <div className="card shadow-xl md:w-[700px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop Name</span>
                </label>
                <input
                  type="text"
                  name="shop"
                  {...register("shop", { required: true })}
                  placeholder="Shop Name"
                  className="input input-bordered border-green-300"
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop Established</span>
                </label>
                <input
                  type="date"
                  name="date"
                  {...register("date", { required: true })}
                  placeholder="Shop Established"
                  className="input input-bordered border-green-300"
                />
               
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Shop Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  {...register("address", { required: true })}
                  placeholder="Shop Address"
                  className="input input-bordered border-green-300"
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="number"
                  {...register("number", { required: true })}
                  placeholder="phone number"
                  className="input input-bordered border-green-300"
                />
               
              </div>


              <div className="form-control w-full my-6">
                <input
                  {...register("image", { required: true })}
                  required
                  type="file"
                  className="file-input file-input-bordered border-green-300 file-input-green w-full "
                />
              </div>






              <div className="form-control mt-6">
                <input
                  className="btn bg-green-300 hover:text-white hover:bg-black"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
           
            <div>
           
          </div>
          </div>
          
        </div>
      </div>
           
   
<div>


</div>

<ToastContainer/>
      </div>

    
    
    </>
  
  );
};

export default VendorPayment;