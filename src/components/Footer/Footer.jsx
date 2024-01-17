import { IoLocationSharp } from "react-icons/io5";

import { MdOutlineHeadsetMic } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io5";

import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-green-200">
      <div className="grid grid-cols-1 md:grid-cols-5 ">
        <div>
          <div className=" ml-4 ">
            <img
              className="w-36 "
              src="https://i.ibb.co/dJSdKHD/Green-Modern-Organic-Health-Food-Logo-1-removebg-preview-removebg-preview.png"
              alt=""
            />
            <h2 className="mt-[-28px]">Awesome grocery store website</h2>
            <h2 className="flex">
              <IoLocationSharp className="text-md mt-1" />
              <span className="font-bold text-mdg">
                Address: Dhaka,Bangladesh
              </span>
            </h2>
            <h2 className="flex">
              <MdOutlineHeadsetMic className="text-md mt-1" />
              <span className="font-bold text-mdg">Call Us: +880171234569</span>
            </h2>
            <h2 className="flex">
              <MdEmail className="text-md mt-1" />
              <span className="font-bold text-mdg">
                Email:{" "}
                <span className=" font-normal">localefood@gmail.com</span>
              </span>
            </h2>
            <h2 className="flex">
              <MdOutlineWatchLater className="text-md mt-1" />

              <span className="font-bold text-mdg">
                Hours:10:00 - 18:00, Mon - Sat
              </span>
            </h2>
          </div>
        </div>

        <div>
          <header className="footer-title mt-4">Company</header>
          <h2 className="mt-3 text-md">About Us</h2>
          <h2 className="mt-3 text-md">Delivery Information</h2>
          <h2 className="mt-3 text-md">Privacy Policy</h2>
          <h2 className="mt-3 text-md">Terms & Conditions</h2>
          <h2 className="mt-3 text-md">Contact Us</h2>
          <h2 className="mt-3 text-md">Careers</h2>
        </div>

        <div>
          <header className="footer-title mt-4">Company</header>
          <h2 className="mt-3 text-md">About Us</h2>
          <h2 className="mt-3 text-md">Delivery Information</h2>
          <h2 className="mt-3 text-md">Privacy Policy</h2>
          <h2 className="mt-3 text-md">Terms & Conditions</h2>
          <h2 className="mt-3 text-md">Contact Us</h2>
          <h2 className="mt-3 text-md">Careers</h2>
        </div>

        <div>
          <header className="footer-title mt-4">Company</header>
          <h2 className="mt-3 text-md">About Us</h2>
          <h2 className="mt-3 text-md">Delivery Information</h2>
          <h2 className="mt-3 text-md">Privacy Policy</h2>
          <h2 className="mt-3 text-md">Terms & Conditions</h2>
          <h2 className="mt-3 text-md">Contact Us</h2>
          <h2 className="mt-3 text-md">Careers</h2>
        </div>

        <div>
          <h2 className="font-bold mt-4 text-md">Install App</h2>
          <h2 className="mt-4 text-mdg">From App Store or Google Play</h2>
          <div className="flex gap-2 mt-4">
            <div>
              <img
                className=" w-32 h-14"
                src="https://i.ibb.co/M8BGKg1/app-store.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className=" w-32 h-14"
                src="https://i.ibb.co/TqJh4t1/google-play.jpg"
                alt=""
              />
            </div>
          </div>

          <h2 className="mt-4 text-mdg">Secured Payment Gateways</h2>
          <img
            className="mt-4"
            src="https://i.ibb.co/RDKFmf6/payment-method.png"
            alt=""
          />
        </div>
      </div>

      <div className=" container mx-auto border-t-2   mt-4 divide-x  border-black sm:hidden md:block"></div>

      <div className="container mx-auto mt-2 p-4 grid grid-cols-1 md:grid-cols-2">
        <div>
          <footer className="text-base-content">
            <aside>
              <p className="text-md  text-center">
                Copyright © 2024 - locale Flavour Food
              </p>
              <p className="text-md  text-center">
                All rights reserved
              </p>
            </aside>
          </footer>
        </div>

        <div className=" ">
          <div className="flex text-md gap-2 justify-center">
            <h2 className="text-md font-bold mt-2">Follow Us</h2>

            <FaFacebook className=" text-4xl" />
            <AiFillInstagram className="text-4xl"/>
            <IoLogoYoutube className="text-4xl"/>

            <AiFillTwitterCircle className="text-4xl"/>
          </div>

      
        </div>



      </div>
    </div>
  );
};

export default Footer;
