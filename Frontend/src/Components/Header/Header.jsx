import React from 'react'
import { useEffect, useRef, useContext } from 'react'
import logo from "../../assets/images/logo.png"
import userimg from "../../assets/images/avatar-icon.png"
import { NavLink, Link } from "react-router-dom"
 
import { BiMenu } from "react-icons/bi"
import { authContext } from '../../Context/AuthContext'

const NavLinks = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/doctors",
    display: "Find a Doctor"
  },
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/contact",
    display: "Contact"
  },

]
const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const { user, role, token } = useContext(authContext)

  // const handlestickeyheader = () => {
  //   window.addEventListener('scroll', () => {
  //     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //       headerRef.current.classList.add('sticky_header')
  //     }
  //     else {
  //       headerRef.current.classList.remove('sticky_header')
  //     }
  //   })
  // }

  // useEffect(() => {
  //   handlestickeyheader()
  //   return () => window.removeEventListener('scroll', handlestickeyheader)
  // })

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
    <header className='header flex items-center  head' ref={headerRef}>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/* {---------logo==========} */}
          <div>
            <img src={logo} alt="logo" />
          </div>

          {/* {======menu=====} */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>

            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                NavLinks.map((link, index) => <li key={index}>
                  <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[14px] leading-1 font-[600]' : 'text-textColor text=[16px] leading-7 font-[500]'}>{link.display}</NavLink>
                </li>)
              }
            </ul>

          </div>
          {/* {======Navright=====} */}
          <div className="flex items-center gap-4">

            {
              token && user ? (<div >
                <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                    <img src={user?.photo} alt="" className='w-full rounded-full'  />
                  </figure>
             
                </Link>
              </div>) :
                (<Link to="/login">
                  <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44x] flex items-center justify-center rounded-[50px]' style={{ background: "#0077FF", borderRadius: "30%", height: "35px" }}>Login</button>
                </Link>
                )
            }







            <span className='="md:hidden show_menu' onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header
