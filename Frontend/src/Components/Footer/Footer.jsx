import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const socialLinks = [
  {
    path: "https://www.youtube.com/watch?v=K4_J3ShsUOY",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />

  },
  {
    path: "https://www.youtube.com/watch?v=K4_J3ShsUOY",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />

  },
  {
    path: "https://www.youtube.com/watch?v=K4_J3ShsUOY",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />

  },
  {
    path: "https://www.youtube.com/watch?v=K4_J3ShsUOY",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />

  },
]

const quickLinks01 = [
  {
    path: '/home',
    display: "Home"
  },
  {
    path: '/',
    display: "About Us"
  }

  ,
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/",
    display: "Blog"
  }
];
const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor"
  },
  {
    path: "/",
    display: "Request an Appointment"
  }
  , {
    path: "/",
    display: "Find a Location"
  },
  {
    path: "/",
    display: "Get a Opinion"
  }
];

const quickLinks03 = [
  {
    path: "/find-a-doctor",
    display: "Donate"
  },
  {
    path: "/contact",
    display: "Contact Us"
  }

];



const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap group-[30px]:">
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] textt-textColor mt-4'>Copyright@ {Year} developed by sandeeep  All right reseved  </p>

            <div className='flex items-center gap-3 mt-4 
            '>
              {socialLinks.map((link, index) => <Link className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-black hover:border-none' to={link.path} key={index} >{link.icon}</Link>)}
            </div>

          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '> Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>
              ))}

            </ul>

          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '> I  Want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>
              ))}

            </ul>

          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '> Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>
              ))}

            </ul>

          </div>
       


        </div>
      </div>
    </footer>
  )
}

export default Footer










