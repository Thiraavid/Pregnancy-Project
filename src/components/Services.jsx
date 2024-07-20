import React from 'react'
import { FaBook } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import Serviceprops from './props/Serviceprops';

const Services = () => {
  return (
    <>

   <div className='service-main  relative top-[70px]  m-10 text-white mt-20 h-auto mb-10   '>
      <h2 className='font-bold text-4xl text-[#135d66] max-md:text-3xl max-sm:text-2xl'>Our Services</h2>'
      <div className="container grid grid-cols-3 gap-x-20 place-items-center max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-y-10 w-full ">
      <Serviceprops color="#9bcc53" h2="Course Content" p="Check out our comprehensive course outline for Lamaze classes." a="Click here to view" icon={<FaBook className="text-[#9bcc53]" />}/>
      <Serviceprops color="#faa53f" h2="Online Classes" p="Check out our Lamaze classes and book a session today!" a="Click here to register" icon={<IoIosPeople  className="text-[#faa53f]" />}/>
      <Serviceprops color="#a26daf" h2="Book Appointment" p="Book a one-on-one session with us to learn how the Lamaze classes." a="Click here to Book" icon={<FaUserDoctor  className="text-[#a26daf]" />}/>
      </div>
    
    </div>

    </>
  )
}

export default Services