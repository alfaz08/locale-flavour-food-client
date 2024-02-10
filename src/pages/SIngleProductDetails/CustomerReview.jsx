

import Rating from 'react-rating';

const CustomerReview = ({comments}) => {

  console.log('comment',comments);
  
  return (
    <div>
       <h2 className="p-2 text-xl font-bold">
        Customer Review
       </h2>
      {
        comments?.map(comment=>
          <div key={comment._id}>
      

        <div className="mb-4 mt-4 ml-4 border border-gray-200 flex gap-6">
          <div>
          <img src={comment?.commenterPhoto} className="w-20 h-20 rounded-full border border-green-400" alt="" />
          <h2 className="font-bold text-center">{comment?.commenterName}</h2>
          </div>

          <div>
          <div className="flex gap-12 bg-red-200 justify-end">
          <h2 className="text-gray-500 text-sm">{new Date(comment.createdAt).toLocaleString('en-US', { month: 'long', year: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</h2>
         
         <h2>{comment.rating}</h2>

          </div>
          <h2 className="text-md mt-2">{comment?.commentDes}</h2>
          </div>
        </div>

        </div>
          )
      }
    </div>
  );
};

export default CustomerReview;