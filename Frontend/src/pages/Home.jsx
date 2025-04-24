import { useState } from 'react';

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


const services = [
  {
    icon: icon01,
    title: 'Find a Doctor',
    description:
      'Get access to world-class specialists with years of trusted experience in various medical fields.',
    link: '/doctors',
  },
  {
    icon: icon02,
    title: 'Find a Location',
    description:
      'Easily locate our clinics and facilities in your area to receive quality care closer to home.',
    link: '/doctors',
  },
  {
    icon: icon03,
    title: 'Book Appointment',
    description:
      'Schedule appointments with ease using our intuitive online booking system tailored for you.',
    link: '/doctors',
  },
];

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

    return (
      <div className={darkMode ? 'dark' : ''}>

<section className=" pt-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl leading-[46px] text-headingColor dark:text-white font-extrabold md:text-5xl md:leading-[70px]">
              We help patients live a healthy, longer life
            </h1>
            <p className="text_para text-gray-600 dark:text-gray-300">
              MERN Doctor Appointment Booking Website using ReactJS, NodeJS, MongoDB, JWT, and Stripe.
            </p>
            <button className="btn bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
              Request an appointment
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="text-center">
                  <h2 className="text-4xl font-bold text-headingColor dark:text-white">30+</h2>
                  <div className={`w-${20 + index * 2} h-2 bg-${['yellow', 'purple', 'blue'][index]}-500 rounded-full mx-auto mt-1`}></div>
                  <p className="text_para text-gray-700 dark:text-gray-300 mt-2">
                    {['Years of Experience', 'Clinic Locations', 'Patient Satisfaction'][index]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-end gap-4">
            <img src={heroimg01} alt="Hero 1" className="w-full sm:w-1/2 object-cover rounded-xl shadow-lg" />
            <div className="space-y-4">
              <img src={heroimg02} alt="Hero 2" className="w-full object-cover rounded-xl shadow-lg" />
              <img src={heroimg03} alt="Hero 3" className="w-full object-cover rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-headingColor dark:text-white">
              Providing the Best Medical Services
            </h2>
            <p className="text_para text-gray-600 dark:text-gray-300 mt-4">
              World-class care for everyone. Our health system offers unmatched expert healthcare solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md py-8 px-6 text-center hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center justify-center">
                  <img src={service.icon} alt={service.title} className="w-16 h-16" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-headingColor dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="mt-6 inline-flex dark:text-white items-center justify-center w-11 h-11 rounded-full border border-gray-900 dark:border-gray-100  hover:bg-white hover:text-black transition mx-auto"
                  >
                    <BsArrowRight className="text-xl" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="xl:w-[470px] mx-auto text-center">
            <h2 className="heading text-headingColor dark:text-white">Our Medical Services</h2>
            <p className="text_para text-gray-600 dark:text-gray-300">
              World Class Care For Everyone. Our Health System Offers Unmatched Expert Healthcare
            </p>
          </div>
          <ServiceList   />
        </div>
      </section>

            {/* ===fewture setion=== */}

            <section className='bg-gray-50 dark:bg-gray-900 dark:text-white '>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">
                        {/* ==feture content== */}

                        <div className="xl:w-[670px]">
                            <h2 className="heading">
                                Get Virtual Tratment<br />anytime
                            </h2>
                            <ul className="pl-4 dark:text-white">
                                <li className="text_para dark:text-white">
                                    1. Schedule the Appointment Directly
                                </li>

                                <li className="text_para dark:text-white">2.Search For your Phycician Here ,and Contact their Officre </li>
                                <li className="text_para dark:text-white">3.view Our Phycician Whp are accepting new patinets ,use the online schedule tool to  select appointment anytime  </li>
                                {/* <li className="text_para"></li>
                               <li className="text_para"></li> */}

                            </ul>
                            <Link to="/"><button className='btn'>Learn More </button></Link>

                        </div>
                        {/* ===fetur img== */}
                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 ">
                            <img src={featureimg} alt="featre img " className='w-3/4' />
                            <div className="w-[150px] lg:w-[248px] bg-white dark:bg-black absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pb-[26] rounded-[10px] dark:text-white ">

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

            <section className='dark:text-white bg-white dark:bg-black'>
              
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className='heading text-center'>Our Great Doctors </h2>
                        <p className='text_para  '  >
                            World Class Care For Everyone .Our Health System Offers Unmartched ,expert Health care
                        </p>

                    </div>
                    <DoctorList />
                </div>
            </section>
            {/* ====faqsection=====
             */}
                    <section className='dark:text-white bg-white dark:bg-black'>

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
            <section className='dark:text-white bg-white dark:bg-black'>

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
        </div>
    )
}

export default Home
