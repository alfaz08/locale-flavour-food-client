import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useFruits = (productCategory='fruit') => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()

  const {data:allFruits=[],refetch}=useQuery({
    queryKey:['allFruits',productCategory],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/fruitsProduct?productCategory=${productCategory}`)

      return res.data

    }
    })


  return [allFruits,refetch]
};

export default useFruits;