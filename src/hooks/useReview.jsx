import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useParams } from "react-router-dom";


const useReview = (id) => {
  
  const axiosSecure=useAxiosSecure()
  const {user} =useAuth()
  
   console.log('id',id);
  const {data:singleProductReview=[],refetch}=useQuery({
    queryKey:['singleProductReview',id],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/comments/singleReview/${id}`)

      return res.data

    }
    })


  return [singleProductReview,refetch]
};

export default useReview;