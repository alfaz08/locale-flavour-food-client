import { useParams } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";




const useShopDetails= () => {
  const {id} = useParams()
  const axiosPublic =useAxiosPublic()
  const {user} =useAuth()

  const {data:singleShop=[],refetch}=useQuery({
    queryKey:['singleShop'],
    queryFn:async()=>{
      const res = await axiosPublic.get(`/singleShop/${id}`)

      return res.data

    }
    })


  return [singleShop,refetch]
};

export default useShopDetails;

