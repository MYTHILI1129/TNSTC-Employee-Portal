import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-left">

          <p className="about-label">
            ABOUT TNSTC
          </p>

          <h2>
            Moving Tamil Nadu
            <span> Forward</span>
          </h2>

          <p className="about-text">
            Tamil Nadu State Transport Corporation is one of the major
            public transport organizations serving people across Tamil Nadu.
            TNSTC provides reliable and affordable bus transportation while
            connecting cities, towns and villages throughout the state.
          </p>

          <p className="about-text">
            The TNSTC Employee Self-Service Portal brings important employee
            services together in one secure digital platform, making it easier
            for employees to access their work-related information anytime.
          </p>

          <div className="about-highlights">

            <div className="about-highlight">
              <span>✓</span>
              <div>
                <h3>Reliable Service</h3>
                <p>Supporting employees with accessible digital services.</p>
              </div>
            </div>

            <div className="about-highlight">
              <span>✓</span>
              <div>
                <h3>Digital Access</h3>
                <p>Important employee information available in one place.</p>
              </div>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="about-right">

          <div className="about-card">

            <div className="about-card-top">
              <span>TNSTC</span>
              <span>Employee Portal</span>
            </div>

            <div className="about-icon">
              🚌
            </div>

            <h3>
              Connecting People,
              <br />
              Supporting Employees
            </h3>

            <p>
              A digital platform designed to make employee services
              simple, secure and convenient.
            </p>

            <div className="about-card-line"></div>

            <div className="about-card-footer">
              <span>TNSTC</span>
              <span>Since 1972</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;