import React from 'react';
import './BillingSoftware.scss';

const BillingSoftware = () => {
  return (
    <section id="billing-software" className="section">
      <div className="content">
        <div className="left-content">
          <h2>India's No. 1 Billing & Accounting Software</h2>
          <p>
            <strong>The Trusted Billing & Accounting Solution. Made in India.</strong>
            <br /><br />
            Experience a powerful software crafted to meet the needs of Indian businesses.
            <span className="highlight"> With eMaps Lite</span>, manage your finances effortlessly
            and grow your business with confidence!
          </p>
        </div>
        <div className="right-content">
          <h3>Enquiry Form</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BillingSoftware;


