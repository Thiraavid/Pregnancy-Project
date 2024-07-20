import React from 'react'
import Testimonial2 from "../assets/testimonial2.jpg"
const Feedback = () => {
  return (
    <div className='feedback-main relative h-auto top-[80px] m-10 text-center mt-20 mb-20'>
<h2 className='font-bold text-4xl text-[#135d66] m-10 max-md:text-3xl max-sm:text-2xl'>Some Positive Feedback That Encourage Us</h2>
<div className="container flex justify-center items-center flex-col gap-y-5 bg-[#d0c0e5] p-10 rounded-lg">
  <img src={Testimonial2} alt="Feedback-img" className='rounded-full w-20 h-20' />
  <h2 className='font-bold text-lg'>Aravindh Seetharaman</h2>
  <h3 className='text-gray-600'>Customer</h3>
  <p className='max-sm:text-sm'>Arthi Lamaze class online was a game-changer for me as a dad-to-be! Even though it was online, I felt like I was right there in the room learning alongside my partner. The instructor was clear and made sure I understood everything. I gained confidence and valuable skills to support my partner during labor. Highly recommend to fellow dads gearing up for parenthood!</p>
  <a href="/" className='max-sm:text-sm text-blue-500'>read more</a>
</div>
    </div>
  )
}

export default Feedback