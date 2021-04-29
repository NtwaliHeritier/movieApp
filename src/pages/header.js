import { Link } from 'gatsby';
import React from 'react';
import * as Navbar from '../css/header.module.css';

const Header = () => {
  return ( 
    <div className={Navbar.nav}>
      <h1 className={Navbar.title}><Link to="/" className={Navbar.link}>Movies</Link></h1>
    </div>
   );
}
 
export default Header;