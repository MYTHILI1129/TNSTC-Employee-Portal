import React, { useState } from "react";
import "./ServiceCertificate.css";

export default function ServiceCertificate() {
  const [tab, setTab] = useState("cert");

  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="sc-page">
      {/* Top Header */}
      <div className="topbar">
        <div>
          <h1>🏆 Service Certificate</h1>
          <p>View, download and manage your service certificates</p>
        </div>

        <button className="print-btn" onClick={() => window.print()}>
          🖨 Print Certificate
        </button>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card navy">
          <div className="stat-icon">📅</div>
          <div className="stat-val">7 yrs</div>
          <div className="stat-label">Total Service</div>
        </div>

        <div className="stat-card gold">
          <div className="stat-icon">🏆</div>
          <div className="stat-val">4</div>
          <div className="stat-label">Certificates Issued</div>
        </div>

        <div className="stat-card green">
          <div className="stat-icon">⭐</div>
          <div className="stat-val">98%</div>
          <div className="stat-label">Attendance</div>
        </div>

        <div className="stat-card red">
          <div className="stat-icon">🚌</div>
          <div className="stat-val">12,450</div>
          <div className="stat-label">Trips Completed</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={tab === "cert" ? "tab active" : "tab"}
          onClick={() => setTab("cert")}
        >
          🏆 Service Certificate
        </button>

        <button
          className={tab === "history" ? "tab active" : "tab"}
          onClick={() => setTab("history")}
        >
          📋 All Certificates
        </button>

        <button
          className={tab === "timeline" ? "tab active" : "tab"}
          onClick={() => setTab("timeline")}
        >
          📅 Service Timeline
        </button>
      </div>

      {/* Certificate */}
      {tab === "cert" && (
        <div className="certificate-card">
          <div className="certificate">
            <div className="outer-border"></div>
            <div className="inner-border"></div>

            <div className="cert-header">
              <div className="emblem">🚌</div>

              <h3>Tamil Nadu State Transport Corporation</h3>
              <p>தமிழ்நாடு அரசு போக்குவரத்து கழகம்</p>

              <div className="divider"></div>

              <h1>Certificate of Service</h1>
              <span>சேவை சான்றிதழ்</span>
            </div>

            <div className="intro">
              This is to certify that the following employee has rendered
              dedicated and meritorious service to the Corporation.
            </div>

            <div className="emp-name">MYTHILI S</div>

            <div className="details-grid">
              <div>
                <label>Employee ID</label>
                <h4>TN-2019-04821</h4>
              </div>

              <div>
                <label>Designation</label>
                <h4>Conductor</h4>
              </div>

              <div>
                <label>Date of Joining</label>
                <h4>15 March 2019</h4>
              </div>

              <div>
                <label>Depot</label>
                <h4>Chennai - Thoraipakkam</h4>
              </div>

              <div>
                <label>Years of Service</label>
                <h4>7 Years 2 Months</h4>
              </div>

              <div>
                <label>Certificate No</label>
                <h4>SC-2026-04821</h4>
              </div>
            </div>

            <div className="highlights">
              <div>
                <h2>12,450</h2>
                <span>Trips</span>
              </div>

              <div>
                <h2>98%</h2>
                <span>Attendance</span>
              </div>

              <div>
                <h2>0</h2>
                <span>Accidents</span>
              </div>

              <div>
                <h2>3</h2>
                <span>Awards</span>
              </div>

              <div>
                <h2>A+</h2>
                <span>Performance</span>
              </div>

              <div>
                <h2>4</h2>
                <span>Trainings</span>
              </div>
            </div>

            <blockquote>
              “During the period of service, the employee has maintained an
              exemplary record of punctuality, discipline and commitment to
              public transport service.”
            </blockquote>

            <div className="signatures">
              <div>
                <div className="line"></div>
                <strong>Depot Manager</strong>
                <span>Chennai Depot</span>
              </div>

              <div>
                <div className="date">{today}</div>
                <div className="line"></div>
                <strong>Regional Manager</strong>
                <span>TNSTC Chennai</span>
              </div>

              <div>
                <div className="line"></div>
                <strong>Managing Director</strong>
                <span>TNSTC</span>
              </div>
            </div>

            <div className="bottom">
              Certificate No: SC-2026-04821 • Digitally Verified
            </div>
          </div>

          <button className="download-btn" onClick={() => window.print()}>
            ⬇ Download / Print Certificate
          </button>
        </div>
      )}

      {/* History */}
      {tab === "history" && (
        <div className="history-list">
          {[
            "Service Certificate — 7 Years",
            "Safe Driver Certificate",
            "Best Driver Award 2024",
            "100% Attendance Certificate",
          ].map((item, i) => (
            <div className="history-item" key={i}>
              <div>
                <h4>{item}</h4>
                <p>Issued : 29 May 2026</p>
              </div>

              <button>Download</button>
            </div>
          ))}
        </div>
      )}

      {/* Timeline */}
      {tab === "timeline" && (
        <div className="timeline">
          <div className="time-card">
            <h3>2026</h3>
            <p>🏆 7th Year Service Certificate issued</p>
          </div>

          <div className="time-card">
            <h3>2024</h3>
            <p>🥇 Best Driver Award received</p>
          </div>

          <div className="time-card">
            <h3>2023</h3>
            <p>🎖 Safe Driver Certificate</p>
          </div>

          <div className="time-card">
            <h3>2019</h3>
            <p>🚌 Joined TNSTC Chennai Depot</p>
          </div>
        </div>
      )}
    </div>
  );
}