import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Pages/Home';
import Portfolio from './components/Pages/Portfolio';
import BuySell from './components/Pages/BuySell';
import './App.css';

function App() {
  return (
    <Router>
      <nav className='NavbarPages'>
        <h1 className='navbar-logo'>Stock Tracker</h1>
        <Link to='/' className='nav-menu'>
          Home
        </Link>
        <Link to='/Portfolio' className='nav-menu'>
          Portfolio
        </Link>
        <Link to='/BuySell' className='nav-menu'>
          Best Time to Buy & Sell
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/BuySell' element={<BuySell />} />
      </Routes>
    </Router>
  );
}

export default App;
