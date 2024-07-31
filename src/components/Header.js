import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom'; // Add this import
import naturalsLogo from '../assets/naturals-logo.png';
import emapsLiteLogo from '../assets/emaps-lite-logo.jpeg';

const Header = () => {
  return (
    <header>
      {/* Naturals Header */}
      <div className="header">
        <div className="logo">
          <img src={naturalsLogo} alt="Naturals Group" />
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li>
              <a href="#emaps">Emaps</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li className="dropdown">
              <a href="#allproducts">All Products</a>
              <ul className="dropdown-menu">
                <li><a href="#product1">Product 1</a></li>
                <li><a href="#product2">Product 2</a></li>
                <li><a href="#product3">Product 3</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button type="button">Search</button>
        </div>
      </div>

       {/* eMaps Lite Header */}
       <div className="emaps-lite-header">
        <div className="emaps-logo">
          <img src={emapsLiteLogo} alt="eMaps Lite" />
        </div>
        <nav>
          <ul>
            <li className="dropdown">
              <Link to="/features">Features</Link>
              <ul className="dropdown-menu">
                <li><a href="#feature1">Feature 1</a></li>
                <li><a href="#feature2">Feature 2</a></li>
                <li><a href="#feature3">Feature 3</a></li>
              </ul>
            </li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li className="dropdown">
              <a href="#solutions">Solutions</a>
              <ul className="dropdown-menu">
                <li><a href="#solution1">Solution 1</a></li>
                <li><a href="#solution2">Solution 2</a></li>
                <li><a href="#solution3">Solution 3</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#customers">Customers</a>
              <ul className="dropdown-menu">
                <li><a href="#customer1">Customer 1</a></li>
                <li><a href="#customer2">Customer 2</a></li>
                <li><a href="#customer3">Customer 3</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;





