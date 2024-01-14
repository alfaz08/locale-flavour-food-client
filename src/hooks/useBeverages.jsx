import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useBeverages = (productCategory='beverage') => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()

  const {data:allBeverages=[],refetch}=useQuery({
    queryKey:['allBeverages',productCategory],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/beveragesProduct?productCategory=${productCategory}`)

      return res.data

    }
    })


  return [allBeverages,refetch]
};

export default useBeverages;