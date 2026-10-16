import React, { useState, useEffect } from "react";
import "./IncidentReport.css";
import API from "../api";

function IncidentReport() {
  const [employee, setEmployee] = useState({});
  const [history, setHistory] = useState([]);

  const [incidentType, setIncidentType] = useState("");
  const [severity, setSeverity] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [incidentTime, setIncidentTime] = useState("");
  const [busNumber, setBusNumber] = useState("");
  const [route, setRoute] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const emp = JSON.parse(localStorage.getItem("employee"));

    if (!emp) {
      window.location.href = "/login";
      return;
    }

    setEmployee(emp);

    API.get(`/incident/${emp.employeeId}`)
      .then((res) => setHistory(res.data))
      .catch(() => console.log("No history"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!incidentType) newErrors.incidentType = "Select incident type";
    if (!severity) newErrors.severity = "Select severity";
    if (!incidentDate) newErrors.incidentDate = "Select incident date";
    if (!incidentTime) newErrors.incidentTime = "Select incident time";
    if (!busNumber.trim()) newErrors.busNumber = "Enter bus number";
    if (!location.trim()) newErrors.location = "Enter incident location";
    if (!description.trim()) newErrors.description = "Enter description";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      await API.post("/incident", {
        employeeId: employee.employeeId,
        incidentDate,
        incidentTime,
        location,
        incidentType,
        description,
        injury: severity,
      });

      const res = await API.get(`/incident/${employee.employeeId}`);
      setHistory(res.data);

      alert("✅ Incident Report Submitted");

      setIncidentType("");
      setSeverity("");
      setIncidentDate("");
      setIncidentTime("");
      setBusNumber("");
      setRoute("");
      setLocation("");
      setDescription("");
      setErrors({});
    } catch {
      alert("❌ Failed to submit report");
    }
  };

  const handleCancel = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div className="incident-page">
      <header className="incident-header">
        <div className="incident-title-area">
          <div className="incident-icon">🚑</div>
          <div>
            <h1>Incident Report</h1>
            <p>Report and track incidents during your duty</p>
          </div>
        </div>

        <div className="incident-profile">👤</div>
      </header>

      <main className="incident-content">
        <div className="incident-info-card">
          <div className="info-icon">⚠️</div>

          <div>
            <h2>Report an Incident</h2>
            <p>
              Please provide accurate details about the incident that occurred
              during your duty.
            </p>
          </div>

          <div className="required-note">* Required</div>
        </div>

        <form className="incident-form-card" onSubmit={handleSubmit}>
          <div className="form-section-title">
            <span>📋</span>

            <div>
              <h2>Incident Details</h2>
              <p>Enter the details of the incident below</p>
            </div>
          </div>

          <div className="form-divider"></div>

          <div className="incident-form-row">
            <div className="incident-form-group">
              <label>
                Incident Type <span>*</span>
              </label>

              <select
                value={incidentType}
                onChange={(e) => {
                  setIncidentType(e.target.value);
                  setErrors({ ...errors, incidentType: "" });
                }}
              >
                <option value="">Select incident type</option>
                <option value="Road Accident">Road Accident</option>
                <option value="Passenger Incident">Passenger Incident</option>
                <option value="Vehicle Breakdown">Vehicle Breakdown</option>
                <option value="Traffic Incident">Traffic Incident</option>
                <option value="Staff Related">Staff Related Incident</option>
                <option value="Other">Other</option>
              </select>

              {errors.incidentType && (
                <p className="field-error">{errors.incidentType}</p>
              )}
            </div>

            <div className="incident-form-group">
              <label>
                Severity <span>*</span>
              </label>

              <select
                value={severity}
                onChange={(e) => {
                  setSeverity(e.target.value);
                  setErrors({ ...errors, severity: "" });
                }}
              >
                <option value="">Select severity</option>
                <option value="No">Low</option>
                <option value="Minor">Medium</option>
                <option value="Major">High</option>
                <option value="Critical">Critical</option>
              </select>

              {errors.severity && (
                <p className="field-error">{errors.severity}</p>
              )}
            </div>
          </div>

          <div className="incident-form-row">
            <div className="incident-form-group">
              <label>
                Incident Date <span>*</span>
              </label>

              <input
                type="date"
                value={incidentDate}
                onChange={(e) => {
                  setIncidentDate(e.target.value);
                  setErrors({ ...errors, incidentDate: "" });
                }}
              />

              {errors.incidentDate && (
                <p className="field-error">{errors.incidentDate}</p>
              )}
            </div>

            <div className="incident-form-group">
              <label>
                Incident Time <span>*</span>
              </label>

              <input
                type="time"
                value={incidentTime}
                onChange={(e) => {
                  setIncidentTime(e.target.value);
                  setErrors({ ...errors, incidentTime: "" });
                }}
              />

              {errors.incidentTime && (
                <p className="field-error">{errors.incidentTime}</p>
              )}
            </div>
          </div>

          <div className="incident-form-row">
            <div className="incident-form-group">
              <label>
                Bus Number <span>*</span>
              </label>

              <input
                type="text"
                placeholder="e.g. TN33 N 4521"
                value={busNumber}
                onChange={(e) => {
                  setBusNumber(e.target.value);
                  setErrors({ ...errors, busNumber: "" });
                }}
              />

              {errors.busNumber && (
                <p className="field-error">{errors.busNumber}</p>
              )}
            </div>

            <div className="incident-form-group">
              <label>Route</label>

              <input
                type="text"
                placeholder="e.g. Valapadi → Salem Junction"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
              />
            </div>
          </div>

          <div className="incident-form-group full-width">
            <label>
              Incident Location <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Enter incident location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setErrors({ ...errors, location: "" });
              }}
            />

            {errors.location && (
              <p className="field-error">{errors.location}</p>
            )}
          </div>

          <div className="incident-form-group full-width">
            <label>
              Incident Description <span>*</span>
            </label>

            <textarea
              rows="6"
              placeholder="Describe what happened..."
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setErrors({ ...errors, description: "" });
              }}
            ></textarea>

            {errors.description && (
              <p className="field-error">{errors.description}</p>
            )}
          </div>

          <div className="incident-notice">
            <div className="notice-icon">ℹ️</div>

            <div>
              <strong>Important</strong>
              <p>
                Please provide complete and accurate information. False or
                incomplete information may delay the investigation process.
              </p>
            </div>
          </div>

          <div className="incident-actions">
            <button
              type="button"
              className="incident-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button type="submit" className="incident-submit">
              🚑 Submit Incident Report
            </button>
          </div>
        </form>
                {/* Recent Reports (Backend) */}
        <div className="incident-bottom-grid">
          <div className="incident-small-card">
            <div className="small-card-icon">📋</div>

            <div style={{ width: "100%" }}>
              <h3>Recent Reports</h3>

              {history.length === 0 ? (
                <p>No reports submitted yet.</p>
              ) : (
                history.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    style={{
                      borderTop: "1px solid #eee",
                      paddingTop: "8px",
                      marginTop: "8px",
                    }}
                  >
                    <strong>{item.incidentType}</strong>

                    <p>{item.location}</p>

                    <small>
                      {item.incidentDate} • {item.status}
                    </small>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="incident-small-card">
            <div className="small-card-icon">📞</div>

            <div>
              <h3>Emergency Support</h3>
              <p>
                Contact the depot or emergency team when required.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default IncidentReport;