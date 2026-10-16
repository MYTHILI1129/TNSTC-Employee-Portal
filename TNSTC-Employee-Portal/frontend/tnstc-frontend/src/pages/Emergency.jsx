import React from "react";
import "./Emergency.css";

export default function Emergency() {
  return (
    <div className="emergency-page">

      <div className="emergency-header">
        <div>
          <h1>Emergency</h1>
          <p>Quick access to TNSTC emergency contacts & support</p>
        </div>

        <button
          className="back-btn"
          onClick={() => (window.location.href = "/dashboard")}
        >
          ← Dashboard
        </button>
      </div>

      {/* SOS Banner */}
      <div className="sos-banner">
        <div>
          <h2>🚨 Emergency SOS</h2>
          <p>Use only during accidents or immediate danger.</p>
        </div>

        <button className="sos-btn">CALL 108</button>
      </div>

      {/* Contact Cards */}
      <div className="contact-grid">

        <div className="contact-card">
          <div className="icon red">🚑</div>
          <h3>Ambulance</h3>
          <h2>108</h2>
          <button>Call Now</button>
        </div>

        <div className="contact-card">
          <div className="icon blue">👮</div>
          <h3>Police</h3>
          <h2>100</h2>
          <button>Call Now</button>
        </div>

        <div className="contact-card">
          <div className="icon green">🏥</div>
          <h3>Nearest Hospital</h3>
          <h2>104</h2>
          <button>Call Now</button>
        </div>

        <div className="contact-card">
          <div className="icon orange">🚌</div>
          <h3>TNSTC Control Room</h3>
          <h2>1800-599-1500</h2>
          <button>Call Now</button>
        </div>

      </div>

      {/* Depot Emergency */}
      <div className="white-card">

        <div className="card-title">
          📞 Depot Emergency Contacts
        </div>

        <div className="contact-list">

          <div className="contact-row">
            <div>
              <h4>Depot Manager</h4>
              <span>Thoraipakkam Depot</span>
            </div>
            <button>9876543210</button>
          </div>

          <div className="contact-row">
            <div>
              <h4>Traffic Inspector</h4>
              <span>Operations Department</span>
            </div>
            <button>9123456789</button>
          </div>

          <div className="contact-row">
            <div>
              <h4>Workshop Supervisor</h4>
              <span>Vehicle Breakdown</span>
            </div>
            <button>9345678901</button>
          </div>

        </div>

      </div>

      {/* Guidelines */}
      <div className="note-card">
        <h3>⚠ Emergency Guidelines</h3>

        <ul>
          <li>Inform the depot immediately after any accident.</li>
          <li>Call 108 first if anyone is injured.</li>
          <li>Take photos only if it is safe to do so.</li>
          <li>Submit an Incident Report through the TNSTC portal.</li>
        </ul>
      </div>

    </div>
  );
}