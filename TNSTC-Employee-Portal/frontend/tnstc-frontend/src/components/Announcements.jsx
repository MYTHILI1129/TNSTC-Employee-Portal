import "./Announcements.css";

function Announcements() {
  const announcements = [
    {
      date: "AUG 08, 2026",
      tag: "IMPORTANT",
      title: "Monthly Salary Slip Available",
      description:
        "Employees can view and download their latest monthly salary slip from the employee portal.",
    },
    {
      date: "AUG 05, 2026",
      tag: "NOTICE",
      title: "Leave Application Update",
      description:
        "Employees can submit leave applications and check their leave balance through the portal.",
    },
    {
      date: "AUG 01, 2026",
      tag: "UPDATE",
      title: "Employee Services Online",
      description:
        "Important employee services and official information are now accessible from one place.",
    },
  ];

  return (
    <section className="announcements" id="announcements">

      <div className="announcement-header">
        <p className="announcement-label">LATEST UPDATES</p>

        <h2>
          Important <span>Announcements</span>
        </h2>

        <p className="announcement-intro">
          Stay updated with the latest notices and information
          related to TNSTC employees.
        </p>
      </div>


      <div className="announcement-list">

        {announcements.map((item, index) => (
          <div className="announcement-card" key={index}>

            <div className="announcement-date">
              <span>{item.date.split(" ")[0]}</span>
              <strong>
                {item.date.split(" ")[1]}
              </strong>
              <small>
                {item.date.split(" ")[2]}
              </small>
            </div>


            <div className="announcement-content">

              <span className="announcement-tag">
                {item.tag}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <a href="#">
                Read More →
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Announcements;