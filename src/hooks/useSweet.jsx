import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useSweet = (productCategory='sweet') => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()

  const {data:allSweet=[],refetch}=useQuery({
    queryKey:['allSweet',productCategory],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/sweetProduct?productCategory=${productCategory}`)

      return res.data

    }
    })


  return [allSweet,refetch]
};

export default useSweet;