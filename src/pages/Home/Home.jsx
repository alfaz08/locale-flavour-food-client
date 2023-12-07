import { Helmet } from "react-helmet-async";
import NavbarOne from "../../components/Navbar/NavbarOne";
import NavBarTwo from "../../components/Navbar/NavBarTwo";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Locale Food | Home</title>
      </Helmet>
      
      <NavBarTwo></NavBarTwo>
    </div>
  );
};

export default Home;