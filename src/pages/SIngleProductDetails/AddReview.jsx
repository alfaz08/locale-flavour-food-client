import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa"; // Import the star icon from your preferred icon library
import { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddReview = ({singleProduct}) => {

  const {user} =useAuth()
  
  const axiosSecure =useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [rating, setRating] = useState(0);

  const onSubmit = async (data) => {
   
   
    const commentReview =  {
      commentDes : data?.reviewText,
      productId: singleProduct?._id,
      commenterName: user?.displayName,
      commenterEmail: user?.email,
      commenterPhoto: user?.photoURL,
      rating:rating,
      shopEmail: singleProduct?.email,
      createdAt: new Date(),
    }
    console.log(commentReview);
    const productRes = await axiosSecure.post("/comments", commentReview);

    if (productRes.data.insertedId) {
      setRating(0);
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Successfully added your comments`,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    
  


  };


  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };



  return (
    <div>
      <h2 className="text-4xl mt-16 p-4 font-bold">Add a Review</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-6xl">
        <div className="form-control">
          <label className="label">Review</label>
          <textarea
            name="reviewText"
            {...register("reviewText", { required: true })}
            placeholder="Write a review"
            className="textarea textarea-bordered border-green-300 h-64"
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <label className="label">Rating</label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer ${
                  rating >= star ? "text-green-400" : "text-gray-300"
                }`}
                onClick={() => handleRatingChange(star)}
              />
            ))}
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn max-w-sm text-xl bg-green-300 hover:text-white hover:bg-black"
            type="submit"
            value="Submit Review"
          />
        </div>
      </form>
    </div>
  );
};

export default AddReview;