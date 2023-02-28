import React from 'react';
import logo from '../assets/images/logo.png';
import { NavLink, Router, useLocation } from "react-router-dom";





function Navbar() {
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
  //  console.log(location)
  return (
    <nav className="flex items-center border-b pb-4 md:px-12 py-6 font-poppins">
      <div className="md:w-60">
        <img src={logo} />
      </div>
      <div className="flex m-auto text-sm font-bold justify-between">
        {links.map(link => (<NavLink key={link.id}
          className={`${link.className} 
          ${link.to === location.pathname ? link.activeClassName : ''}`}
          to={link.to}>{link.name}
        </NavLink>))}
      </div>
    </nav>
  );
}

export default Navbar;

