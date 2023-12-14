
import useAuth from '../../../../hooks/useAuth';
import useProfile from '../../../../hooks/useProfile';

const VendorHome = () => {
  const {user} =useAuth()
  const userInfo =useProfile()
  
  // const {address,date,email,image,name,phone,roll,shop} =userInfo
  console.log(user.displayName);


  return (
    <div>
      <p>{userInfo?.address}</p>
    </div>
  );
};

export default VendorHome;