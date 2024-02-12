
import useAuth from '../../../../hooks/useAuth';
import useMyProduct from '../../../../hooks/useMyProduct';
import useOrder from '../../../../hooks/useOrder';
import useProfile from '../../../../hooks/useProfile';


const VendorHome = () => {
  const {user} =useAuth()
  const userInfo =useProfile()
  const [orders] = useOrder();
  const [myProduct]=useMyProduct()




  return (

<div>
<div className="mx-auto border-green-400 border-y-4 py-4 text-center md:w-4/12 my-8">
      <h3 className="text-3xl uppercase ">Welcome {user?.displayName} Dashboard</h3>
    <h2 className='text-xl'>Whole data about your business here</h2>
      </div>
    <div className='mx-auto text-center md:w-4/12 my-8 '>
    <div className="stats shadow ">
  
  <div className="stat bg-green-200">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat bg-green-200">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat bg-green-200">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    </div>


 <div className='mx-auto text-center md:w-4/12 my-8'>
 <p className='text-lg font-bold mt-1'>Shop Owner: {user?.displayName}</p>
 <p className='text-lg font-bold mt-1'>Shop Owner: {userInfo?.shop}</p>
        <p className='text-lg font-bold mt-1'>Email: {user?.email}</p>
        <p className='text-lg font-bold mt-1'>Roll: {userInfo?.roll}</p>
        <p className='text-lg font-bold mt-1'>Shop Address: {userInfo?.address}</p>
        <p className='text-lg font-bold mt-1'>Shop Phone: {userInfo?.phone}</p>
        
        <p className='text-lg font-bold mt-1'>Membership: {userInfo?.membership}</p>
 </div>
 


  




    </div>
  );
};

export default VendorHome;