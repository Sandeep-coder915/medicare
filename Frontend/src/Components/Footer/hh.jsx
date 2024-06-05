import React from 'react'
import heroimg01 from '../assets/images/hero-img01.png'
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
                            <p className='text_para'>Patient satisfection  </p>
                            <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]' style={{ backgroundColor: "#0077FF", width: "110px", marginTop: "1px" }}></span>

                        </div>
                    </div>

                </div>
                <img src={heroimg01
                } alt="" />
            </section>

        </>
    )
}

export default Home
