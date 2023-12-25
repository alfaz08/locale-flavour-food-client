import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAllVendor = (roll='vendor') => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()
   
  const {data:allVendor=[],refetch}=useQuery({
    queryKey:['allVendor',roll],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/users/vendor?roll=${roll}`)
      return res.data
    }
    })


  return [allVendor,refetch]
};

export default useAllVendor;