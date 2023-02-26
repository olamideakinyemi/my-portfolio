import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from "react-router-dom";





function Navbar() {
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
    <nav className="flex items-center border-b pb-4  px-12 py-6">
      <div className="w-60">
        <img src={logo} />
      </div>
      <div className="flex m-auto text-sm font-semibold justify-between">
        {links.map(link => (<Link key={link.id}
          className={link.className}
          activeClassName={link.activeClassName}
          to={link.to}>{link.name}
        </Link>))}
      </div>
    </nav>
  );
}

export default Navbar;