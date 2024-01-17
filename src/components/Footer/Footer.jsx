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
              <IoLocationSharp className="text-xl mt-1" />
              <span className="font-bold text-lg">
                Address: Dhaka,Bangladesh
              </span>
            </h2>
            <h2 className="flex">
              <MdOutlineHeadsetMic className="text-xl mt-1" />
              <span className="font-bold text-lg">Call Us: +880171234569</span>
            </h2>
            <h2 className="flex">
              <MdEmail className="text-xl mt-1" />
              <span className="font-bold text-lg">
                Email:{" "}
                <span className=" font-normal">localefood@gmail.com</span>
              </span>
            </h2>
            <h2 className="flex">
              <MdOutlineWatchLater className="text-xl mt-1" />

              <span className="font-bold text-lg">
                Hours:10:00 - 18:00, Mon - Sat
              </span>
            </h2>
          </div>
        </div>

        <div>
          <header className="footer-title mt-4">Company</header>
          <h2 className="mt-3 text-xl">About Us</h2>
          <h2 className="mt-3 text-xl">Delivery Information</h2>
          <h2 className="mt-3 text-xl">Privacy Policy</h2>
          <h2 className="mt-3 text-xl">Terms & Conditions</h2>
          <h2 className="mt-3 text-xl">Contact Us</h2>
          <h2 className="mt-3 text-xl">Careers</h2>
        </div>

        <div>
          <header className="footer-title mt-4">Company</header>
          <h2 className="mt-3 text-xl">About Us</h2>
          <h2 className="mt-3 text-xl">Delivery Information</h2>
          <h2 className="mt-3 text-xl">Privacy Policy</h2>
          <h2 className="mt-3 text-xl">Terms & Conditions</h2>
          <h2 className="mt-3 text-xl">Contact Us</h2>
          <h2 className="mt-3 text-xl">Careers</h2>
        </div>

        <div>
          <header className="footer-title mt-4">Company</header>
          <h2 className="mt-3 text-xl">About Us</h2>
          <h2 className="mt-3 text-xl">Delivery Information</h2>
          <h2 className="mt-3 text-xl">Privacy Policy</h2>
          <h2 className="mt-3 text-xl">Terms & Conditions</h2>
          <h2 className="mt-3 text-xl">Contact Us</h2>
          <h2 className="mt-3 text-xl">Careers</h2>
        </div>

        <div>
          <h2 className="font-bold mt-4 text-xl">Install App</h2>
          <h2 className="mt-4 text-lg">From App Store or Google Play</h2>
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

          <h2 className="mt-4 text-lg">Secured Payment Gateways</h2>
          <img
            className="mt-4"
            src="https://i.ibb.co/RDKFmf6/payment-method.png"
            alt=""
          />
        </div>
      </div>

      <div className=" container mx-auto border-t-2   mt-4 divide-x  border-black sm:hidden md:block"></div>

      <div className="container mx-auto mt-4 p-2 grid grid-cols-1 md:grid-cols-2">
        <div>
          <footer className="text-base-content">
            <aside>
              <p className="text-xl  text-center">
                Copyright © 2024 - locale Flavour Food
              </p>
              <p className="text-xl  text-center">
                All rights reserved
              </p>
            </aside>
          </footer>
        </div>

        <div className=" ">
          <div className="flex text-xl gap-2 justify-center">
            <h2 className="text-lg font-bold mt-2">Follow Us</h2>

            <FaFacebook className=" text-4xl" />
            <AiFillInstagram className="text-4xl"/>
            <IoLogoYoutube className="text-4xl"/>

            <AiFillTwitterCircle className="text-4xl"/>
          </div>

        <h2 className=" text-xl text-center">Up to 15% discount on your first subscribe</h2>

        </div>



      </div>
    </div>
  );
};

export default Footer;
