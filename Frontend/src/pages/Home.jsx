import React from 'react'
import heroimg01 from '../assets/images/hero-img01.png'
import heroimg02 from '../assets/images/hero-img02.png'
import heroimg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import videoimg from '../assets/images/video-icon.png'
import featureimg from '../assets/images/feature-img.png'
import faqimg from '../assets/images/faq-img.png'

import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../Components/About/About'
import Services from "./Services"
import ServiceList from '../Components/Services/ServiceList'
import avataricon from "../assets/images/avatar-icon.png"
import DoctorList from '../Components/Doctors/DoctorList'
import FaqList from '../Components/Faq/FaqList'
import Testimonials from '../Components/Testimonials/Testimonials'


const Home = () => {
    return (
        <>
            <section className=' h hero_section pt-[60px] 2xl:h-[800px] '>

                <div className="container">
                    <div>
                        <div className="lg:w-[570px]">
                            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                                We help patients live a healthy, longer life
                            </h1>
                            <p className="text_para">
                                MERN Doctor Appointment Booking Website Design Using ReactJs, Node Js, MongoDB, JWT, and Stripe payment gateway. Contains a Home page, Services page, Doctor List page, Doctor details page, Contact page, Thankyou page, Sign in and Signup page, My account page, Role-based Authentication & Authorization, Review system, Booking system, Payment system, Source codes. Thank you!
                            </p>
                            <button className="btn">Request an appointment</button>
                        </div>
                    </div>
                    <div className="hel">
                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                30+
                            </h2>
                            <span className='"w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]' style={{ backgroundColor: "yellow", width: "90px", marginTop: "1px" }}></span>
                            <p className='text_para'>Years Of Experiance </p>


                        </div>
                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                30+
                            </h2>
                            <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]' style={{ backgroundColor: "#9771FF", width: "100px", marginTop: "1px" }}></span>
                            <p className='text_para'>Clinic Location</p>

                        </div>
                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                30+
                            </h2>
                            <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]' style={{ backgroundColor: "#0077FF", width: "110px", marginTop: "1px" }}></span>
                            <p className='text_para'>Patient satisfection  </p>

                        </div>
                    </div>

                </div>
                <div className='flex gap-[30px] justify-end'>
                    <div>
                        <img src={heroimg01
                        } className='w-full' alt="" style={{ marginRight: "20px" }} /></div>
                    <div className='mt-[30px]'>
                        <img src={heroimg02} alt="" className='w-full mb-[30px]' />
                        <img src={heroimg03} alt="" className='w-full ' />

                    </div>


                </div>

            </section>
            {/* ===hersection end== */}
            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className='heading text-center' style={{ fontWeight: "800", fontSize: "24px" }}>Provideing the best medical services</h2>
                        <p className="text_para text-center">Eorld Class care for a eb\eryone ,our heal system offers unmatch expert health care  </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap[30px] mt-[30px] lg:mt-[55px]">
                        <div className='py-[30px] px-5'>
                            <div className="flex items-center justify-center"><img src={icon01} alt="" /></div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Doctor</h2>
                                <p className="text-[16] leading-7 text-textColor font-[400] mt-4 text-center">Eorld Class care for a eb\eryone ,our heal system offers unmatch expert health care </p>
                                <Link to='/doctors' className="w-[44px]  h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none bg-blue-500 ">
                                    <BsArrowRight className='group-hover:text-white w-6 h-5 bg-blue-500  hre' />
                                </Link>

                            </div>

                        </div>
                        <div className='py-[30px] px-5'>
                            <div className="flex items-center justify-center"><img src={icon02} alt="" /></div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a LOcation </h2>
                                <p className="text-[16] leading-7 text-textColor font-[400] mt-4 text-center">Eorld Class care for a eb\eryone ,our heal system offers unmatch expert health care </p>
                                <Link to='/doctors' className="w-[44px]  h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none bg-blue-500 ">
                                    <BsArrowRight className='group-hover:text-white w-6 h-5 bg-blue-500  hre' />
                                </Link>

                            </div>

                        </div>
                        <div className='py-[30px] px-5'>
                            <div className="flex items-center justify-center"><img src={icon03} alt="" /></div>
                            <div className="mt-[30px]">
                                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment </h2>
                                <p className="text-[16] leading-7 text-textColor font-[400] mt-4 text-center">Eorld Class care for a eb\eryone ,our heal system offers unmatch expert health care </p>
                                <Link to='/doctors' className="w-[44px]  h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none bg-blue-500 ">
                                    <BsArrowRight className='group-hover:text-white w-6 h-5 bg-blue-500  hre' />
                                </Link>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
            {/* =====about-section==== */}


            <About />

            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className='heading text-center' >Our Medical services</h2>
                        <p className='text_para text-center' >
                            World Class Care For Everyone .Our Health System Offers Unmartched ,expert Health care
                        </p>

                    </div>
                    <ServiceList />
                </div>



            </section>

            {/* ===fewture setion=== */}

            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">
                        {/* ==feture content== */}

                        <div className="xl:w-[670px]">
                            <h2 className="heading">
                                Get Virtual Tratment<br />anytime
                            </h2>
                            <ul className="pl-4">
                                <li className="text_para">
                                    1. Schedule the Appointment Directly
                                </li>

                                <li className="text_para">2.Search For your Phycician Here ,and Contact their Officre </li>
                                <li className="text_para">3.view Our Phycician Whp are accepting new patinets ,use the online schedule tool to  select appointment anytime  </li>
                                {/* <li className="text_para"></li>
                               <li className="text_para"></li> */}

                            </ul>
                            <Link to="/"><button className='btn'>Learn More </button></Link>

                        </div>
                        {/* ===fetur img== */}
                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 ">
                            <img src={featureimg} alt="featre img " className='w-3/4' />
                            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pb-[26] rounded-[10px]">

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[6px] lg:gap-3">
                                        <p className="text-[10px] leading-[10px[ lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                                            Tue,24
                                        </p>
                                        <p className="text-[10px] leading-[10px[ lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                                            10:00
                                        </p>
                                    </div>
                                    <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-200 rounded py-1 px-[6px lg:py-3 lg:px-[9px]' >
                                        <img src={videoimg} alt="videoimg" />
                                    </span>
                                </div>

                                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2  lg:mt-4 rounded-full">
                                    Consulation
                                </div>
                                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                    <img src={avataricon} alt="avataricon" />
                                    <h4 className="text-[10px] leading-3 ;g:text-[16px] lg;leading-[22px] font-[700] text-headingColor ">wayne collins</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* geaturesection end */}
            {/* ====our great doctors === */}

            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className='heading text-center'>Our Great Doctors </h2>
                        <p className='text_para '  >
                            World Class Care For Everyone .Our Health System Offers Unmartched ,expert Health care
                        </p>

                    </div>
                    <DoctorList />
                </div>
            </section>
            {/* ====faqsection=====
             */}
            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-0">
                        <div className='w-1/2 hidden md:block'><img src={faqimg} alt="" /></div>

                        <div className="w-full md:w-1/2">
                            <h2 className='heading'>Most questions by</h2>
                            <FaqList />
                        </div>
                    </div>
                </div>
            </section>
            {/* ===faqsectionend== */}
            {/* ===textimonial=== */}
            <section>
                <div className="container">
                <div className="xl:w-[470px] mx-auto">
                        <h2 className='heading text-center'>What Our Patient Say </h2>
                        <p className='text_para'>
                            World Class Care For Everyone .Our Health System Offers Unmartched ,expert Health care
                        </p>

                    </div>
                  
                   <Testimonials/>
                </div>
            </section>
            {/* ====testimonialend=== */}
        </>
    )
}

export default Home
