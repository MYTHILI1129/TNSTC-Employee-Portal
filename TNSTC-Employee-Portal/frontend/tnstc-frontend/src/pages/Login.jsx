import React, { useState } from "react";
import "./Login.css";
import API from "../api";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [depot, setDepot] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const clearError = (field) => {
    setErrors((prev) => ({
      ...prev,
      [field]: "",
      login: "",
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!employeeId.trim())
      newErrors.employeeId = "Please enter Employee ID";

    if (!password.trim())
      newErrors.password = "Please enter Password";

    if (!depot)
      newErrors.depot = "Please select Depot";

    setErrors(newErrors);
    setSuccessMessage("");

    if (Object.keys(newErrors).length > 0) return;

    try {
      const res = await API.post("/login", {
        employeeId,
        password,
      });

      if (res.data.success) {
        localStorage.setItem(
          "employee",
          JSON.stringify(res.data.employee)
        );

        setSuccessMessage("Login Successful!");

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      } else {
        setErrors({
          login: "Invalid Employee ID or Password",
        });
      }
    } catch (err) {
      setErrors({
        login: "Invalid Employee ID or Password",
      });
    }
  };

  return (
    <div className="login-page">
      <section className="login-left">
        <div className="left-overlay"></div>

        <div className="left-content">
          <div className="tnstc-logo">
            <div className="logo-circle">🚌</div>

            <div>
              <h2>TNSTC</h2>
              <p>Employee Portal</p>
            </div>
          </div>

          <div className="hero-content">
            <span className="portal-label">
              EMPLOYEE SELF-SERVICE PORTAL
            </span>

            <h1>
              One Team.
              <br />
              <span>One Journey.</span>
              <br />
              Serving Tamil Nadu.
            </h1>

            <p className="hero-description">
              A secure digital platform for TNSTC employees to manage duties,
              salary, passes and workplace services.
            </p>
          </div>

          <div className="service-grid">
            <div className="service-item">
              <div className="service-icon">👥</div>
              <div>
                <h4>Employee Services</h4>
                <p>Access services</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">🎫</div>
              <div>
                <h4>Pass Management</h4>
                <p>Apply passes</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">💰</div>
              <div>
                <h4>Salary</h4>
                <p>View payslip</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">📊</div>
              <div>
                <h4>Reports</h4>
                <p>Track records</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="login-right">
        <div className="login-card">
          <div className="user-icon">
            <span>👤</span>
          </div>

          <div className="login-heading">
            <h1>Welcome Back!</h1>
            <p>Sign in to continue</p>
          </div>

          <form onSubmit={handleLogin} noValidate>
            <div className="form-group">
              <label>Employee ID</label>

              <div className="input-wrapper">
                <span className="input-icon">👤</span>

                <input
                  type="text"
                  placeholder="Enter Employee ID"
                  value={employeeId}
                  onChange={(e) => {
                    setEmployeeId(e.target.value);
                    clearError("employeeId");
                  }}
                />
              </div>

              {errors.employeeId && (
                <p className="field-error">⚠ {errors.employeeId}</p>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>

              <div className="input-wrapper">
                <span className="input-icon">🔒</span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    clearError("password");
                  }}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              {errors.password && (
                <p className="field-error">⚠ {errors.password}</p>
              )}
            </div>

            <div className="form-group">
              <label>Depot</label>

              <div className="input-wrapper">
                <span className="input-icon">🏢</span>

                <select
                  value={depot}
                  onChange={(e) => {
                    setDepot(e.target.value);
                    clearError("depot");
                  }}
                >
                  <option value="">Select Depot</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Salem">Salem</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Trichy">Trichy</option>
                </select>
              </div>

              {errors.depot && (
                <p className="field-error">⚠ {errors.depot}</p>
              )}
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <button type="button" className="forgot-password">
                Forgot Password?
              </button>
            </div>

            {errors.login && (
              <p className="field-error">⚠ {errors.login}</p>
            )}

            {successMessage && (
              <div className="success-message">
                ✓ {successMessage}
              </div>
            )}

            <button type="submit" className="sign-in-button">
              <span>Sign In</span>
              <span className="arrow">→</span>
            </button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <button className="sso-button">
            👤 Employee SSO Login
          </button>
        </div>

        <footer className="login-footer">
          <p>© 2026 TNSTC - Tamil Nadu State Transport Corporation</p>
          <p>All rights reserved.</p>
        </footer>
      </section>
    </div>
  );
}

export default Login;