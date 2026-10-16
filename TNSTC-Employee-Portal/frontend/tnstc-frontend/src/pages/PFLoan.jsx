import React from "react";
import "./PFLoan.css";

function PFLoan() {
  const goTo = (path) => (window.location.href = path);

  const contributions = [
    { month: "Aug", emp: "₹1,625", employer: "₹1,625", total: "₹3,250" },
    { month: "Jul", emp: "₹1,625", employer: "₹1,625", total: "₹3,250" },
    { month: "Jun", emp: "₹1,625", employer: "₹1,625", total: "₹3,250" },
    { month: "May", emp: "₹1,625", employer: "₹1,625", total: "₹3,250" },
  ];

  return (
    <div className="pf-page">

      {/* Header */}
      <div className="pf-header">
        <div>
          <h1>PF & Loan</h1>
          <p>Provident Fund and Loan Information</p>
        </div>

        <button className="back-btn" onClick={() => goTo("/dashboard")}>
          ← Dashboard
        </button>
      </div>

      {/* Top Cards */}
      <div className="pf-cards">

        <div className="pf-card">
          <div className="card-icon">🐷</div>
          <div className="card-content">
            <h4>PF Balance</h4>
            <h2>₹4,82,500</h2>
            <span>Updated Aug 2026</span>
          </div>
        </div>

        <div className="pf-card">
          <div className="card-icon">💼</div>
          <div className="card-content">
            <h4>Monthly Contribution</h4>
            <h2>₹3,250</h2>
            <span>Employee + TNSTC</span>
          </div>
        </div>

        <div className="pf-card">
          <div className="card-icon">🏛</div>
          <div className="card-content">
            <h4>Loan Balance</h4>
            <h2>₹48,000</h2>
            <span>Remaining Amount</span>
          </div>
        </div>

        <div className="pf-card">
          <div className="card-icon">🧾</div>
          <div className="card-content">
            <h4>EMI / Month</h4>
            <h2>₹2,000</h2>
            <span>24 Months</span>
          </div>
        </div>

      </div>

      {/* Table + Loan */}
      <div className="pf-grid">

        <div className="pf-table">
          <div className="card-title">🪙 PF Contribution</div>

          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Employee</th>
                <th>Employer</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {contributions.map((item, index) => (
                <tr key={index}>
                  <td><b>{item.month}</b></td>
                  <td>{item.emp}</td>
                  <td>{item.employer}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="loan-card">
          <div className="card-title">📄 Loan Details</div>

          <div className="loan-body">

            <div className="loan-row">
              <span>Loan Type</span>
              <b>Festival Advance</b>
            </div>

            <div className="loan-row">
              <span>Sanction Amount</span>
              <b>₹96,000</b>
            </div>

            <div className="loan-row">
              <span>Balance</span>
              <b>₹48,000</b>
            </div>

            <div className="loan-row">
              <span>EMI</span>
              <b>₹2,000</b>
            </div>

            <button className="apply-btn">
              Apply New Loan
            </button>

          </div>
        </div>

      </div>

      {/* Important */}
      <div className="info-card">
        <div className="card-title">ℹ Important Information</div>

        <div className="info-body">
          <ul>
            <li>Employee and Employer contribute equally every month.</li>
            <li>Festival advance interest is deducted through monthly EMI.</li>
            <li>PF withdrawal can be applied after eligibility verification.</li>
            <li>Loan balance updates automatically after salary processing.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default PFLoan;