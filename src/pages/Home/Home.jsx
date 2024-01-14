import { Helmet } from "react-helmet-async";
import NavbarOne from "../../components/Navbar/NavbarOne";
import NavBarTwo from "../../components/Navbar/NavBarTwo";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Featured from "../../components/Featured/Featured";


const Home = () => {
  return (
    <div className="">
      
      
      <div className=" container mx-auto">
      <Slider></Slider>
      <Featured></Featured>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;