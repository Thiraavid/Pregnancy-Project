import Youtube from "../assets/youtube.png"
const About = () => {
  return (
    <div className='about-main h-auto relative top-[80px] w-auto m-10 mb-10 max-md:mb-10  '>
      <h2 className="font-bold text-4xl mb-5 text-[rgb(19,93,102)] capitalize max-md:text-3xl max-sm:text-2xl">About our classes</h2>
      <div className="container flex justify-center items-center max max-md:flex-col max-md:gap-y-5">
        <div className="about-left w-[100%]">
          <p className="font-light mr-10 max-sm:text-sm">Arthi's LAMAZE class debuted in 2020 within the vibrant New York City locale. Our Lamaze Childbirth Education sessions are founded upon the principles of the Six Healthy Birth Practices. Upon finishing a Lamaze class or series, you and your partner will experience heightened confidence in your birthing capabilities, enabling you to make informed decisions throughout the journey of pregnancy, childbirth, breastfeeding, and early parenting. <span className="text-[#2839d6]">Learn more..</span></p>
        </div>
        <div className="about-right">
          <img src={Youtube} alt="youtube" style={{width:"600px"}} className="rounded-lg " />
        </div>
      </div>
    </div>
  )
}

export default About