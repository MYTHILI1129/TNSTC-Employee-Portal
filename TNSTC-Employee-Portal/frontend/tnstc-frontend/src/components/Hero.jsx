import "./Hero.css";

function Hero() {
  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <div className="hero-badge">
            • EMPLOYEE SELF-SERVICE PORTAL
          </div>

          <h1>
            Welcome to{" "}
            <span>TNSTC Employee Portal</span>
          </h1>

          <p>
            A secure digital platform designed for Tamil Nadu State
            Transport Corporation employees to access salary slips,
            leave management, duty schedules, employee services and
            official information from one place.
          </p>

          <div className="hero-buttons">

            <button
              className="login-btn"
              onClick={handleLogin}
            >
              👤 Employee Login
            </button>

            <a
              href="#services"
              className="learn-btn"
            >
              ▣ Learn More
            </a>

          </div>

          {/* STATISTICS */}
          <div className="hero-stats">

            <div className="stat-item">
              <h3>21K+</h3>
              <p>Employees</p>
            </div>

            <div className="stat-item">
              <h3>320+</h3>
              <p>Depots</p>
            </div>

            <div className="stat-item">
              <h3>8</h3>
              <p>Corporations</p>
            </div>

            <div className="stat-item">
              <h3>24/7</h3>
              <p>Online Access</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE
            Bus is handled by Hero.css ::after
            so there is NO separate white image box.
        */}
        <div className="hero-right"></div>

      </div>
    </section>
  );
}

export default Hero;