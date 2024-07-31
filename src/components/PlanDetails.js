import React, { useState } from 'react';
import './PlanDetails.scss';

const PlanDetails = () => {
  const [isYearly, setIsYearly] = useState(true);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section className="plan-details">
      <div className="container">
        <h2>Choose the Perfect Plan for Your Business</h2>
        <div className="toggle-container">
          <button className={`toggle-button ${isYearly ? 'yearly' : 'monthly'}`} onClick={togglePricing}>
            {isYearly ? 'Yearly' : 'Monthly'}
          </button>
        </div>
        <div className="plan-cards">
          <div className="plan-card">
            <h3>Free</h3>
            <p className="price">{isYearly ? '₹0 / year' : '₹0 / month'}</p>
            <p className="one-liner">Get Started at No Cost!</p>
            <p> </p>
            <button className="trial-button">Start Trial</button>
          </div>
          <div className="plan-card">
            <h3>Standard</h3>
            <p className="price">{isYearly ? '₹8988 / year' : '₹899 / month'}</p>
            <p className="one-liner">Perfect for Growing Businesses</p>
            <p> </p>
            <button className="trial-button">Start Trial</button>
          </div>
          <div className="plan-card">
            <h3>Professional</h3>
            <p className="price">{isYearly ? '₹17988 / year' : '₹1799 / month'}</p>
            <p className="one-liner">Advanced Features for Professionals</p>
            <button className="trial-button">Start Trial</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanDetails;




