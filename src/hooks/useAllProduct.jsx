import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllProduct  = () => {
  const axiosPublic =useAxiosPublic()
 const {data:allProducts=[],isPending:loading,refetch} =useQuery({
  queryKey:['allProducts'],
  queryFn:async()=>{
    const res =await axiosPublic.get('/allProducts')
    return res.data
  }
 })
 return[allProducts,loading,refetch]
};

export default  useAllProduct ;
