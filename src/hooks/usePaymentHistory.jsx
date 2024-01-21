import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";




const  usePaymentHistory = () => {
  const axiosSecure =useAxiosSecure()
  const {user} =useAuth()
  const {data:myPayments=[],refetch} = useQuery({
      queryKey:['myPayments',user?.email],
      queryFn:async()=>{
        const res =await axiosSecure.get(`/customerPayments/${user?.email}`)
        return res.data
      }
  })
  return[myPayments,refetch]
};


export default usePaymentHistory;