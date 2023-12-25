import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAllCustomer = (roll='customer') => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()
   
  const {data:allCustomer=[],refetch}=useQuery({
    queryKey:['allVendor',roll],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/users/customer?roll=${roll}`)
      return res.data
    }
    })


  return [allCustomer,refetch]
};

export default useAllCustomer;