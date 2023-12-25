import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAllAdmin = (roll='admin') => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()
   
  const {data:allAdmin=[],refetch}=useQuery({
    queryKey:['allAdmin',roll],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/users/admin?roll=${roll}`)
      return res.data
    }
    })


  return [allAdmin,refetch]
};

export default useAllAdmin;