const Hero = () => {
  return <div className="  hero-main container relative top-[80px]  bg-[url('/src/assets/Banner2.png')] bg-cover bg-center w-auto h-screen max-md:bg-left max-md:top-[40px] ">
<div className="hero-content  flex justify-center items-start flex-col w-auto h-screen gap-y-5 lg:ml-10  max-md:m-10 lg:w-[50%]">
  <h1 className="font-bold text-4xl max-md:text-3xl max-sm:text-2xl">Discover pregnancy, empower  yourself, build a birth plan, and  experience a positive childbirth with  our Lamaze Childbirth Education  Series</h1>
  <p className="text-md max-md:text-sm max-sm:text-[13px]">
  Stay informed and empowered throughout your pregnancy journey! Sign up for our  newsletter to receive expert tips, valuable insights, and the latest updates on pregnancy  and childbirth. Don't miss out on exclusive content and special offers—subscribe now and  take the first step towards a confident and positive birth experience!</p>
  <div className="form flex justify-center items-center gap-x-5 max-md:flex-col max-md:w-full max-md:gap-y-2 max-md:items-center ">
    <input type="text" placeholder="Name" className="px-7 py-3 rounded-lg max-md:py-2 max-md:px-4" />
    <input type="email" placeholder="email" className="px-7 py-3 rounded-lg max-md:py-2 max-md:px-4" />
    <button className="px-5 py-3 rounded-lg text-white font-bold text-lg bg-[#dd5000] max-md:px-2 max-md:py-2">Subscribe</button>
  </div>
</div>
  </div>;
};

export default Hero;
