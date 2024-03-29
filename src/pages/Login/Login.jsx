import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const Login = () => {

  const {signIn} =useAuth()
  const navigate =useNavigate()
  const location =useLocation()
  let from = location.state?.from?.pathname || "/"

  const handleLogin=e=>{
    e.preventDefault();
  const email =e.target.email.value;
  const password =e.target.password.value;
  // console.log(email,password);
  signIn(email,password)
  .then(res=>{console.log(res.user)
    navigate(from,{replace:true})
   }) 
   .catch(error=>{
    console.log(error)
    toast.error(error.message)
    e.target.reset()
   })


  }



  return (
    
    <div className="container mx-auto">
       
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:ml-36 ">
     <div className="hidden lg:block ">
       <img className="h-[530px] w-[420px] mt-32" src="https://i.ibb.co/WFhXbcZ/620-12-login-icon-iconbunny.jpg" alt="" />
     </div>
     <div className="">
     <div className="hero">
  <div className="hero-content flex-col md:w-[700px] ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Welcome to our website and explore it</p>
    </div>
    <div className="card flex-shrink-0 w-full shadow-2xl bg-custom-color">
    <form onSubmit={handleLogin} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered border-green-400" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered border-green-400" required />
         
        </div>
        <div className="form-control mt-6">
        <button  className="btn   bg-custom-color text-black  bg-green-300 hover:bg-black hover:text-white">Login</button>
        </div>
      </form>



      <p className="text-center mt-4 mb-4 ">
        <span className="text-xl font-semibold ">Don't have an account please</span>
        <Link to="/signUp"  className=" font-bold text-blue-600 text-xl hover:text-red-600"> Register</Link>
      </p>


      <SocialLogin></SocialLogin>
     




    </div>
  </div>
</div>



     </div>
   
     
   
     
 
    </div>
    <ToastContainer></ToastContainer>
    </div>

  );
};

export default Login;