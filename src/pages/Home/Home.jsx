import { Helmet } from "react-helmet-async";
import NavbarOne from "../../components/Navbar/NavbarOne";
import NavBarTwo from "../../components/Navbar/NavBarTwo";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";


const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Locale Food | Home</title>
      </Helmet>
      <div className=" max-w-screen-2xl mx-auto">
      <Slider></Slider>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;