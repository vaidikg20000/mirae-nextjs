import React from "react";
import Image from "next/image";
// import classes from './Navbar.module.css'

const Navbar = () => {
  const navList = [
    "ABOUT US",
    "OUR TEAM",
    "OUR BUSINESS",
    "CAREER",
    "RESEARCH",
    "REGULATORY CORNER",
    "CONTACT US",
  ];
  return (
    <nav className='nav-main flex items-center justify-between px-4 py-3 bg-stone-50'>
      {/* Logo */}
      {/* <div>
          <img src="/path-to-your-logo.png" alt="Logo" className="w-8 h-auto" />
        </div> */}
      <Image
        src="/logo-192-px-x-60px.png"
        width={200}
        height={200}
        alt="Mirae Logo"
        style={{padding:'10px'}}
      />
      {/* Navigation Links */}
      <ul className="flex items-center space-x-4 mt-4">
        {/* <li>
            <a href="#" className="text-indigo-900 font-semibold hover:text-orange-500">About Us</a>
          </li>
          <li>
            <a href="#" className="text-indigo-900 font-semibold hover:text-orange-500">Our Team</a>
          </li> */}
        {navList.map((data) => {
          return (
            <li>
              <a
                href="#"
                className="px-2 text-indigo-900 font-semibold hover:text-orange-500"
              >
                {data}
              </a>
            </li>
          );
        })}
        {/* Add more navigation links here */}
      </ul>
    </nav>
  );
};

export default Navbar;
