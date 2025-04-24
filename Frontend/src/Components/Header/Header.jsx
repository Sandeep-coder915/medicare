import React, { useEffect, useRef, useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../Context/AuthContext';
import logo from '../../assets/images/logo.png';
import userimg from '../../assets/images/avatar-icon.png';
import { motion, AnimatePresence } from 'framer-motion';

const NavLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const headerRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleStickyHeader = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    };
    window.addEventListener('scroll', handleStickyHeader);
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 }
    }),
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  return (
    <div>
    <header ref={headerRef} className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="" />
          {/* <span className="text-xl font-bold text-headingColor dark:text-white">MediCare</span> */}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {NavLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-primaryColor font-semibold'
                  : 'text-textColor dark:text-white hover:text-primaryColor transition'
              }
            >
              {link.display}
            </NavLink>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="text-xl text-gray-600 dark:text-white hover:text-primaryColor transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>

          {/* User or Login */}
          {token && user ? (
            <Link to={role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}>
              <img
                src={user?.photo || userimg}
                alt="User"
                className="w-9 h-9 rounded-full border-2 border-primaryColor cursor-pointer"
              />
            </Link>
          ) : (
            <Link to="/login">
              <button className="bg-primaryColor dark:text-white  px-4 py-1.5 rounded-full font-medium hover:bg-blue-600 transition">
                Login
              </button>
            </Link>
          )}

          {/* Hamburger Menu */}
          <button onClick={toggleMenu} className="lg:hidden text-3xl text-headingColor dark:text-white">
            <BiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 shadow-md"
          >
            {NavLinks.map((link, index) => (
              <motion.li
                key={link.path}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
              >
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'block text-primaryColor font-semibold'
                      : 'block text-textColor dark:text-white hover:text-primaryColor transition'
                  }
                >
                  {link.display}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
  
    </header>
        <div className='h-16'></div>
        </div>
  );
};

export default Header;
