import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/images/tnstc-logo.png"
              alt="TNSTC Logo"
            />
          </div>

          <h2>TNSTC</h2>

          <p>
            Employee Self Service Portal
          </p>

          <p className="footer-description">
            A secure digital platform for Tamil Nadu State
            Transport Corporation employees.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Employee Services */}
        <div className="footer-column">
          <h3>Employee Services</h3>

          <a href="#">Salary Slip</a>
          <a href="#">Leave Management</a>
          <a href="#">Duty Schedule</a>
          <a href="#">Family Pass</a>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3>Support</h3>

          <a href="#">Service Records</a>
          <a href="#">Notifications</a>
          <a href="#">Employee Login</a>
          <a href="#">Help & Support</a>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Tamil Nadu State Transport Corporation.
          All Rights Reserved.
        </p>

        <p>
          TNSTC Employee Self Service Portal
        </p>

      </div>

    </footer>
  );
}

export default Footer;