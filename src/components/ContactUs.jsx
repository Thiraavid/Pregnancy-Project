import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Map from "../assets/map.png";
import { IoMdHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
const ContactUs = () => {
  return (
    <div className=" contactUs w-auto h-auto bg m-10 mr-0 relative top-[70px] mb-20">
      <h2 className="font-bold text-4xl mb-10 text-[#135d66] max-md:text-3xl max-sm:text-2xl">Contact US</h2>
      <div className="container flex justify-center items-center max-md:flex-col gap-y-10 ">

     
      <div className="container left flex justify-center items-start max-md:items-center pr-8 flex-col gap-y-5   ">
        <div className="phone flex justify-start items-center gap-x-5">
          <FaPhoneAlt className="text-xl" />
          <p> Mobile: +1 9199317699</p>
        </div>
        <div className="email flex justify-start items-center gap-x-5">
          <MdEmail className="text-2xl"  />
          <p>Email: arthilamazeclass@gmail.com</p>
        </div>
        <div className="address flex justify-start items-center gap-x-5 ">
          <IoMdHome className="text-3xl"  />
          <p>35 River Dr S, Jersey City, NJ 07310, United States</p>
        </div>
        <div className="map">
          <img src={Map} alt="" className="w-[400px]" />
        </div>
      </div>
      <div className="container right flex justify-start items-start w-full flex-col p-10">
        <form action="" className="w-full flex flex-col gap-y-5" >
          <textarea name="" id="" className="w-full h-40 border-gray-800 border-2" placeholder="Enter message"></textarea>
          <div className="name-email flex justify-between items-center max-md:flex-col max-md:gap-y-5 ">
            <input type="text" placeholder="Name" className="p-4 max-md:w-full border-gray-800 border-2" />
            <input type="email" placeholder="Email" className="p-4 max-md:w-full border-gray-800 border-2" />
          </div>
          <input type="text" name="" id="" className="p-4 border-gray-800 border-2" placeholder="Subject" />
          <button type="submit" className="p-4 bg-[#f7868a] font-bold text-2xl text-white rounded-lg">Send</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
