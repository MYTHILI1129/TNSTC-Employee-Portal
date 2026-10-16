import "./WhyChooseUs.css";

function WhyChooseUs() {
  const reasons = [
    {
      icon: "🔒",
      title: "Secure & Private",
      description:
        "Employee information is handled through a secure and protected digital platform.",
    },
    {
      icon: "⚡",
      title: "Quick Access",
      description:
        "Access important employee services and information without unnecessary paperwork.",
    },
    {
      icon: "📱",
      title: "Easy to Use",
      description:
        "A simple and user-friendly portal designed for convenient employee access.",
    },
    {
      icon: "✓",
      title: "Reliable Information",
      description:
        "Keep track of your salary, leave, duty and other employee-related details.",
    },
  ];

  return (
    <section className="why-choose" id="why-choose">

      <div className="why-header">
        <p className="why-label">WHY CHOOSE US</p>

        <h2>
          Designed for
          <span> TNSTC Employees</span>
        </h2>

        <p className="why-intro">
          The employee portal makes everyday employee services simpler,
          faster and more accessible from one place.
        </p>
      </div>


      <div className="why-grid">

        {reasons.map((reason, index) => (
          <div className="why-card" key={index}>

            <div className="why-icon">
              {reason.icon}
            </div>

            <h3>{reason.title}</h3>

            <p>{reason.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;