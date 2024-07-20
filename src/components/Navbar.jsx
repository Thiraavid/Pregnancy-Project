import { useState } from "react";
import Navlogo from "../assets/headerlogo3.png";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [navbar,setNavbar] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };
  const changeBackground = () => {
    if (window.scrollY > 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={navbar?"w-full h-auto fixed top-0 flex justify-between items-center capitalize z-20 bg-[#ffffff] shadow-md shadow-gray-600":"w-full h-auto fixed top-0 flex justify-between items-center capitalize z-20 bg-[#ffffff] "}>
        <div className="nav-left ">
          <img src={Navlogo} alt="Nav-logo" className="w-[170px]" />
        </div>
        <div className="nav-right max-md:hidden flex justify-center items-center">
          <ul className="flex justify-center items-center gap-x-10  mr-10">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">empower mama - birth mastery class</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <button className=" text-white bg-[#135d66] rounded-lg py-3 px-2 mr-10">
            Get a free early pregnancy class
          </button>
        </div>
        <div
          onClick={handleClick}
          className="mobile-icon  max-md:flex  hidden text-3xl mr-10 z-40 cursor-pointer"
        >
          {!menu ? <IoMenu className="text-[#ec7f96]" /> : <MdOutlineCancel />}

         
        </div>
        <div className={!menu?"mobile-menu absolute top-0 right-0 h-screen w-[300px]  justify-center items-center text-sm text-center shadow-xl shadow-slate-800 bg-[#e27477] -z-0   hidden ":"mobile-menu absolute top-0 right-0 h-screen w-[300px] max-md:flex justify-center items-center text-sm text-center shadow-xl shadow-slate-800 bg-[#e27477] -z-0 max-lg:hidden "}>
            <ul className="flex flex-col gap-y-12 font-semibold text-black ">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">empower mama - birth mastery class</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
