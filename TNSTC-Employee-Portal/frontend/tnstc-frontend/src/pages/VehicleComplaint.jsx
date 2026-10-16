import React, { useState, useEffect } from "react";
import "./VehicleComplaint.css";
import API from "../api";

export default function VehicleComplaint() {
  const [status, setStatus] = useState("Pending");

  const [employee, setEmployee] = useState({});
  const [complaints, setComplaints] = useState([]);

  const [busNumber, setBusNumber] = useState("");
  const [route, setRoute] = useState("");
  const [complaintType, setComplaintType] = useState("Engine");
  const [priority, setPriority] = useState("High");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const emp = JSON.parse(localStorage.getItem("employee"));

    if (!emp) {
      window.location.href = "/login";
      return;
    }

    setEmployee(emp);
    loadComplaints(emp.employeeId);
  }, []);

  const loadComplaints = async (employeeId) => {
    try {
      const res = await API.get(`/vehicle-complaint/${employeeId}`);
      setComplaints(res.data);
    } catch {
      console.log("No complaints");
    }
  };

  const handleSubmit = async () => {
    if (!busNumber || !description) {
      alert("Please fill required fields");
      return;
    }

    try {
      await API.post("/vehicle-complaint", {
        employeeId: employee.employeeId,
        busNumber,
        route,
        complaintType,
        priority,
        description,
        complaintDate: new Date().toISOString().split("T")[0],
      });

      alert("✅ Complaint Submitted");

      setBusNumber("");
      setRoute("");
      setComplaintType("Engine");
      setPriority("High");
      setDescription("");

      loadComplaints(employee.employeeId);
    } catch {
      alert("❌ Submission Failed");
    }
  };

  return (
    <div className="vc-page">
      <div className="vc-header">
        <div>
          <h1>🚌 Vehicle Complaint</h1>
          <p>Report bus issues & track complaint status</p>
        </div>

        <button className="vc-btn">+ New Complaint</button>
      </div>

      <div className="vc-stats">
        <div className="card">
          <h2>{complaints.length}</h2>
          <span>Total</span>
        </div>

        <div className="card">
          <h2>
            {complaints.filter((c) => c.status === "Pending").length}
          </h2>
          <span>Pending</span>
        </div>

        <div className="card">
          <h2>
            {complaints.filter((c) => c.status === "Resolved").length}
          </h2>
          <span>Resolved</span>
        </div>

        <div className="card">
          <h2>
            {complaints.filter((c) => c.status === "In Progress").length}
          </h2>
          <span>In Progress</span>
        </div>
      </div>

      <div className="vc-grid">
        <div className="panel">
          <div className="panel-head">📝 Complaint Form</div>

          <div className="form">
            <div>
              <label>Bus Number</label>

              <input
                placeholder="TN 30 AB 4567"
                value={busNumber}
                onChange={(e) => setBusNumber(e.target.value)}
              />
            </div>

            <div>
              <label>Route</label>

              <input
                placeholder="Chennai → Tambaram"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
              />
            </div>

            <div>
              <label>Complaint Type</label>

              <select
                value={complaintType}
                onChange={(e) => setComplaintType(e.target.value)}
              >
                <option>Engine</option>
                <option>Brake</option>
                <option>Tyre</option>
                <option>Light</option>
              </select>
            </div>

            <div>
              <label>Priority</label>

              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div className="full">
              <label>Description</label>

              <textarea
                rows="4"
                placeholder="Describe the issue..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="full">
              <button
                type="button"
                className="submit"
                onClick={handleSubmit}
              >
                Submit Complaint
              </button>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">📌 Status Tracker</div>

          <div className="tracker">
            <div>
              <span>ID</span>
              <b>
                {complaints.length
                  ? `VC-${complaints[0].id}`
                  : "--"}
              </b>
            </div>

            <div>
              <span>Bus</span>
              <b>{complaints[0]?.busNumber || "--"}</b>
            </div>

            <div>
              <span>Depot</span>
              <b>{employee.depot || "--"}</b>
            </div>

            <div>
              <span>Updated</span>
              <b>{complaints[0]?.complaintDate || "--"}</b>
            </div>

            <div className="status">
              <button
                className={status === "Pending" ? "active" : ""}
                onClick={() => setStatus("Pending")}
              >
                Pending
              </button>

              <button
                className={status === "In Progress" ? "active" : ""}
                onClick={() => setStatus("In Progress")}
              >
                Progress
              </button>

              <button
                className={status === "Resolved" ? "active" : ""}
                onClick={() => setStatus("Resolved")}
              >
                Resolved
              </button>
            </div>
          </div>
        </div>
      </div>
            {/* Recent Complaints */}
      <div className="panel history">
        <div className="panel-head">📋 Recent Complaints</div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Bus</th>
              <th>Issue</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {complaints.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No complaints found
                </td>
              </tr>
            ) : (
              complaints
                .filter((item) =>
                  status === "In Progress"
                    ? item.status === "In Progress"
                    : item.status === status
                )
                .map((item) => (
                  <tr key={item.id}>
                    <td>{`VC${String(item.id).padStart(3, "0")}`}</td>
                    <td>{item.busNumber}</td>
                    <td>{item.complaintType}</td>
                    <td>
                      <span
                        className={`badge ${
                          item.status === "Pending"
                            ? "pending"
                            : item.status === "Resolved"
                            ? "resolved"
                            : "progress"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}