import { useForm } from "react-hook-form";
import { Link, Navigate} from "react-router-dom";


import 'react-toastify/dist/ReactToastify.css';

import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import useProfile from "../../../../hooks/useProfile";
import Swal from "sweetalert2";
import useMyProduct from "../../../../hooks/useMyProduct";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {

const axiosPublic =useAxiosPublic()
const axiosSecure = useAxiosSecure()
const {user} =useAuth()
const userInfo =useProfile()
const [myProduct] =useMyProduct()
console.log(myProduct.length);
  

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
      const productInfo ={
        productName: data?.title,
        productImage: res.data.data.display_url,
        productionCost:data?.cost,
        productQuantity:data?.quantity,
        profitMarin:data?.margin,
        productPrice:(parseFloat(data?.cost)+((parseFloat(data?.margin)*parseFloat(data?.cost))/100)),
        productDetails:data?.des,
        productManufacturingDate: data?.date,
        productExpireDate: data?.expire,
        productCategory:data.category,
        email: user?.email,
        createdAt: new Date(),
        shopAddress:userInfo?.address,
       shopImage:userInfo?.image,
       shopName:userInfo?.shop
      }
      console.log(productInfo);
      const productRes = await axiosSecure.post('/products',productInfo)
      console.log(productRes.data);
      if(productRes.data.insertedId){
        reset()
        //show success popup
        Swal.fire({
          position:"top-end",
          icon:"success",
          title:`${data.title} is added in the products list!`,
          showConfirmButton:false,
          timer:1500
        })

      }
    }
    

 }


  return (
    <>
    <div>
    <Helmet>
        <title>Locale Food | Add Product</title>
      </Helmet>
      <SectionTitle
        heading="add an item"
        subHeading="What's new?"
      ></SectionTitle>
  
{
  myProduct?.length ===4 && userInfo?.membership==="normal" ?
//   <div className=" grid justify-center mt-12">
//   <p className="text-4xl font-bold text-center">You are not able to add more product. <br />For add unlimited product become a premium vendor membership please</p>
//   <div className="grid justify-center mt-4">
//   <Link to={'/dashboard/membership'}>
//  <button className="btn btn-warning text-xl  font-bold text-center  ">Become a Member</button>
//   </Link>
//   </div>
// </div>
<div>
<p className="md:text-4xl font-bold text-center">You are not able to add more product. <br />For add unlimited product become a premium vendor membership please</p>
<div className="flex items-center justify-center mt-4">
  <div className="card w-96 bg-green-200 shadow-2xl">
    <h2 className='font-bold text-xl mt-2 text-center'>Premium Membership</h2>
    <div className="card-body">
      <h2 className="text-center font-bold text-4xl p-20">
        $1000
      </h2>
      <div className="card-actions justify-center">
        <Link to='/dashboard/membership'>
          <button className='btn btn-warning hover:text-white hover:bg-black'>Buy Now</button>
        </Link>
      </div>
    </div>
  </div>
</div>




</div>




  :
  <div className="hero ">
        <div className="hero-content flex-col ">
          
          <div className="card shadow-xl md:w-[700px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="title"
                  {...register("title", { required: true })}
                  placeholder="Name"
                  className="input input-bordered border-green-300"
                />
               
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Description</span>
                </label>
                <input
                  type="text"
                  name="des"
                  {...register("des", { required: true })}
                  placeholder="Description"
                  className="input input-bordered border-green-300"
                />
               
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  {...register("quantity", { required: true })}
                  placeholder="Description"
                  className="input input-bordered border-green-300"
                />
               
              </div>





              <div className="form-control">
                <label className="label">
                  <span className="label-text">Production Cost</span>
                </label>
                <input
                  type="number"
                  name="cost"
                  {...register("cost", { required: true })}
                  placeholder="Price"
                  className="input input-bordered border-green-300"
                />
               
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profit Margin(%)</span>
                </label>
                <input
                  type="number"
                  name="margin"
                  {...register("margin", { required: true })}
                  placeholder="Price"
                  className="input input-bordered border-green-300"
                />
               
              </div>





              <div className="form-control">
                <label className="label">
                  <span className="label-text">Manufacturing Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  {...register("date", { required: true })}
                  placeholder="Date"
                  className="input input-bordered border-green-300"
                />
               
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Expire Date</span>
                </label>
                <input
                  type="date"
                  name="expire"
                  {...register("expire", { required: true })}
                  placeholder="Expire Date"
                  className="input input-bordered border-green-300"
                />
               
              </div>


            
        {/* category */}
        <div className="form-control mt-6  ">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <select 
            defaultValue="default"
            {...register("category",{required:true})}
            required
            className="select select-bordered border-green-400 w-full"
          >
            <option disabled value="default" >
              Select a Food Category
            </option>
            <option value="milk">Milks and Dairies</option>
            <option value="vegetable">Vegetables</option>
            <option value="fastFood">Fast Food</option>
            <option value="baking">Baking Material</option>
            <option value="fruit">Fresh Fruit</option>
            <option value="sweet">Sweets and Desserts</option>
            <option value="snacks">Snacks</option>
            <option value="beverage">Beverage</option>
            <option value="regional">Regional Food</option>
            <option value="bakery">Bakery </option>
            <option value="grains">Grains</option>
            <option value="proteins">Proteins</option>
          </select>
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
                  value="Add Product"
                />
              </div>
            </form>
          
            <div>
           
          </div>
          </div>
          
        </div>
      </div>

}
           
   
<div>

</div>


      </div>

    
    
    </>
  
  );
};

export default AddProduct;