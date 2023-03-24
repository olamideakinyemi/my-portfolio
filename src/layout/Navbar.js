import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink, useLocation } from "react-router-dom";





function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const location = useLocation()
  const styles = {
    className: 'px-8 hover:text-orange-600',
    activeClassName: 'text-orange-600',
  }
   

  const links = [
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/',
      name: 'HOME',
      id: "1",
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/contact',
      name: 'CONTACT',
      id: "2",
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/projects',
      name: 'PROJECTS',
      id: "3",
    },

  ]


  return (
    <div className="border-b pb-4 px-2 md:px-2 py-6 font-poppins overflow-hidden">
      <div className="w-10/12 mx-auto md:flex items-center justify-between h-full">
        <div className="md:w-auto w-full flex items-center justify-between">
          <img alt="logo" src={logo} />
          <div className='md:hidden block'>
            {!isNavOpen ? (
              <div onClick={() => setIsNavOpen(true)}>
                <svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="31" height="2.85714" rx="1.42857" transform="matrix(1 0 0 -1 0 2.85718)" fill="black" />
                  <rect width="31" height="2.85714" rx="1.42857" transform="matrix(1 0 0 -1 0 11.4286)" fill="black" />
                  <rect width="31" height="2.85714" rx="1.42857" transform="matrix(1 0 0 -1 0 20)" fill="black" />
                </svg>

              </div>
            ) : (
                <div onClick={() => setIsNavOpen(false)}>
                  <p className='text-4xl text-green '>&times;</p>
                </div>
              )}
          </div>
        </div>
        <nav className={`flex flex-col md:flex-row m-auto gap-5 text-sm font-bold text-right transform duration-500 ${isNavOpen ? 'translate-x-0 duration-500 h-28 mt-6' : 'translate-x-80 md:translate-x-0 h-0'
          }`}>
          {links.map(link => (<NavLink key={link.id}
            className={`${link.className} 
          ${link.to === location.pathname ? link.activeClassName : ''}`}
            to={link.to}>{link.name}
          </NavLink>))}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

