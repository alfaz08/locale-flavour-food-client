import { NavLink } from "react-router-dom";
import Search from "../../shared/Search/Search";


const NavBarTwo = () => {

   const navLinks =<>
         <li className="text-xl"><NavLink to="/">Home</NavLink></li>
         <li className="text-xl"><NavLink to="/login">Login</NavLink></li>
         <li className="text-xl"><NavLink to="/signUp">SignUp</NavLink></li>

   
   </>



  return (
    <div>
      <div className="navbar  p-2 bg-green-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>



    <div>
      <img className=" w-40 h-28" src="https://i.ibb.co/X8zVkt2/Green-Modern-Organic-Health-Food-Logo-1-removebg-preview.png" alt="" />
    </div>
    <Search></Search>



  </div>
   
  <div className="navbar-center hidden lg:flex">
    
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>

  <div className="navbar-end">


    
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>



  </div>



    </div>
  );
};

export default NavBarTwo;




// ## 📊 Github Stats

// [![](https://raw.githubusercontent.com/alfaz08/alfaz08/master/profile-summary-card-output/shades_of_purple/0-profile-details.svg)](https://github.com/alfaz08)
// [![](https://raw.githubusercontent.com/alfaz08/alfaz08/master/profile-summary-card-output/shades_of_purple/1-repos-per-language.svg)](https://github.com/alfaz08) [![](https://raw.githubusercontent.com/alfaz08/alfaz08/master/profile-summary-card-output/shades_of_purple/2-most-commit-language.svg)](https://github.com/vn7n24fzkq/github-profile-summary-cards)
// [![](https://raw.githubusercontent.com/alfaz08/alfaz08/master/profile-summary-card-output/shades_of_purple/3-stats.svg)](https://github.com/alfaz08) [![](https://raw.githubusercontent.com/alfaz08/alfaz08/master/profile-summary-card-output/shades_of_purple/4-productive-time.svg)](https://github.com/alfaz08)