import React from 'react';
import './Footer.scss'; // Import styling for Footer
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons from react-icons/fa

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Naturals Group</h3>
          <p>
           Natural Technologies (P) Ltd. was formed in 1996 and Natural Support Consultancy Services (P) Ltd. which was formed in 2005. With a PAN India presence we work with Global Partners to provide our software products to BFSI, Government Departments and the Corporates sector
          </p>
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Contact Us</h3>
          <address>
            Jaipur, Rajasthan<br />
            India<br />
            Phone: (+91) 98290 67673
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Natural Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
