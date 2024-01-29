
import useAuth from '../../../../hooks/useAuth';
import useProfile from '../../../../hooks/useProfile';

const VendorHome = () => {
  const {user} =useAuth()
  const userInfo =useProfile()
  
  // const {address,date,email,image,name,phone,roll,shop} =userInfo
  console.log(user.displayName);


  return (
    <div className='grid grid-cols-1 md:grid-cols-4'>
      <div className='col-span-2'>
      <div className="card card-compact bg-base-100 shadow-xl justify-center items-center mt-20">
  <figure><img className='w-96 h-96' src={userInfo?.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold text-center">{userInfo?.shop}</h2>
   
    
  </div>
</div>
      </div>
      <div className=' col-span-2 mt-20'>
        <p>Shop Owner: {user?.displayName}</p>
        <p>Email: {user?.email}</p>
        <p>Roll: {userInfo?.roll}</p>
        <p>Shop Address: {userInfo?.address}</p>
        <p>Shop Phone: {userInfo?.phone}</p>
        <p>Membership: {userInfo?.membership}</p>
      </div>
    </div>
  );
};

export default VendorHome;