import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Rating = ({ star}) => {

  const length= star?.length
 


  return (
    <div>
      {length}
    </div>
  );
};

export default Rating;