import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faCashRegister,
  faChartLine,
  faFileInvoiceDollar,
  faReceipt,
  faBalanceScale,
  faQrcode
} from '@fortawesome/free-solid-svg-icons';
import './FeaturesPage.scss';

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <header className="features-header">
        <h1>eMaps Lite Features</h1>
        <p>Explore the powerful features of eMaps Lite that streamline your business operations.</p>
      </header>

      <section className="feature-section">
        <h2>Purchase/Inventory Management</h2>
        <div className="feature-icon">
          <FontAwesomeIcon icon={faBoxOpen} />
        </div>
        <ul className="feature-list">
          <li>Requisition and approval</li>
          <li>Quotation and Ordering</li>
          <li>Purchase of Inventory / Asset / Consumables / Services</li>
          <li>Stock / Inventory Management</li>
          <li>Issue of stock to Work in Progress, Individual staff, Project</li>
          <li>Transfer of stock between offices taking care of GST</li>
          <li>Issue of Stock to Fixed Asset (Direct purchase, From WIP to FA, Put to use of Fixed Asset to initiate Depreciation)</li>
          <li>Stock / Fixed Asset to Dead Stock, Scrap, Sale of Scrap</li>
        </ul>
      </section>

      <section className="feature-section">
        <h2>Sales Management</h2>
        <div className="feature-icon">
          <FontAwesomeIcon icon={faCashRegister} />
        </div>
        <ul className="feature-list">
          <li>Receipt of Order</li>
          <li>Sale Invoice</li>
          <li>Sale Release Note</li>
          <li>Sales Packing Slip</li>
          <li>Billing & Invoicing</li>
          <li>Collections</li>
          <li>Accounts Receivable</li>
        </ul>
      </section>

      <section className="feature-section">
        <h2>General Ledger</h2>
        <div className="feature-icon">
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <ul className="feature-list">
          <li>Create GL</li>
          <li>TDS Sector Master</li>
          <li>Reports</li>
          <li>Vendor/Client Registration</li>
          <li>Address, GST, PAN, Aadhar, TAN, Mobile, etc.</li>
          <li>Login Security (Optional)</li>
          <li>OTP Basis</li>
        </ul>
      </section>

      <section className="feature-section">
        <h2>Payments</h2>
        <div className="feature-icon">
          <FontAwesomeIcon icon={faFileInvoiceDollar} />
        </div>
        <ul className="feature-list">
          <li>Identify the bills Payable from bills Payable register</li>
          <li>Make the Payment to Vendors</li>
          <li>Approval for Payments</li>
          <li>Payment with proper UTR</li>
          <li>Manage Direct Release of funds and CFDL Accounts</li>
        </ul>
      </section>

      <section className="feature-section">
        <h2>Receipt</h2>
        <div className="feature-icon">
          <FontAwesomeIcon icon={faReceipt} />
        </div>
        <ul className="feature-list">
          <li>Receipt of Advance with GST from customer</li>
          <li>Supply of Goods against advance revised</li>
          <li>Adjustments of Advance against bills</li>
          <li>Check the bill receivable</li>
        </ul>
      </section>

      <section className="feature-section">
        <h2>Reconciliation</h2>
        <div className="feature-icon">
          <FontAwesomeIcon icon={faBalanceScale} />
        </div>
        <ul className="feature-list">
          <li>Bank Account Management & Reconciliation</li>
          <li>TDS Management & Reconciliation</li>
          <li>GST Management & Reconciliation</li>
        </ul>
      </section>

      <section className="feature-section">
        <h2>Others</h2>
        <div className="feature-icon">
          <FontAwesomeIcon icon={faQrcode} />
        </div>
        <ul className="feature-list">
          <li>QR Codes Integrations</li>
          <li>Bar Code Integrations</li>
          <li>Mobile Application Available</li>
        </ul>
      </section>
    </div>
  );
};

export default FeaturesPage;

