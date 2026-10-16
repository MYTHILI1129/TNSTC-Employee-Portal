import React from "react";
import "./Index.css";

function Index() {
  const goToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="index-page">

      {/* TOP LANGUAGE BAR */}
      <div className="top-bar">
        <div>
          🌐 Language :
          <span> English</span>
          <span>தமிழ்</span>
          <span>हिन्दी</span>
          <span>తెలుగు</span>
        </div>

        <div>
          <span>Help</span>
          <span>Contact</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="index-header">

        <div className="index-brand">
          <div className="index-logo">🚌</div>

          <div>
            <h1>Tamil Nadu State Transport Corporation</h1>
            <p>Employee Self Service Portal</p>
          </div>
        </div>

        <nav className="index-nav">
          <button>Home</button>
          <button>Services</button>
          <button>About</button>
          <button>Contact</button>

          <button
            className="employee-login-top"
            onClick={goToLogin}
          >
            👤 Employee Login
          </button>
        </nav>

      </header>

      {/* HERO */}
      <main className="index-hero">

        <div className="hero-left">

          <div className="portal-badge">
            • EMPLOYEE SELF-SERVICE PORTAL
          </div>

          <h2>
            Welcome to <span>TNSTC</span>
            <br />
            Employee Portal
          </h2>

          <p>
            A secure digital platform designed for Tamil Nadu State
            Transport Corporation employees to access salary slips,
            leave management, duty schedules, employee services and
            official information from one place.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={goToLogin}
            >
              👤 Employee Login
            </button>

            <button className="secondary-button">
              ▣ Learn More
            </button>

          </div>

          {/* STATS */}
          <div className="hero-stats">

            <div>
              <strong>21K+</strong>
              <span>Employees</span>
            </div>

            <div>
              <strong>320+</strong>
              <span>Depots</span>
            </div>

            <div>
              <strong>8</strong>
              <span>Corporations</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Online Access</span>
            </div>

          </div>

        </div>

        {/* BUS */}
        <div className="hero-right">

          <img
            src="/src/assets/images/hero.png"
            alt="TNSTC Bus"
            className="hero-bus"
          />

        </div>

      </main>

      {/* SERVICES */}
      <section className="index-services">

        <div className="service-title">
          <span>OUR SERVICES</span>
          <h2>Employee Services</h2>
          <p>
            Access all your important employee services from one place.
          </p>
        </div>

        <div className="service-grid">

          <div className="index-service-card">
            📋
            <h3>Duty Board</h3>
            <p>View your duty and schedule details.</p>
          </div>

          <div className="index-service-card">
            💰
            <h3>Salary Slip</h3>
            <p>View and download your salary details.</p>
          </div>

          <div className="index-service-card">
            ⏱️
            <h3>Overtime</h3>
            <p>Check your overtime information.</p>
          </div>

          <div className="index-service-card">
            🎫
            <h3>Family Pass</h3>
            <p>Apply and manage family passes.</p>
          </div>

          <div className="index-service-card">
            📝
            <h3>Leave Apply</h3>
            <p>Apply for leave easily.</p>
          </div>

          <div className="index-service-card">
            🚑
            <h3>Incident Report</h3>
            <p>Report incidents during duty.</p>
          </div>

          <div className="index-service-card">
            🔧
            <h3>Vehicle Complaint</h3>
            <p>Report vehicle related problems.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Index;