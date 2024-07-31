import React from 'react';
import { FaCheckCircle, FaCreditCard, FaExchangeAlt, FaThumbsUp, FaLightbulb, FaRocket, FaUsers, FaClock } from 'react-icons/fa';
import './IntroSection.scss';

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <h1>Empowering Your Business with eMaps Lite</h1>
        <div className="intro-items">
          <div className="intro-item">
            <FaCheckCircle className="icon" />
            <p>Free trial available</p>
          </div>
          <div className="intro-item">
            <FaCreditCard className="icon" />
            <p>No credit card required</p>
          </div>
          <div className="intro-item">
            <FaExchangeAlt className="icon" />
            <p>Flexible contract options</p>
          </div>
          <div className="intro-item">
            <FaThumbsUp className="icon" />
            <p>Straightforward, transparent pricing</p>
          </div>
          <div className="intro-item">
            <FaLightbulb className="icon" />
            <p>Minimal learning curve</p>
          </div>
          <div className="intro-item">
            <FaRocket className="icon" />
            <p>Quick and easy implementation</p>
          </div>
          <div className="intro-item">
            <FaUsers className="icon" />
            <p>Intuitive user experience</p>
          </div>
          <div className="intro-item">
            <FaClock className="icon" />
            <p>Efficient training and support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
