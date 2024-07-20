import React from "react";
import Faqprops from "./props/Faqprops";
const FAQ = () => {
  return (
    <div className="h-auto relative top-[70px] m-10 text-center mb-0">
      <h2 className="font-bold text-4xl text-[#135d66] max-sm:text-2xl max-md:text-3xl mb-10">
        Frequently Asked Questions
      </h2>
      <div className="container space-y-5 ">
        <Faqprops />
        <Faqprops />
        <Faqprops />
        <Faqprops />
        
      </div>
    </div>
  );
};

export default FAQ;
