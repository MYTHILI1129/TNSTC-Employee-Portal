import React, { useEffect, useState } from "react";
import "./LeaveApply.css";
import API from "../api";

function LeaveApply() {
  const [employee, setEmployee] = useState({});
  const [leaveType, setLeaveType] = useState("Casual Leave");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [leaveHistory, setLeaveHistory] = useState([]);

  useEffect(() => {
    const emp = JSON.parse(localStorage.getItem("employee"));

    if (!emp) {
      window.location.href = "/login";
      return;
    }

    setEmployee(emp);

    API.get(`/leave/${emp.employeeId}`)
      .then((res) => setLeaveHistory(res.data))
      .catch(() => console.log("No history"));
  }, []);

  const calculateDays = () => {
    if (!fromDate || !toDate) return 0;

    const start = new Date(fromDate);
    const end = new Date(toDate);

    if (end < start) return 0;

    return Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  };

  const totalDays = calculateDays();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fromDate || !toDate || !reason.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    if (totalDays === 0) {
      alert("Please select a valid date range.");
      return;
    }

    try {
      await API.post("/leave", {
        employeeId: employee.employeeId,
        leaveType,
        fromDate,
        toDate,
        reason,
      });

      alert("Leave application submitted successfully!");

      const res = await API.get(`/leave/${employee.employeeId}`);
      setLeaveHistory(res.data);

      setFromDate("");
      setToDate("");
      setReason("");
      setLeaveType("Casual Leave");
    } catch {
      alert("Failed to submit leave");
    }
  };

  return (
    <div className="leave-page">

      {/* HEADER */}
      <div className="leave-header">

        <div className="leave-title">
          <div className="leave-title-icon">📝</div>

          <div>
            <h1>Leave Apply</h1>
            <p>Apply for leave and track your leave applications</p>
          </div>
        </div>

        <div className="leave-profile">👤</div>

      </div>

      {/* SUMMARY */}
      <div className="leave-summary">

        <div className="leave-summary-card blue">
          <div className="summary-icon">📅</div>
          <div>
            <span>Leave Balance</span>
            <strong>18 Days</strong>
            <small>Available</small>
          </div>
        </div>

        <div className="leave-summary-card green">
          <div className="summary-icon">✅</div>
          <div>
            <span>Approved</span>
            <strong>12 Days</strong>
            <small>This year</small>
          </div>
        </div>

        <div className="leave-summary-card yellow">
          <div className="summary-icon">⏳</div>
          <div>
            <span>Pending</span>
            <strong>2 Days</strong>
            <small>Awaiting approval</small>
          </div>
        </div>

        <div className="leave-summary-card red">
          <div className="summary-icon">📊</div>
          <div>
            <span>Total Used</span>
            <strong>12 Days</strong>
            <small>Current year</small>
          </div>
        </div>

      </div>

      {/* CONTENT */}
      <div className="leave-content">

        <section className="leave-form-card">

          <div className="leave-card-header">
            <div>
              <h2>📝 Apply for Leave</h2>
              <p>Enter your leave details below</p>
            </div>

            <span className="required-note">* Required</span>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="leave-form-grid">

              <div className="leave-field">
                <label>EMPLOYEE NAME</label>
                <input
                  type="text"
                  value={employee.name || ""}
                  readOnly
                />
              </div>

              <div className="leave-field">
                <label>EMPLOYEE NO.</label>
                <input
                  type="text"
                  value={employee.employeeId || ""}
                  readOnly
                />
              </div>

              <div className="leave-field">
                <label>LEAVE TYPE *</label>

                <select
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                >
                  <option>Casual Leave</option>
                  <option>Medical Leave</option>
                  <option>Earned Leave</option>
                  <option>Emergency Leave</option>
                  <option>Special Leave</option>
                </select>
              </div>

              <div className="leave-field">
                <label>AVAILABLE BALANCE</label>

                <div className="balance-input">
                  18 Days Available
                </div>
              </div>

              <div className="leave-field">
                <label>FROM DATE *</label>

                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>

              <div className="leave-field">
                <label>TO DATE *</label>

                <input
                  type="date"
                  value={toDate}
                  min={fromDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>

              <div className="leave-field">
                <label>TOTAL DAYS</label>

                <div className="days-box">
                  <strong>{totalDays}</strong>
                  <span>{totalDays === 1 ? "Day" : "Days"}</span>
                </div>
              </div>

              <div className="leave-field full">
                <label>REASON *</label>

                <textarea
                  rows="5"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Enter reason for leave..."
                />
              </div>

              <div className="leave-field full">
                <label>SUPPORTING DOCUMENT</label>

                <div className="upload-box">
                  <span className="upload-icon">📎</span>

                  <div>
                    <strong>Attach document</strong>
                    <small>PDF, JPG or PNG — Max 5MB</small>
                  </div>

                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>

            </div>

            <div className="leave-form-actions">

              <button
                type="button"
                className="clear-btn"
                onClick={() => {
                  setFromDate("");
                  setToDate("");
                  setReason("");
                }}
              >
                Clear
              </button>

              <button
                type="submit"
                className="submit-leave-btn"
              >
                Submit Leave Application →
              </button>

            </div>

          </form>

        </section>
                {/* RIGHT SIDE */}
        <aside className="leave-side">

          {/* BALANCE */}
          <div className="leave-side-card">

            <div className="side-card-title">
              <h2>📊 Leave Balance</h2>
              <span>2026</span>
            </div>

            <div className="balance-row">
              <span>Casual Leave</span>
              <strong>8 / 12</strong>
            </div>
            <div className="balance-progress">
              <div style={{ width: "67%" }}></div>
            </div>

            <div className="balance-row">
              <span>Medical Leave</span>
              <strong>6 / 10</strong>
            </div>
            <div className="balance-progress green-progress">
              <div style={{ width: "60%" }}></div>
            </div>

            <div className="balance-row">
              <span>Earned Leave</span>
              <strong>4 / 15</strong>
            </div>
            <div className="balance-progress orange-progress">
              <div style={{ width: "27%" }}></div>
            </div>

            <div className="total-balance">
              <span>Total Available</span>
              <strong>18 Days</strong>
            </div>

          </div>

          {/* GUIDELINES */}
          <div className="leave-side-card">

            <div className="side-card-title">
              <h2>📋 Leave Guidelines</h2>
            </div>

            <div className="guideline">
              <span>✓</span>
              <p>Apply leave at least <strong>2 days</strong> in advance.</p>
            </div>

            <div className="guideline">
              <span>✓</span>
              <p>Medical leave may require a supporting document.</p>
            </div>

            <div className="guideline">
              <span>✓</span>
              <p>Leave is subject to approval by the authorized officer.</p>
            </div>

            <div className="guideline">
              <span>✓</span>
              <p>Check your balance before submitting an application.</p>
            </div>

          </div>

          {/* HELP */}
          <div className="leave-help-card">

            <div className="help-icon">❓</div>

            <div>
              <h3>Need Help?</h3>

              <p>
                Contact your depot office if you have any questions
                about your leave balance or approval.
              </p>

              <button
                type="button"
                onClick={() => alert("Please contact your depot office.")}
              >
                Contact Depot →
              </button>

            </div>

          </div>

        </aside>

      </div>

      {/* HISTORY */}
      <section className="leave-history">

        <div className="history-header">

          <div>
            <h2>📋 Leave Application History</h2>
            <p>Your recent leave applications</p>
          </div>

          <span className="history-count">
            {leaveHistory.length} Records
          </span>

        </div>

        <div className="history-table-wrapper">

          <table>

            <thead>
              <tr>
                <th>LEAVE TYPE</th>
                <th>FROM</th>
                <th>TO</th>
                <th>DAYS</th>
                <th>APPLIED ON</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>

              {leaveHistory.length === 0 ? (

                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    No Leave Applications
                  </td>
                </tr>

              ) : (

                leaveHistory.map((leave, index) => (

                  <tr key={index}>

                    <td>
                      <strong>{leave.leaveType}</strong>
                    </td>

                    <td>{leave.fromDate}</td>

                    <td>{leave.toDate}</td>

                    <td>
                      <span className="days-badge">
                        {Math.ceil(
                          (new Date(leave.toDate) - new Date(leave.fromDate)) /
                          (1000 * 60 * 60 * 24)
                        ) + 1} Days
                      </span>
                    </td>

                    <td>{leave.fromDate}</td>

                    <td>
                      <span className={`leave-status ${leave.status.toLowerCase()}`}>
                        ● {leave.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="view-leave-btn"
                        onClick={() =>
                          alert(
                            `Leave Type : ${leave.leaveType}\nStatus : ${leave.status}`
                          )
                        }
                      >
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

    </div>
  );
}

export default LeaveApply;