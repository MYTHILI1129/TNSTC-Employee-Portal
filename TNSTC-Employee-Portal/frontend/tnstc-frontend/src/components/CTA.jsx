import "./CTA.css";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-container">

        <div className="cta-content">

          <p className="cta-label">
            TNSTC EMPLOYEE SERVICES
          </p>

          <h2>
            Access Your Employee
            <span> Services Online</span>
          </h2>

          <p className="cta-description">
            Login to the TNSTC Employee Self-Service Portal and
            access your duty schedule, salary details, leave
            applications, family pass and other employee services
            from one place.
          </p>

          <div className="cta-buttons">

            <a href="#" className="cta-login-btn">
              Employee Login
            </a>

            <a href="#services" className="cta-services-btn">
              View Services
            </a>

          </div>

        </div>

        <div className="cta-side">

          <div className="cta-box">
            <span className="cta-icon">✓</span>

            <div>
              <h3>Simple & Secure</h3>
              <p>
                Your employee services are available
                through one convenient portal.
              </p>
            </div>
          </div>

          <div className="cta-box">
            <span className="cta-icon">24</span>

            <div>
              <h3>Available Anytime</h3>
              <p>
                Access the portal whenever you need
                your employee information.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;