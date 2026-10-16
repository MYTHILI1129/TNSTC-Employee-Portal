import React from "react";

function Sidebar() {
  const goTo = (path) => {
    window.location.href = path;
  };

  const currentPath = window.location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <aside className="dashboard-sidebar">

      {/* LOGO */}
      <div className="sidebar-logo">
        <div className="logo-box">🚌</div>

        <div>
          <h2>TNSTC</h2>
          <p>Employee Portal</p>
        </div>
      </div>

      {/* EMPLOYEE */}
      <div className="employee-section">

        <div className="employee-avatar">
          👤
        </div>

        <div className="employee-info">
          <h3>Employee</h3>
          <p>TNSTC Employee Portal</p>

          <span className="active-status">
            ● Portal Active
          </span>
        </div>

      </div>

      {/* NAVIGATION */}
      <nav className="sidebar-navigation">

        {/* MAIN */}
        <p className="nav-title">MAIN</p>

        <button
          className={`nav-item ${
            isActive("/dashboard") ? "active" : ""
          }`}
          onClick={() => goTo("/dashboard")}
        >
          🏠
          <span>Dashboard</span>
        </button>

        <button
          className={`nav-item ${
            isActive("/duty-board") ? "active" : ""
          }`}
          onClick={() => goTo("/duty-board")}
        >
          📋
          <span>Duty Board</span>
        </button>

        <button
          className={`nav-item ${
            isActive("/salary-slip") ? "active" : ""
          }`}
          onClick={() => goTo("/salary-slip")}
        >
          💰
          <span>Salary Slip</span>
        </button>

        <button
          className={`nav-item ${
            isActive("/overtime") ? "active" : ""
          }`}
          onClick={() => goTo("/overtime")}
        >
          ⏱️
          <span>Overtime</span>

          <span className="nav-badge">
            3
          </span>
        </button>


        {/* SERVICES */}
        <p className="nav-title">SERVICES</p>

        <button
          className={`nav-item ${
            isActive("/family-pass") ? "active" : ""
          }`}
          onClick={() => goTo("/family-pass")}
        >
          🎫
          <span>Family Pass</span>
        </button>

        <button
          className={`nav-item ${
            isActive("/leave-apply") ? "active" : ""
          }`}
          onClick={() => goTo("/leave-apply")}
        >
          📝
          <span>Leave Apply</span>
        </button>

        <button
          className={`nav-item ${
            isActive("/incident-report") ? "active" : ""
          }`}
          onClick={() => goTo("/incident-report")}
        >
          🚑
          <span>Incident Report</span>
        </button>

        <button
          className={`nav-item ${
            isActive("/vehicle-complaint") ? "active" : ""
          }`}
          onClick={() => goTo("/vehicle-complaint")}
        >
          🔧
          <span>Vehicle Complaint</span>
        </button>


        {/* RECORDS */}
        <p className="nav-title">RECORDS</p>

        <button
          className={`nav-item ${
            isActive("/training") ? "active" : ""
          }`}
          onClick={() => goTo("/training")}
        >
          🎓
          <span>Training</span>
        </button>

        <button
          className={`nav-item ${
            isActive("/health-records") ? "active" : ""
          }`}
          onClick={() => goTo("/health-records")}
        >
          🏥
          <span>Health Records</span>
        </button>

        <button
          className={`nav-item ${
            isActive("/pf-loan") ? "active" : ""
          }`}
          onClick={() => goTo("/pf-loan")}
        >
          🏛️
          <span>PF & Loan</span>
        </button>

      </nav>


      {/* FOOTER */}
      <div className="sidebar-footer">

        <button
          className={`nav-item ${
            isActive("/profile") ? "active" : ""
          }`}
          onClick={() => goTo("/profile")}
        >
          👤
          <span>My Profile</span>
        </button>

        <button
          className="nav-item"
          onClick={() => goTo("/login")}
        >
          🚪
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;