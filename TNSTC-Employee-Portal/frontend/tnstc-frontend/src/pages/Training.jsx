import React from "react";
import "./Training.css";

function Training() {
  const goTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className="training-page">

      <header className="training-header">
        <div className="training-title">
          <div className="training-icon">🎓</div>
          <div>
            <h1>Training Portal</h1>
            <p>Employee Learning & Development</p>
          </div>
        </div>

        <button className="back-btn" onClick={() => goTo("/dashboard")}>
          ← Dashboard
        </button>
      </header>

      <div className="training-banner">
        <h2>Upskill with TNSTC Training Programs</h2>
        <p>
          Complete safety, driving and customer service training to improve
          your professional skills.
        </p>
      </div>

      <div className="training-grid">

        <div className="training-card">
          <div className="card-icon">🚌</div>
          <h3>Defensive Driving</h3>
          <p>Safe driving techniques for TNSTC drivers.</p>
          <span className="status completed">Completed</span>
        </div>

        <div className="training-card">
          <div className="card-icon">🚦</div>
          <h3>Road Safety</h3>
          <p>Traffic rules and accident prevention training.</p>
          <span className="status progress">In Progress</span>
        </div>

        <div className="training-card">
          <div className="card-icon">🤝</div>
          <h3>Passenger Service</h3>
          <p>Improve communication and customer handling.</p>
          <span className="status pending">Pending</span>
        </div>

        <div className="training-card">
          <div className="card-icon">🛠️</div>
          <h3>Vehicle Maintenance</h3>
          <p>Basic inspection and emergency maintenance.</p>
          <span className="status pending">Pending</span>
        </div>

      </div>

      <div className="certificate-box">
        <h2>📜 My Certificate</h2>
        <p>You have successfully completed 1 training module.</p>

        <button className="download-btn">
          Download Certificate
        </button>
      </div>

    </div>
  );
}

export default Training;