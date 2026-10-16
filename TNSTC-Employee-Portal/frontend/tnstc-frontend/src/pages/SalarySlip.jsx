import React, { useState } from "react";
import "./SalarySlip.css";

function SalarySlip() {
  const [selectedMonth, setSelectedMonth] = useState("May 2026");

  const months = [
    "May 2026",
    "Apr 2026",
    "Mar 2026",
    "Feb 2026",
    "Jan 2026",
    "Dec 2025",
  ];

  const salaryData = {
    "May 2026": {
      basic: 18500,
      da: 7400,
      hra: 2775,
      ot: 1960,
      transport: 815,
      deductions: 4000,
      overtimeHours: 14,
      daysWorked: "26/31",
      payPeriod: "01 May – 31 May 2026",
    },
    "Apr 2026": {
      basic: 18500,
      da: 7400,
      hra: 2775,
      ot: 1540,
      transport: 815,
      deductions: 4000,
      overtimeHours: 11,
      daysWorked: "25/30",
      payPeriod: "01 Apr – 30 Apr 2026",
    },
    "Mar 2026": {
      basic: 18500,
      da: 7400,
      hra: 2775,
      ot: 1820,
      transport: 815,
      deductions: 4000,
      overtimeHours: 13,
      daysWorked: "27/31",
      payPeriod: "01 Mar – 31 Mar 2026",
    },
    "Feb 2026": {
      basic: 18500,
      da: 7400,
      hra: 2775,
      ot: 1260,
      transport: 815,
      deductions: 4000,
      overtimeHours: 9,
      daysWorked: "24/28",
      payPeriod: "01 Feb – 28 Feb 2026",
    },
    "Jan 2026": {
      basic: 18500,
      da: 7400,
      hra: 2775,
      ot: 1680,
      transport: 815,
      deductions: 4000,
      overtimeHours: 12,
      daysWorked: "26/31",
      payPeriod: "01 Jan – 31 Jan 2026",
    },
    "Dec 2025": {
      basic: 18500,
      da: 7200,
      hra: 2700,
      ot: 980,
      transport: 815,
      deductions: 3840,
      overtimeHours: 7,
      daysWorked: "25/31",
      payPeriod: "01 Dec – 31 Dec 2025",
    },
  };

  const salary = salaryData[selectedMonth];

  const gross =
    salary.basic +
    salary.da +
    salary.hra +
    salary.ot +
    salary.transport;

  const netSalary = gross - salary.deductions;

  const formatMoney = (value) => {
    return `₹${value.toLocaleString("en-IN")}`;
  };

  const downloadSlip = () => {
    alert(
      `Salary Slip for ${selectedMonth}\n\n` +
      `Net Salary: ${formatMoney(netSalary)}\n\n` +
      `PDF download will be connected with Spring Boot later.`
    );
  };

  const printSlip = () => {
    window.print();
  };

  return (
    <div className="salary-page">

      {/* ================= HEADER ================= */}

      <header className="salary-header">

        <div className="salary-heading">

          <div className="salary-title-row">
            <span className="salary-title-icon">💰</span>

            <div>
              <h1>Salary Slip</h1>

              <p>
                View and download your monthly salary details
              </p>
            </div>
          </div>

        </div>

        <div className="salary-header-actions">

          <button
            className="download-top-button"
            onClick={downloadSlip}
          >
            ⬇️ Download PDF
          </button>

          <button
            className="print-button"
            onClick={printSlip}
          >
            🖨️
          </button>

        </div>

      </header>


      {/* ================= CONTENT ================= */}

      <main className="salary-content">

        {/* ================= MONTH SELECTOR ================= */}

        <div className="month-selector">

          {months.map((month) => (

            <button
              key={month}
              className={
                selectedMonth === month
                  ? "month-button active"
                  : "month-button"
              }
              onClick={() => setSelectedMonth(month)}
            >
              {month}
            </button>

          ))}

        </div>


        {/* ================= SUMMARY CARDS ================= */}

        <section className="salary-summary">

          <div className="salary-summary-card earnings-card">

            <div className="summary-card-icon">
              💵
            </div>

            <div>
              <strong>{formatMoney(gross)}</strong>
              <span>Gross Earnings</span>
            </div>

          </div>


          <div className="salary-summary-card deduction-card">

            <div className="summary-card-icon">
              ➖
            </div>

            <div>
              <strong>
                {formatMoney(salary.deductions)}
              </strong>

              <span>Total Deductions</span>
            </div>

          </div>


          <div className="salary-summary-card net-card">

            <div className="summary-card-icon">
              💰
            </div>

            <div>
              <strong>
                {formatMoney(netSalary)}
              </strong>

              <span>Net Salary</span>
            </div>

          </div>


          <div className="salary-summary-card overtime-card">

            <div className="summary-card-icon">
              ⏱️
            </div>

            <div>
              <strong>
                {salary.overtimeHours} hrs
              </strong>

              <span>Overtime Hours</span>
            </div>

          </div>

        </section>


        {/* ================= MAIN SALARY AREA ================= */}

        <div className="salary-layout">

          {/* ================= LEFT ================= */}

          <section className="salary-main-card">

            {/* COMPANY DETAILS */}

            <div className="company-section">

              <div className="company-logo">
                🚌
              </div>

              <div className="company-info">

                <h2>
                  Tamil Nadu State Transport Corporation
                </h2>

                <p>
                  தமிழ்நாடு அரசு போக்குவரத்துக் கழகம்
                </p>

                <span>
                  Valappadi Depot, Salem
                </span>

              </div>

              <div className="selected-month">
                {selectedMonth}
              </div>

            </div>


            {/* EMPLOYEE DETAILS */}

            <div className="employee-details">

              <div>
                <label>EMPLOYEE NAME</label>
                <strong>Employee</strong>
              </div>

              <div>
                <label>EMPLOYEE ID</label>
                <strong>TN-EMP-001</strong>
              </div>

              <div>
                <label>DESIGNATION</label>
                <strong>Bus Driver</strong>
              </div>

              <div>
                <label>DEPOT</label>
                <strong>Valappadi, Salem</strong>
              </div>

              <div>
                <label>PAY PERIOD</label>
                <strong>{salary.payPeriod}</strong>
              </div>

              <div>
                <label>DAYS WORKED</label>
                <strong>{salary.daysWorked}</strong>
              </div>

            </div>


            {/* ================= EARNINGS ================= */}

            <div className="salary-section">

              <div className="section-heading earnings-heading">
                <span>✅</span>
                <h3>Earnings</h3>
              </div>

              <div className="salary-row">
                <span>Basic Pay</span>
                <strong>
                  {formatMoney(salary.basic)}
                </strong>
              </div>

              <div className="salary-row">
                <span>
                  Dearness Allowance (DA)
                </span>

                <strong>
                  {formatMoney(salary.da)}
                </strong>
              </div>

              <div className="salary-row">
                <span>
                  House Rent Allowance (HRA)
                </span>

                <strong>
                  {formatMoney(salary.hra)}
                </strong>
              </div>

              <div className="salary-row">
                <span>
                  Overtime Allowance
                </span>

                <strong>
                  {formatMoney(salary.ot)}
                </strong>
              </div>

              <div className="salary-row">
                <span>
                  Transport Allowance
                </span>

                <strong>
                  {formatMoney(salary.transport)}
                </strong>
              </div>

              <div className="total-row">
                <span>Gross Earnings</span>

                <strong>
                  {formatMoney(gross)}
                </strong>
              </div>

            </div>


            {/* ================= DEDUCTIONS ================= */}

            <div className="salary-section">

              <div className="section-heading deduction-heading">
                <span>➖</span>
                <h3>Deductions</h3>
              </div>

              <div className="salary-row deduction-row">
                <span>Provident Fund (PF)</span>
                <strong>₹2,220</strong>
              </div>

              <div className="salary-row deduction-row">
                <span>Insurance</span>
                <strong>₹500</strong>
              </div>

              <div className="salary-row deduction-row">
                <span>Professional Tax</span>
                <strong>₹200</strong>
              </div>

              <div className="salary-row deduction-row">
                <span>Other Deductions</span>
                <strong>₹1,080</strong>
              </div>

              <div className="total-row deduction-total">
                <span>Total Deductions</span>

                <strong>
                  - {formatMoney(salary.deductions)}
                </strong>
              </div>

            </div>


            {/* ================= NET SALARY ================= */}

            <div className="net-salary-box">

              <div>

                <h3>💰 Net Salary</h3>

                <p>
                  Amount credited to your salary account
                </p>

              </div>

              <strong>
                {formatMoney(netSalary)}
              </strong>

            </div>


            {/* DOWNLOAD */}

            <button
              className="download-salary-button"
              onClick={downloadSlip}
            >
              ⬇️ Download Salary Slip (PDF)
            </button>

          </section>


          {/* ================= RIGHT SIDE ================= */}

          <aside className="salary-sidebar">


            {/* ================= SALARY TREND ================= */}

            <div className="side-card">

              <div className="side-card-header">

                <h3>📈 Salary Trend</h3>

                <span>
                  Last 6 months
                </span>

              </div>


              <div className="salary-chart">

                <div className="chart-bar">
                  <span>29.8k</span>
                  <div style={{ height: "55%" }}></div>
                  <small>Dec</small>
                </div>

                <div className="chart-bar">
                  <span>30.2k</span>
                  <div style={{ height: "62%" }}></div>
                  <small>Jan</small>
                </div>

                <div className="chart-bar">
                  <span>31.5k</span>
                  <div style={{ height: "72%" }}></div>
                  <small>Feb</small>
                </div>

                <div className="chart-bar">
                  <span>30.9k</span>
                  <div style={{ height: "68%" }}></div>
                  <small>Mar</small>
                </div>

                <div className="chart-bar">
                  <span>31.8k</span>
                  <div style={{ height: "77%" }}></div>
                  <small>Apr</small>
                </div>

                <div className="chart-bar active">
                  <span>32.4k</span>
                  <div style={{ height: "88%" }}></div>
                  <small>May</small>
                </div>

              </div>

            </div>


            {/* ================= PAY BREAKDOWN ================= */}

            <div className="side-card">

              <div className="side-card-header">

                <h3>🍑 Pay Breakdown</h3>

              </div>


              <div className="breakdown-item">

                <div>
                  <span className="dot blue"></span>
                  Basic Pay
                </div>

                <strong>52%</strong>

              </div>

              <div className="progress">
                <span style={{ width: "52%" }}></span>
              </div>


              <div className="breakdown-item">

                <div>
                  <span className="dot cyan"></span>
                  DA
                </div>

                <strong>21%</strong>

              </div>

              <div className="progress">
                <span style={{ width: "21%" }}></span>
              </div>


              <div className="breakdown-item">

                <div>
                  <span className="dot yellow"></span>
                  HRA
                </div>

                <strong>8%</strong>

              </div>

              <div className="progress">
                <span style={{ width: "8%" }}></span>
              </div>


              <div className="breakdown-item">

                <div>
                  <span className="dot red"></span>
                  OT + Others
                </div>

                <strong>19%</strong>

              </div>

              <div className="progress">
                <span style={{ width: "19%" }}></span>
              </div>

            </div>


            {/* ================= SERVICE INFO ================= */}

            <div className="side-card service-info-card">

              <h3>🏆 Service Information</h3>

              <div>
                <span>Designation</span>
                <strong>Bus Driver</strong>
              </div>

              <div>
                <span>Depot</span>
                <strong>Valappadi</strong>
              </div>

              <div>
                <span>Years of Service</span>
                <strong>7 Years</strong>
              </div>

            </div>

          </aside>

        </div>


        {/* ================= SALARY HISTORY ================= */}

        <section className="history-card">

          <div className="history-header">

            <h2>📁 Salary History</h2>

            <span>
              Last 12 months
            </span>

          </div>


          <div className="table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>MONTH</th>
                  <th>BASIC</th>
                  <th>DA</th>
                  <th>HRA</th>
                  <th>OT</th>
                  <th>GROSS</th>
                  <th>DEDUCTIONS</th>
                  <th>NET SALARY</th>
                  <th>STATUS</th>
                  <th>DOWNLOAD</th>
                </tr>
              </thead>

              <tbody>

                {months.map((month) => {

                  const item = salaryData[month];

                  const itemGross =
                    item.basic +
                    item.da +
                    item.hra +
                    item.ot +
                    item.transport;

                  const itemNet =
                    itemGross - item.deductions;

                  return (
                    <tr key={month}>

                      <td>
                        <strong>{month}</strong>
                      </td>

                      <td>
                        {formatMoney(item.basic)}
                      </td>

                      <td>
                        {formatMoney(item.da)}
                      </td>

                      <td>
                        {formatMoney(item.hra)}
                      </td>

                      <td className="ot-value">
                        {formatMoney(item.ot)}
                      </td>

                      <td className="gross-value">
                        {formatMoney(itemGross)}
                      </td>

                      <td className="deduction-value">
                        - {formatMoney(item.deductions)}
                      </td>

                      <td className="net-value">
                        {formatMoney(itemNet)}
                      </td>

                      <td>
                        <span className="credited-badge">
                          ✓ Credited
                        </span>
                      </td>

                      <td>

                        <button
                          className="pdf-button"
                          onClick={() =>
                            alert(
                              `PDF download for ${month} will be connected later.`
                            )
                          }
                        >
                          ⬇ PDF
                        </button>

                      </td>

                    </tr>
                  );

                })}

              </tbody>

            </table>

          </div>

        </section>

      </main>

    </div>
  );
}

export default SalarySlip;