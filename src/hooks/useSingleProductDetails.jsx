import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useParams } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";



const useSingleProductsDetails = () => {
  const {id} = useParams()
  const axiosPublic =useAxiosPublic()
  const {user} =useAuth()

  const {data:singleProduct=[],refetch}=useQuery({
    queryKey:['singleProduct'],
    queryFn:async()=>{
      const res = await axiosPublic.get(`/singleProduct/${id}`)

      return res.data

    }
    })


  return [singleProduct,refetch]
};

export default useSingleProductsDetails;