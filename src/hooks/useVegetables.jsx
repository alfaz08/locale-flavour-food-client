import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useVegetables = (productCategory='vegetable') => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()

  const {data:allVegetables=[],refetch}=useQuery({
    queryKey:['allVegetables',productCategory],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/vegetablesProduct?productCategory=${productCategory}`)

      return res.data

    }
    })


  return [allVegetables,refetch]
};

export default useVegetables;