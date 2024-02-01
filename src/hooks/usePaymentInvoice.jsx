import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";





const usePaymentInvoice= () => {
  const {id} = useParams()
  const axiosSecure =useAxiosSecure()
  

  const {data:invoice=[],refetch}=useQuery({
    queryKey:['invoice'],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/invoice/${id}`)

      return res.data

    }
    })


  return [invoice,refetch]
};

export default usePaymentInvoice;

