import { Link } from "react-router-dom";


const SingleItem = ({item}) => {
  console.log(item);
  return (
    
    <div>
      <Link to="/login">
      <div className="card w-56 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
 
  </div>
</div>
      </Link>
    </div>
   
  );
};

export default SingleItem;