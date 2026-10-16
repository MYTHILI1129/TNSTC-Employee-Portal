import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import API from "../api";

function Dashboard() {
  const [employee, setEmployee] = useState({});
  const [salary, setSalary] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employee"));

    if (data) {
      setEmployee(data);

      API.get(`/salary/${data.employeeId}`)
        .then((res) => setSalary(res.data))
        .catch(() => console.log("Salary not found"));
    } else {
      window.location.href = "/login";
    }
  }, []);

  const goTo = (path) => {
    window.location.href = path;
  };

  const handleLogout = () => {
    localStorage.removeItem("employee");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">

        <div className="sidebar-logo">
          <div className="logo-box">🚌</div>
          <div>
            <h2>TNSTC</h2>
            <p>Employee Portal</p>
          </div>
        </div>

        <div className="employee-section">
          <div className="employee-avatar">👤</div>

          <div className="employee-info">
            <h3>{employee.name || "Employee"}</h3>
            <p>{employee.designation || "Staff"}</p>
            <span className="active-status">● Portal Active</span>
          </div>
        </div>

        <nav className="sidebar-navigation">

          <p className="nav-title">MAIN</p>

          <button className="nav-item active" onClick={() => goTo("/dashboard")}>
            🏠 <span>Dashboard</span>
          </button>

          <button className="nav-item" onClick={() => goTo("/duty-board")}>
            📋 <span>Duty Board</span>
          </button>

          <button className="nav-item" onClick={() => goTo("/salary-slip")}>
            💰 <span>Salary Slip</span>
          </button>

          <button className="nav-item" onClick={() => goTo("/overtime")}>
            ⏱️ <span>Overtime</span>
          </button>

          <p className="nav-title">SERVICES</p>

          <button className="nav-item" onClick={() => goTo("/family-pass")}>
            🎫 <span>Family Pass</span>
          </button>

          <button className="nav-item" onClick={() => goTo("/leave-apply")}>
            📝 <span>Leave Apply</span>
          </button>

          <button className="nav-item" onClick={() => goTo("/incident-report")}>
            🚑 <span>Incident Report</span>
          </button>

          <button className="nav-item" onClick={() => goTo("/vehicle-complaint")}>
            🔧 <span>Vehicle Complaint</span>
          </button>

          <p className="nav-title">RECORDS</p>

          <button className="nav-item" onClick={() => goTo("/training")}>
            🎓 <span>Training</span>
          </button>

          <button className="nav-item" onClick={() => goTo("/health-records")}>
            🏥 <span>Health Records</span>
          </button>

          <button className="nav-item" onClick={() => goTo("/pf-loan")}>
            🏛️ <span>PF & Loan</span>
          </button>

          <button className="nav-item" onClick={() => goTo("/service-certificate")}>
            📜 <span>Service Certificate</span>
          </button>

          <button className="nav-item" onClick={() => goTo("/emergency")}>
            📞 <span>Emergency</span>
          </button>

        </nav>

        <div className="sidebar-bottom">

          <button className="nav-item" onClick={() => goTo("/profile")}>
            👤 <span>My Profile</span>
          </button>

          <button className="nav-item logout" onClick={handleLogout}>
            🚪 <span>Logout</span>
          </button>

        </div>

      </aside>

      {/* MAIN */}
      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <h1>Welcome Back, {employee.name} 👋</h1>
            <p>TNSTC Employee Portal</p>
          </div>

          <div className="header-actions">
            <button className="header-button">🔔</button>
            <button className="language-button">🌐 தமிழ்</button>
            <div className="profile-circle">👤</div>
          </div>

        </header>

        <div className="dashboard-content">

          {/* Employee Details */}
          <section className="today-duty">

            <div className="duty-icon">🧑</div>

            <div className="duty-content">
              <h2>{employee.name}</h2>

              <p>
                Employee ID : <b>{employee.employeeId}</b>
              </p>

              <p>
                Depot : <b>{employee.depot}</b> | Designation :{" "}
                <b>{employee.designation}</b>
              </p>
            </div>

            <span className="portal-active">ACTIVE</span>

          </section>

          {/* Today Duty */}
          <section className="today-duty">

            <div className="duty-icon">🚌</div>

            <div className="duty-content">
              <h2>Today's Duty</h2>
              <p>
                Bus No : TN33 AB 4521 | Route : Thoraipakkam → Broadway
              </p>
            </div>

            <span className="portal-active">ON DUTY</span>

          </section>

          {/* Statistics */}
          <section className="statistics-grid">

            <div className="stat-card blue-card">
              <div className="stat-icon">⏱️</div>
              <h2>14h</h2>
              <p>Overtime</p>
            </div>

            <div className="stat-card yellow-card">
              <div className="stat-icon">💰</div>
              <h2>₹{salary?.netSalary || "0"}</h2>
              <p>Salary</p>
            </div>

            <div className="stat-card green-card">
              <div className="stat-icon">📝</div>
              <h2>18</h2>
              <p>Leave Balance</p>
            </div>

            <div className="stat-card cyan-card">
              <div className="stat-icon">📋</div>
              <h2>26</h2>
              <p>Total Trips</p>
            </div>

          </section>

          {/* Quick Services */}
          <section className="quick-services">

            <button className="service-card" onClick={() => goTo("/family-pass")}>
              <div className="service-icon">🎫</div>
              <h3>Family Pass</h3>
            </button>

            <button className="service-card" onClick={() => goTo("/leave-apply")}>
              <div className="service-icon">📝</div>
              <h3>Leave Apply</h3>
            </button>

            <button className="service-card" onClick={() => goTo("/salary-slip")}>
              <div className="service-icon">💰</div>
              <h3>Salary Slip</h3>
            </button>

            <button className="service-card" onClick={() => goTo("/overtime")}>
              <div className="service-icon">⏱️</div>
              <h3>Overtime</h3>
            </button>

            <button className="service-card" onClick={() => goTo("/incident-report")}>
              <div className="service-icon">🚑</div>
              <h3>Incident Report</h3>
            </button>

            <button className="service-card" onClick={() => goTo("/vehicle-complaint")}>
              <div className="service-icon">🔧</div>
              <h3>Vehicle Complaint</h3>
            </button>

            <button className="service-card" onClick={() => goTo("/training")}>
              <div className="service-icon">🎓</div>
              <h3>Training</h3>
            </button>

            <button className="service-card" onClick={() => goTo("/health-records")}>
              <div className="service-icon">🏥</div>
              <h3>Health Records</h3>
            </button>

            <button className="service-card" onClick={() => goTo("/pf-loan")}>
              <div className="service-icon">🏛️</div>
              <h3>PF & Loan</h3>
            </button>

            <button className="service-card" onClick={() => goTo("/service-certificate")}>
              <div className="service-icon">📜</div>
              <h3>Service Certificate</h3>
            </button>

            <button className="service-card" onClick={() => goTo("/emergency")}>
              <div className="service-icon">📞</div>
              <h3>Emergency</h3>
            </button>

            <button className="service-card" onClick={() => goTo("/profile")}>
              <div className="service-icon">👤</div>
              <h3>My Profile</h3>
            </button>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;