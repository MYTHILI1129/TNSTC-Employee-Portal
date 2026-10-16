import React, { useState } from "react";
import "./DutyBoard.css";

function DutyBoard() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [shiftFilter, setShiftFilter] = useState("All Shifts");
  const [selectedDate, setSelectedDate] = useState("17");
  const [myDutyOnly, setMyDutyOnly] = useState(false);

  const dates = [
    { day: "Sat", date: "15", month: "Aug" },
    { day: "Sun", date: "16", month: "Aug" },
    { day: "Mon", date: "17", month: "Aug", today: true },
    { day: "Tue", date: "18", month: "Aug" },
    { day: "Wed", date: "19", month: "Aug" },
    { day: "Thu", date: "20", month: "Aug" },
    { day: "Fri", date: "21", month: "Aug" },
  ];

  const duties = [
    {
      bus: "TN33 N 4521",
      type: "Express",
      route: "Valapadi → Salem Junction",
      shift: "Morning",
      time: "06:00–14:00",
      trips: "3 trips today",
      driver: "Employee",
      employeeId: "TN-EMP-001",
      status: "On Duty",
      you: true,
    },
    {
      bus: "TN33 N 4410",
      type: "Ordinary",
      route: "Salem → Rasipuram",
      shift: "Morning",
      time: "06:00–14:00",
      trips: "4 trips today",
      driver: "Employee",
      employeeId: "TN-EMP-002",
      status: "On Duty",
    },
    {
      bus: "TN33 N 4892",
      type: "Ordinary",
      route: "Salem → Attur",
      shift: "Morning",
      time: "06:00–14:00",
      trips: "4 trips today",
      driver: "Employee",
      employeeId: "TN-EMP-003",
      status: "On Duty",
    },
    {
      bus: "TN33 N 5012",
      type: "Express",
      route: "Salem → Namakkal",
      shift: "Afternoon",
      time: "14:00–22:00",
      trips: "3 trips today",
      driver: "Employee",
      employeeId: "TN-EMP-004",
      status: "On Duty",
    },
    {
      bus: "TN33 N 4671",
      type: "Ordinary",
      route: "Salem → Mettur",
      shift: "Afternoon",
      time: "14:00–22:00",
      trips: "3 trips today",
      driver: "Employee",
      employeeId: "TN-EMP-005",
      status: "On Duty",
    },
    {
      bus: "TN33 N 3980",
      type: "Ordinary",
      route: "Salem → Omalur",
      shift: "Morning",
      time: "06:00–14:00",
      trips: "4 trips today",
      driver: "Employee",
      employeeId: "TN-EMP-006",
      status: "On Duty",
    },
    {
      bus: "TN33 N 4150",
      type: "Express",
      route: "Salem → Dharmapuri",
      shift: "Evening",
      time: "14:00–22:00",
      trips: "2 trips today",
      driver: "Employee",
      employeeId: "TN-EMP-007",
      status: "On Leave",
    },
    {
      bus: "TN33 N 4238",
      type: "Ordinary",
      route: "Salem → Edappadi",
      shift: "Morning",
      time: "06:00–14:00",
      trips: "3 trips today",
      driver: "Employee",
      employeeId: "TN-EMP-008",
      status: "Rest Day",
    },
    {
      bus: "TN33 N 4762",
      type: "Express",
      route: "Salem → Erode",
      shift: "Evening",
      time: "14:00–22:00",
      trips: "2 trips today",
      driver: "Employee",
      employeeId: "TN-EMP-009",
      status: "On Duty",
    },
  ];

  // ================= FILTER DUTIES =================

  const filteredDuties = duties.filter((duty) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      duty.bus.toLowerCase().includes(searchText) ||
      duty.route.toLowerCase().includes(searchText) ||
      duty.driver.toLowerCase().includes(searchText) ||
      duty.employeeId.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All Status" ||
      duty.status === statusFilter;

    const matchesShift =
      shiftFilter === "All Shifts" ||
      duty.shift === shiftFilter;

    const matchesMyDuty =
      !myDutyOnly || duty.you === true;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesShift &&
      matchesMyDuty
    );
  });

  // ================= SUMMARY COUNTS =================

  const totalDrivers = duties.length;

  const onDutyCount = duties.filter(
    (duty) => duty.status === "On Duty"
  ).length;

  const onLeaveCount = duties.filter(
    (duty) => duty.status === "On Leave"
  ).length;

  const restDayCount = duties.filter(
    (duty) => duty.status === "Rest Day"
  ).length;

  // ================= VIEW DETAILS =================

  const handleViewDetails = (duty) => {
    alert(
      `Duty Details\n\n` +
      `Bus: ${duty.bus}\n` +
      `Type: ${duty.type}\n` +
      `Route: ${duty.route}\n` +
      `Shift: ${duty.shift}\n` +
      `Time: ${duty.time}\n` +
      `Trips: ${duty.trips}\n` +
      `Status: ${duty.status}\n` +
      `Employee ID: ${duty.employeeId}`
    );
  };

  return (
    <div className="duty-page">

      {/* ================= HEADER ================= */}

      <header className="duty-header">

        <div>
          <div className="duty-title-row">

            <span className="duty-title-icon">
              📋
            </span>

            <h1>Duty Board</h1>

            <span className="live-badge">
              <span className="live-dot"></span>
              Live
            </span>

          </div>

          <p>
            TNSTC Depot — Employee Duty Assignments
          </p>
        </div>

        <div className="header-time">
          <span>Live Schedule</span>
        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="duty-content">

        {/* ================= DATE SELECTOR ================= */}

        <div className="date-selector">

          {dates.map((item) => (

            <button
              key={item.date}
              className={`date-card ${
                selectedDate === item.date
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSelectedDate(item.date)
              }
            >

              {item.today && (
                <span className="today-label">
                  TODAY
                </span>
              )}

              <span className="date-day">
                {item.day}
              </span>

              <strong>
                {item.date}
              </strong>

              <span className="date-month">
                {item.month}
              </span>

            </button>

          ))}

        </div>


        {/* ================= CONTROLS ================= */}

        <div className="duty-controls">

          {/* SEARCH */}

          <div className="search-box">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search driver name, bus number, route..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          {/* STATUS */}

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >

            <option>All Status</option>
            <option>On Duty</option>
            <option>On Leave</option>
            <option>Rest Day</option>

          </select>


          {/* SHIFT */}

          <select
            value={shiftFilter}
            onChange={(e) =>
              setShiftFilter(e.target.value)
            }
          >

            <option>All Shifts</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>

          </select>


          {/* MY DUTY */}

          <button
            className={`my-duty-button ${
              myDutyOnly ? "active" : ""
            }`}
            onClick={() =>
              setMyDutyOnly(!myDutyOnly)
            }
          >
            👤 {myDutyOnly ? "All Duties" : "My Duty"}
          </button>

        </div>


        {/* ================= SUMMARY ================= */}

        <section className="summary-grid">

          <div className="summary-card blue-card">

            <div className="summary-icon">
              🚌
            </div>

            <div>
              <strong>
                {totalDrivers}
              </strong>

              <span>
                Total Drivers
              </span>
            </div>

          </div>


          <div className="summary-card green-card">

            <div className="summary-icon">
              ✅
            </div>

            <div>
              <strong>
                {onDutyCount}
              </strong>

              <span>
                On Duty
              </span>
            </div>

          </div>


          <div className="summary-card orange-card">

            <div className="summary-icon">
              📝
            </div>

            <div>
              <strong>
                {onLeaveCount}
              </strong>

              <span>
                On Leave
              </span>
            </div>

          </div>


          <div className="summary-card purple-card">

            <div className="summary-icon">
              🌙
            </div>

            <div>
              <strong>
                {restDayCount}
              </strong>

              <span>
                Rest Day
              </span>
            </div>

          </div>


          <div className="summary-card cyan-card">

            <div className="summary-icon">
              🕐
            </div>

            <div>
              <strong>
                {filteredDuties.length}
              </strong>

              <span>
                Showing
              </span>
            </div>

          </div>

        </section>


        {/* ================= DUTY CARDS ================= */}

        <section className="duties-grid">

          {filteredDuties.map((duty) => (

            <article
              className={`duty-card ${
                duty.you ? "my-duty-card" : ""
              }`}
              key={duty.bus}
            >

              {/* CARD HEADER */}

              <div className="duty-card-header">

                <div className="bus-info">

                  <div className="bus-icon">
                    🚌
                  </div>

                  <div>

                    <div className="bus-number">

                      {duty.bus}

                      {duty.you && (
                        <span className="you-badge">
                          YOU
                        </span>
                      )}

                    </div>

                    <span>
                      {duty.type}
                    </span>

                  </div>

                </div>


                {/* STATUS */}

                <span
                  className={`status-badge ${
                    duty.status
                      .toLowerCase()
                      .replace(" ", "-")
                  }`}
                >

                  <span></span>

                  {duty.status}

                </span>

              </div>


              {/* DETAILS */}

              <div className="duty-details">

                <div className="detail-row">

                  <span className="detail-label">
                    🗺️ Route
                  </span>

                  <strong>
                    {duty.route}
                  </strong>

                </div>


                <div className="detail-row">

                  <span className="detail-label">
                    🕐 Shift
                  </span>

                  <strong>
                    {duty.shift}{" "}
                    {duty.time}
                  </strong>

                </div>


                <div className="detail-row">

                  <span className="detail-label">
                    🔄 Trips
                  </span>

                  <strong>
                    {duty.trips}
                  </strong>

                </div>

              </div>


              {/* FOOTER */}

              <div className="duty-card-footer">

                <div className="driver-info">

                  <div className="driver-avatar">
                    👤
                  </div>

                  <div>

                    <strong>
                      {duty.driver}
                    </strong>

                    <span>
                      {duty.employeeId}
                    </span>

                  </div>

                </div>


                <button
                  className="view-details"
                  onClick={() =>
                    handleViewDetails(duty)
                  }
                >
                  View Details →
                </button>

              </div>

            </article>

          ))}

        </section>


        {/* ================= NO RESULTS ================= */}

        {filteredDuties.length === 0 && (

          <div className="no-results">

            <div>
              🔍
            </div>

            <h3>
              No duty assignments found
            </h3>

            <p>
              Try changing your search or filter.
            </p>

          </div>

        )}

      </main>

    </div>
  );
}

export default DutyBoard;