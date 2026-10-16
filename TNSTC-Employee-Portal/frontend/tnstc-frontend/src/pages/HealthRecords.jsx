import "./HealthRecords.css";

export default function HealthRecords() {
  return (
    <div className="health-page">
      <div className="health-header">
        <div>
          <h1>Health Records</h1>
          <p>Employee medical history & annual health checkup</p>
        </div>

        <button
          className="back-btn"
          onClick={() => (window.location.href = "/dashboard")}
        >
          ← Dashboard
        </button>
      </div>

      {/* Top Cards */}
      <div className="top-cards">
        <div className="mini-card">
          <div className="icon">🩸</div>
          <div>
            <span>Blood Group</span>
            <h2>O+</h2>
          </div>
        </div>

        <div className="mini-card">
          <div className="icon">📏</div>
          <div>
            <span>Height</span>
            <h2>165 cm</h2>
          </div>
        </div>

        <div className="mini-card">
          <div className="icon">⚖️</div>
          <div>
            <span>Weight</span>
            <h2>60 kg</h2>
          </div>
        </div>

        <div className="mini-card">
          <div className="icon">💙</div>
          <div>
            <span>BMI</span>
            <h2>22.0</h2>
          </div>
        </div>
      </div>

      <div className="health-grid">
        {/* Medical Info */}
        <div className="card large">
          <div className="card-title">🩺 Medical Information</div>

          <div className="info-row"><span>Blood Pressure</span><strong>120 / 80</strong></div>
          <div className="info-row"><span>Pulse Rate</span><strong>72 bpm</strong></div>
          <div className="info-row"><span>Vision</span><strong>6 / 6</strong></div>
          <div className="info-row"><span>Diabetes</span><strong>No</strong></div>
          <div className="info-row"><span>Allergies</span><strong>None</strong></div>
          <div className="info-row"><span>Last Checkup</span><strong>18 Jul 2026</strong></div>
        </div>

        {/* Emergency */}
        <div className="card">
          <div className="card-title">📞 Emergency Contact</div>

          <div className="info-row"><span>Name</span><strong>Suresh Kumar</strong></div>
          <div className="info-row"><span>Relation</span><strong>Brother</strong></div>
          <div className="info-row"><span>Mobile</span><strong>9876543210</strong></div>

          <button className="edit-btn">Edit Contact</button>
        </div>
      </div>

      {/* History */}
      <div className="card history">
        <div className="card-title">📋 Annual Health History</div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Hospital</th>
              <th>Doctor</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>18 Jul 2026</td>
              <td>TNSTC Medical Centre</td>
              <td>Dr. Priya</td>
              <td><span className="status fit">Fit</span></td>
            </tr>

            <tr>
              <td>10 Jul 2025</td>
              <td>Government Hospital</td>
              <td>Dr. Ravi</td>
              <td><span className="status fit">Fit</span></td>
            </tr>

            <tr>
              <td>12 Jun 2024</td>
              <td>TNSTC Medical Centre</td>
              <td>Dr. Meena</td>
              <td><span className="status obs">Observation</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Reminder */}
      <div className="reminder">
        <div className="reminder-icon">ℹ️</div>
        <div>
          <h4>Health Reminder</h4>
          <p>
            Annual medical examination is mandatory for TNSTC employees.
            Please attend the scheduled health camp to keep your records updated.
          </p>
        </div>
      </div>
    </div>
  );
}