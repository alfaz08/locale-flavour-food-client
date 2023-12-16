import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMyProduct = () => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()
  const {data:myProduct=[],refetch} = useQuery({
      queryKey:['myProduct',user?.email],
      queryFn:async()=>{
        const res =await axiosSecure.get(`/products/vendor?email=${user?.email}`)
        return res.data
      }
  })
  return[myProduct,refetch]
};

export default useMyProduct;