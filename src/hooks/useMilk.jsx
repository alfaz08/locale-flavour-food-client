import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useMilk = (productCategory='milk') => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()
   
  const {data:allMilk=[],refetch}=useQuery({
    queryKey:['allMilk',productCategory],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/milkProduct?productCategory=${productCategory}`)
     
      return res.data
      
    }
    })


  return [allMilk,refetch]
};

export default useMilk;