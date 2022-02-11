import React, { Component } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuPages } from './MenuPages';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <nav className='NavbarPages'>
        <h1 className='navbar-logo'>Stock Tracker</h1>
        <div className='menu-icon'></div>
        <ul className='nav-menu'>
          {MenuPages.map((page, index) => {
            return (
              <li key={index} className=''>
                <a className={page.name} href={page.path}>
                  {page.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
