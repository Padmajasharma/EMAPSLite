import React from 'react';
import './ProductExplanation.scss';
import backgroundImg from '../assets/boxes.jpg'; // Replace with your actual image path
import { FaFileInvoiceDollar, FaChartPie, FaShoppingCart, FaWarehouse, FaSyncAlt, FaBalanceScale, FaPercent, FaMoneyCheckAlt } from 'react-icons/fa';

const ProductExplanation = () => {
  return (
    <div className="marketing-text" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <p className="small-line">Unlock the Power of Efficiency</p>
      <h1 className="big-bold-text">Revolutionize Your Business with eMaps Lite</h1>
      <div className="three-lines">
        <p>Unlock the power of seamless integration and intuitive design with eMaps Lite, India's leading Billing & Accounting Software. From streamlined invoicing to meticulous expense tracking, and robust inventory management, eMaps Lite empowers you to take control of your financial operations effortlessly.</p>
      </div>
      <div className="coverage-container">
        <h2>360º Coverage</h2>
        <div className="coverage-items">
          <div className="coverage-item">
            <FaFileInvoiceDollar className="coverage-icon" />
            <p>Billing & Invoicing</p>
          </div>
          <div className="coverage-item">
            <FaChartPie className="coverage-icon" />
            <p>Expense Tracking & Management</p>
          </div>
          <div className="coverage-item">
            <FaShoppingCart className="coverage-icon" />
            <p>Purchase Management</p>
          </div>
          <div className="coverage-item">
            <FaWarehouse className="coverage-icon" />
            <p>Inventory Management</p>
          </div>
          <div className="coverage-item">
            <FaSyncAlt className="coverage-icon" />
            <p>Sales Cycle</p>
          </div>
          <div className="coverage-item">
            <FaBalanceScale className="coverage-icon" />
            <p>Balance Sheets, Profit & Loss</p>
          </div>
          <div className="coverage-item">
            <FaPercent className="coverage-icon" />
            <p>GST, TDS, Tax Management</p>
          </div>
          <div className="coverage-item">
            <FaMoneyCheckAlt className="coverage-icon" />
            <p>Accounts Receivable & Collections</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductExplanation;

