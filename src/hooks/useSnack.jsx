import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useSnack = (productCategory='snack') => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()

  const {data:allSnack=[],refetch}=useQuery({
    queryKey:['allSnack',productCategory],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/snackProduct?productCategory=${productCategory}`)

      return res.data

    }
    })


  return [allSnack,refetch]
};

export default useSnack;