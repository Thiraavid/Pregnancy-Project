import React from "react";
import { FaYoutube, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Links = () => {
  return (
    <div className="w-auto h-auto m-10 flex flex-col gap-y-5 capitalize justify-center items-center">
      <div className="container grid grid-cols-4 gap-y-5 place-items-start  max-md:grid-cols-2 max-sm:grid-cols-1 max-md:place-items-center">
        <div className="company flex flex-col justify-center items-start gap-y-3 max-md:items-center ">
          <h2 className="font-bold text-2xl mb-10 text-[#135d66] max-md:text-2xl max-sm:text-xl underline-offset-8 underline">
            Company
          </h2>
          <a href="/">About Us</a>
          <a href="/">Class Registration</a>
        </div>
        <div className="help flex flex-col justify-center items-start gap-y-3 max-md:items-center ">
          <h2 className="font-bold text-2xl mb-10 text-[#135d66] max-md:text-2xl max-sm:text-xl underline-offset-8 underline">
            Get Help
          </h2>
          <a href="/">FAQ</a>
          <a href="/">Course Content</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="classes flex flex-col justify-center items-start gap-y-3 lg:mr-20 max-md:items-center">
          <h2 className="font-bold text-2xl mb-10 text-[#135d66] max-md:text-2xl max-sm:text-xl underline-offset-8 underline">
            Our Classes
          </h2>
          <a href="/">Empower Mama - LAMAZE Birth Mastery Class</a>
          <a href="/">Get A Free Early Pregnancy Class</a>
        </div>
        <div className="follow flex flex-col justify-center items-start gap-y-3 max-md:items-center">
          <h2 className="font-bold text-2xl mb-10 text-[#135d66] max-md:text-2xl max-sm:text-xl underline-offset-8 underline">
            Follow Us
          </h2>
          <div className="div container flex justify-center items-start text-3xl gap-x-3">
            <div className="youtube w-14 h-14 bg-[#f7868a] rounded-full flex justify-center items-center text-white">
              <FaYoutube />
            </div>
            <div className="facebook w-14 h-14 bg-[#f7868a] rounded-full flex justify-center items-center text-white">
              <FaFacebook />
            </div>
            <div className="instagram w-14 h-14 bg-[#f7868a] rounded-full flex justify-center items-center text-white">
              <FaInstagram />
            </div>
            <div className="whatsapp w-14 h-14 bg-[#f7868a] rounded-full flex justify-center items-center text-white">
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>

      <p className="text-center">Arthi Lamaze © 2024. All Rights Reserved.</p>
    </div>
  );
};

export default Links;
