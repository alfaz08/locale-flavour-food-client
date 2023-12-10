import { Helmet } from "react-helmet-async";
import NavbarOne from "../../components/Navbar/NavbarOne";
import NavBarTwo from "../../components/Navbar/NavBarTwo";
import Footer from "../../components/Footer/Footer";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Locale Food | Home</title>
      </Helmet>
      
      <Footer></Footer>
    </div>
  );
};

export default Home;