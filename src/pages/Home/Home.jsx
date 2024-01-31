import { Helmet } from "react-helmet-async";
import NavbarOne from "../../components/Navbar/NavbarOne";
import NavBarTwo from "../../components/Navbar/NavBarTwo";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Featured from "../../components/Featured/Featured";
import ServiceTypes from "../../components/ServiceNonFunctional/ServiceTypes";
import PopularProduct from "../../components/PopularProduct/PopularProduct";


const Home = () => {
  return (
    <div className="">
      
      
      <div className=" container mx-auto">
      <Slider></Slider>
      <Featured></Featured>
      
      <PopularProduct></PopularProduct>
      <ServiceTypes></ServiceTypes>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;