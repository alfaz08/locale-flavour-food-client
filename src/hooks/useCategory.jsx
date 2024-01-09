import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useCategory = () => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()
   
  const {data:allCategory=[],refetch}=useQuery({
    queryKey:['allCategory'],
    queryFn:async()=>{
      const res = await axiosSecure.get('/category')
      return res.data
    }
    })


  return [allCategory,refetch]
};

export default useCategory;