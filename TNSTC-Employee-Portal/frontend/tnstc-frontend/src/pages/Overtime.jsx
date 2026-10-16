import React, { useEffect, useState } from "react";
import "./Overtime.css";
import API from "../api";

function Overtime() {
  const [employee, setEmployee] = useState({});
  const [overtimeData, setOvertimeData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("August 2026");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  useEffect(() => {
    const emp = JSON.parse(localStorage.getItem("employee"));

    if (!emp) {
      window.location.href = "/login";
      return;
    }

    setEmployee(emp);

    API.get(`/overtime/${emp.employeeId}`)
      .then((res) => setOvertimeData(res.data))
      .catch(() => console.log("No overtime data"));
  }, []);

  const filteredData =
    selectedStatus === "All Status"
      ? overtimeData
      : overtimeData.filter(
          (item) => item.status === selectedStatus
        );

  const totalHours = overtimeData.reduce(
    (sum, item) => sum + Number(item.hours),
    0
  );

  const approvedHours = overtimeData
    .filter((i) => i.status === "Approved")
    .reduce((sum, i) => sum + Number(i.hours), 0);

  const pendingHours = overtimeData
    .filter((i) => i.status === "Pending")
    .reduce((sum, i) => sum + Number(i.hours), 0);

  const totalEarnings = overtimeData
    .filter((i) => i.status === "Approved")
    .reduce((sum, i) => sum + Number(i.amount), 0);
      return (
    <div className="overtime-page">
      {/* Header */}
      <div className="overtime-header">
        <div>
          <div className="overtime-title-row">
            <div className="overtime-title-icon">⏱️</div>

            <div>
              <h1>Overtime</h1>
              <p>View and manage your overtime work details</p>
            </div>

            <span className="live-badge">
              <span></span>
              Live
            </span>
          </div>
        </div>

        <button className="download-btn">
          📥 Download Report
        </button>
      </div>

      {/* Filters */}
      <div className="overtime-filters">
        <div className="month-buttons">
          <button className="active">Aug 2026</button>
        </div>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option>All Status</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Summary */}
      <div className="overtime-summary">
        <div className="summary-card blue-card">
          <div className="summary-icon">⏱️</div>
          <div>
            <span>Total Overtime</span>
            <strong>{totalHours} hrs</strong>
            <small>Current month</small>
          </div>
        </div>

        <div className="summary-card green-card">
          <div className="summary-icon">✅</div>
          <div>
            <span>Approved Hours</span>
            <strong>{approvedHours} hrs</strong>
            <small>Approved overtime</small>
          </div>
        </div>

        <div className="summary-card yellow-card">
          <div className="summary-icon">💰</div>
          <div>
            <span>Overtime Earnings</span>
            <strong>₹{totalEarnings}</strong>
            <small>This month</small>
          </div>
        </div>

        <div className="summary-card orange-card">
          <div className="summary-icon">⌛</div>
          <div>
            <span>Pending Hours</span>
            <strong>{pendingHours} hrs</strong>
            <small>Awaiting approval</small>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="overtime-content">

        {/* History */}
        <section className="overtime-history">
          <div className="section-header">
            <div>
              <h2>Overtime History</h2>
              <p>{selectedMonth} overtime records</p>
            </div>

            <span className="record-count">
              {filteredData.length} Records
            </span>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>HOURS</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center" }}>
                      No Overtime Records
                    </td>
                  </tr>
                ) : (
                  filteredData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <strong>{item.workDate}</strong>
                      </td>

                      <td>
                        <span className="hours-badge">
                          {item.hours} hrs
                        </span>
                      </td>

                      <td>
                        <strong className="amount">
                          ₹{item.amount}
                        </strong>
                      </td>

                      <td>
                        <span
                          className={`status ${item.status.toLowerCase()}`}
                        >
                          <span></span>
                          {item.status}
                        </span>
                      </td>

                      <td>
                        <button className="view-btn">
                          View Details →
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Right Side */}
        <aside className="overtime-side">

          <div className="side-card">
            <div className="side-card-header">
              <h3>📊 Overtime Summary</h3>
              <span>{selectedMonth}</span>
            </div>

            <div className="progress-item">
              <div>
                <span>Total Hours</span>
                <strong>{totalHours} hrs</strong>
              </div>

              <div className="progress">
                <div style={{ width: "100%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>Approved</span>
                <strong>{approvedHours} hrs</strong>
              </div>

              <div className="progress">
                <div
                  style={{
                    width: `${(approvedHours / (totalHours || 1)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>Pending</span>
                <strong>{pendingHours} hrs</strong>
              </div>

              <div className="progress">
                <div
                  style={{
                    width: `${(pendingHours / (totalHours || 1)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="total-box">
              <span>Total Earnings</span>
              <strong>₹{totalEarnings}</strong>
            </div>
          </div>

          <div className="side-card rate-card">
            <div className="rate-icon">💰</div>

            <div>
              <h3>Overtime Rate</h3>
              <p>Current approved rate</p>
              <strong>₹150 / hour</strong>
            </div>
          </div>

          <div className="side-card help-card">
            <div className="help-icon">❓</div>

            <div>
              <h3>Need Help?</h3>
              <p>
                Contact your depot office if your overtime hours or payment
                details are incorrect.
              </p>

              <button>Contact Depot →</button>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}

export default Overtime;