import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Feedback from "./components/Feedback";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Links from "./components/Links";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Feedback />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <ContactUs />
      </section>
      <section>
        <Links />
      </section>
    </>
  );
};

export default App;
