import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo Section */}
        <div className="logo-section">
          <img
            src="/images/tnstc-logo.png"
            alt="TNSTC Logo"
            className="logo"
          />

          <div className="logo-text">
            <h2>Tamil Nadu State Transport Corporation</h2>
            <p>Employee Self Service Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <a href="/">Home</a>

          <a href="/#services">Services</a>

          <a href="/#about">About</a>

          <a href="/#contact">Contact</a>

          {/* Employee Login */}
          <button
            className="login-btn"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Employee Login
          </button>
        </nav>

      </div>
    </header>
  );
}

export default Header;