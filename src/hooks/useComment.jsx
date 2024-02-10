import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useParams } from "react-router-dom";



const useComment = () => {
  const {id} =useParams()

  const axiosSecure =useAxiosSecure()
 
  const {refetch,data: comments=[]}=useQuery({
    queryKey:['comments',id],
    queryFn:async()=>{
      const res = await axiosSecure.get(`/comments/${id}`);
    return res.data
    }
  })
  
  return [comments,refetch]
};

export default useComment;