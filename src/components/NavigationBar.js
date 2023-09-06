import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import logo from '../images/logo.png'

function NavigationBar() {
  return (
    <nav>
      <img src={logo} alt="no pic" className='logo' />
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <div className="search">
                    <input type="text" name="search" id="search" placeholder="Search this Website"/>                           
                </div>
      </ul>
    </nav>
  );
}

export default NavigationBar;
