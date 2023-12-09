import { Outlet } from "react-router-dom";
import NavBarTwo from "../components/Navbar/NavBarTwo";


const MainLayout = () => {
  return (
    <div>
      <NavBarTwo></NavBarTwo>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;