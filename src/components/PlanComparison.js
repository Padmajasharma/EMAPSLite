import React, { useState } from 'react';
import './PlanComparison.scss';
import { FaCheckCircle, FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const PlanComparison = () => {
  const [expandedSections, setExpandedSections] = useState({
    section1: true, // Set to true to display the first section by default
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
    section7: false,
    section8: false,
    section9: false,
    section10: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const renderIcon = (condition) => {
    return condition ? <FaCheckCircle className="yes-icon" /> : <FaTimesCircle className="no-icon" />;
  };

  return (
    <div className="plan-comparison-container">
      <div className="plan-comparison">
        <div className="plan-sections">
          <div className="plan-section">
            <div className="section-header" onClick={() => toggleSection('section1')}>
              <h2>General Features</h2>
              {expandedSections.section1 ? <FaMinusCircle className="toggle-icon" /> : <FaPlusCircle className="toggle-icon" />}
            </div>
            {expandedSections.section1 && (
              <table className="plan-table">
                <tbody>
                  <tr>
                    <th></th>
                    <th>Free</th>
                    <th>Standard</th>
                    <th>Professional</th>
                  </tr>
                  <tr>
                    <td>Users</td>
                    <td>2</td>
                    <td>3</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Companies</td>
                    <td>1</td>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Total Entries allowed</td>
                    <td>5000</td>
                    <td>10000</td>
                    <td>25000</td>
                  </tr>
                  <tr>
                    <td>Employees (Payroll)</td>
                    <td>{renderIcon(false)}</td>
                    <td>10</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>Bulk Upload</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Reports</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Price Lists</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Inventory</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>User Roles and Access Rights</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="plan-section">
            <div className="section-header" onClick={() => toggleSection('section2')}>
              <h2>Master Management</h2>
              {expandedSections.section2 ? <FaMinusCircle className="toggle-icon" /> : <FaPlusCircle className="toggle-icon" />}
            </div>
            {expandedSections.section2 && (
              <table className="plan-table">
                <tbody>
                  <tr>
                    <td>Vendor and Client Management</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Organisation Structure</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Item Master</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>GL Master</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>TDS Master</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="plan-section">
            <div className="section-header" onClick={() => toggleSection('section3')}>
              <h2>Sales Cycle</h2>
              {expandedSections.section3 ? <FaMinusCircle className="toggle-icon" /> : <FaPlusCircle className="toggle-icon" />}
            </div>
            {expandedSections.section3 && (
              <table className="plan-table">
                <tbody>
                  <tr>
                    <td>Quotation</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Sales Orders</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Delivery Challans</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Sales Invoice</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Credit Notes</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Receipts</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Generate Links</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Outstanding Reminders</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="plan-section">
            <div className="section-header" onClick={() => toggleSection('section4')}>
              <h2>Purchase Cycle</h2>
              {expandedSections.section4 ? <FaMinusCircle className="toggle-icon" /> : <FaPlusCircle className="toggle-icon" />}
            </div>
            {expandedSections.section4 && (
              <table className="plan-table">
                <tbody>
                  <tr>
                    <td>Purchase Orders</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Purchase Challans</td>
                    <td>{renderIcon(false)}</td>
                    <td>{renderIcon(false)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Purchase Invoice</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Expenses</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Debit Notes</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="plan-section">
            <div className="section-header" onClick={() => toggleSection('section5')}>
              <h2>Banking</h2>
              {expandedSections.section5 ? <FaMinusCircle className="toggle-icon" /> : <FaPlusCircle className="toggle-icon" />}
            </div>
            {expandedSections.section5 && (
              <table className="plan-table">
                <tbody>
                  <tr>
                    <td>Direct Bank Integration with Partner Banks</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Bank Statement</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Bank Reconciliation</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="plan-section">
            <div className="section-header" onClick={() => toggleSection('section6')}>
              <h2>GST</h2>
              {expandedSections.section6 ? <FaMinusCircle className="toggle-icon" /> : <FaPlusCircle className="toggle-icon" />}
            </div>
            {expandedSections.section6 && (
              <table className="plan-table">
                <tbody>
                  <tr>
                    <td>GST Returns</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>GST Payments</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="plan-section">
            <div className="section-header" onClick={() => toggleSection('section7')}>
              <h2>Collaboration</h2>
              {expandedSections.section7 ? <FaMinusCircle className="toggle-icon" /> : <FaPlusCircle className="toggle-icon" />}
            </div>
            {expandedSections.section7 && (
              <table className="plan-table">
                <tbody>
                  <tr>
                    <td>Customer Portal</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Vendor Portal</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="plan-section">
            <div className="section-header" onClick={() => toggleSection('section8')}>
              <h2>Other Services</h2>
              {expandedSections.section8 ? <FaMinusCircle className="toggle-icon" /> : <FaPlusCircle className="toggle-icon" />}
            </div>
            {expandedSections.section8 && (
              <table className="plan-table">
                <tbody>
                  <tr>
                    <td>Payment Gateway</td>
                    <td>{renderIcon(false)}</td>
                    <td>{renderIcon(false)}</td>
                    <td>{renderIcon(false)}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Voice</td>
                    <td>{renderIcon(false)}</td>
                    <td>{renderIcon(false)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Chat</td>
                    <td>{renderIcon(false)}</td>
                    <td>{renderIcon(false)}</td>
                    <td>{renderIcon(false)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="plan-section">
            <div className="section-header" onClick={() => toggleSection('section9')}>
              <h2>Payroll</h2>
              {expandedSections.section9 ? <FaMinusCircle className="toggle-icon" /> : <FaPlusCircle className="toggle-icon" />}
            </div>
            {expandedSections.section9 && (
              <table className="plan-table">
                <tbody>
                  <tr>
                    <td>Payroll</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Leave Management</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Attendance Management</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                  <tr>
                    <td>Employee Income Tax Management</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="plan-section">
            <div className="section-header" onClick={() => toggleSection('section10')}>
              <h2>Common Reports</h2>
              {expandedSections.section10 ? <FaMinusCircle className="toggle-icon" /> : <FaPlusCircle className="toggle-icon" />}
            </div>
            {expandedSections.section10 && (
              <table className="plan-table">
                <tbody>
                  <tr>
                    <td>Common Reports</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                    <td>{renderIcon(true)}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;
