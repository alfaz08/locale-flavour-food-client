import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useParams } from "react-router-dom";



const useSingleProductsDetails = () => {
  const {id} = useParams()
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()

  const {data:singleProduct=[],refetch}=useQuery({
    queryKey:['singleProduct'],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/singleProduct/${id}`)

      return res.data

    }
    })


  return [singleProduct,refetch]
};

export default useSingleProductsDetails;