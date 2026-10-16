import "./Services.css";

function Services() {
  const services = [
    {
      title: "Salary Slip",
      description: "View and download your monthly salary slips and salary history.",
      icon: "₹",
    },
    {
      title: "Leave Management",
      description: "Apply for leave, check leave balance and track application status.",
      icon: "▣",
    },
    {
      title: "Duty Schedule",
      description: "View your assigned duties, timings, routes and duty information.",
      icon: "◷",
    },
    {
      title: "Family Pass",
      description: "Apply for family travel pass and check the application status.",
      icon: "🎫",
    },
    {
      title: "Service Records",
      description: "Access your service details, certificates and employment records.",
      icon: "▤",
    },
    {
      title: "Notifications",
      description: "View important announcements and official employee notifications.",
      icon: "🔔",
    },
  ];

  return (
    <section className="services" id="services">

      <div className="services-header">
        <p className="section-label">EMPLOYEE SERVICES</p>

        <h2>
          Everything You Need,
          <span> In One Place</span>
        </h2>

        <p className="services-intro">
          Access essential employee services quickly and securely
          through the TNSTC Employee Self-Service Portal.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#">
                View Service →
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;