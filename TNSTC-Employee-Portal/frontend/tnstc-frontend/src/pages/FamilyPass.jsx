import React, { useState, useEffect } from "react";
import "./FamilyPass.css";
import API from "../api";

function FamilyPass() {
  const [activeTab, setActiveTab] = useState("apply");
  const [step, setStep] = useState(1);

  const [employee, setEmployee] = useState({});
  const [passHistory, setPassHistory] = useState([]);

  const [form, setForm] = useState({
    passType: "FULL",
    from: "",
    to: "",
    via: "",
  });

  const [member, setMember] = useState({
    name: "",
    relation: "Daughter",
    age: "",
  });

  useEffect(() => {
    const emp = JSON.parse(localStorage.getItem("employee"));

    if (!emp) {
      window.location.href = "/login";
      return;
    }

    setEmployee(emp);

    API.get(`/family-pass/${emp.employeeId}`)
      .then((res) => setPassHistory(res.data))
      .catch(() => console.log("No pass history"));
  }, []);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateMember = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };

  const goNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const submitApplication = async () => {
    try {
      const body = {
        employeeId: employee.employeeId,
        applicantName: member.name,
        relation: member.relation,
        age: Number(member.age),
        passType: form.passType,
        validFrom: new Date().toISOString().split("T")[0],
        validTo: new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        )
          .toISOString()
          .split("T")[0],
      };

      await API.post("/family-pass", body);

      const res = await API.get(`/family-pass/${employee.employeeId}`);
      setPassHistory(res.data);

      alert("✅ Family Pass application submitted successfully!");

      setStep(1);
      setMember({
        name: "",
        relation: "Daughter",
        age: "",
      });

      setForm({
        passType: "FULL",
        from: "",
        to: "",
        via: "",
      });

      setActiveTab("status");
    } catch {
      alert("❌ Submission Failed");
    }
  };

  return (
    <div className="family-page">
      {/* HEADER */}
      <header className="family-header">
        <div className="family-header-left">
          <div className="family-header-icon">🎟️</div>

          <div>
            <h1>Family Pass</h1>

            <p>
              Apply and manage travel passes for your family — no depot visit
              needed!
            </p>
          </div>
        </div>

        <div className="family-user-icon">👤</div>
      </header>

      {/* TABS */}
      <div className="family-tabs">
        <button
          className={activeTab === "apply" ? "tab-active" : ""}
          onClick={() => setActiveTab("apply")}
        >
          📝 Apply New Pass
        </button>

        <button
          className={activeTab === "digital" ? "tab-active" : ""}
          onClick={() => setActiveTab("digital")}
        >
          🎫 Digital Pass
        </button>

        <button
          className={activeTab === "status" ? "tab-active" : ""}
          onClick={() => setActiveTab("status")}
        >
          📊 Pass Status
        </button>
      </div>

      {activeTab === "apply" && (
        <>
          {/* STEPS */}
          <div className="family-steps">
            <div className={`family-step ${step >= 1 ? "step-active" : ""}`}>
              <div className="step-number">1</div>
              <span>Employee Info</span>
            </div>

            <div className="step-line"></div>

            <div className={`family-step ${step >= 2 ? "step-active" : ""}`}>
              <div className="step-number">2</div>
              <span>Member Details</span>
            </div>

            <div className="step-line"></div>

            <div className={`family-step ${step >= 3 ? "step-active" : ""}`}>
              <div className="step-number">3</div>
              <span>Review & Submit</span>
            </div>
          </div>

          <div className="family-layout">
            <section className="family-form-card">
              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <div className="form-card-header">
                    <div>
                      <h2>👤 Employee Details</h2>
                      <p>Pre-filled from your employee profile</p>
                    </div>
                  </div>

                  <div className="family-form-grid">
                    <div className="family-field">
                      <label>EMPLOYEE NAME *</label>
                      <input value={employee.name || ""} readOnly />
                    </div>

                    <div className="family-field">
                      <label>EMPLOYEE NO. *</label>
                      <input value={employee.employeeId || ""} readOnly />
                    </div>

                    <div className="family-field">
                      <label>DESIGNATION</label>
                      <input value={employee.designation || ""} readOnly />
                    </div>

                    <div className="family-field">
                      <label>BRANCH / DEPOT *</label>
                      <input value={employee.depot || ""} readOnly />
                    </div>

                    <div className="family-field">
                      <label>PASS TYPE *</label>

                      <select
                        name="passType"
                        value={form.passType}
                        onChange={updateForm}
                      >
                        <option value="FULL">FULL Pass</option>
                        <option value="HALF">HALF Pass</option>
                        <option value="CHILD">CHILD Pass</option>
                      </select>
                    </div>

                    <div className="family-field">
                      <label>VALID FROM *</label>

                      <input
                        type="date"
                        value={new Date().toISOString().split("T")[0]}
                        readOnly
                      />
                    </div>

                    <div className="family-field">
                      <label>FROM STATION *</label>

                      <input
                        name="from"
                        value={form.from}
                        onChange={updateForm}
                        placeholder="e.g. VALAPADY"
                      />
                    </div>

                    <div className="family-field">
                      <label>TO STATION *</label>

                      <input
                        name="to"
                        value={form.to}
                        onChange={updateForm}
                        placeholder="e.g. CHENNAI"
                      />
                    </div>

                    <div className="family-field field-full">
                      <label>VIA STATIONS</label>

                      <input
                        name="via"
                        value={form.via}
                        onChange={updateForm}
                        placeholder="e.g. ATTUR"
                      />
                    </div>
                  </div>

                  <div className="form-button-area">
                    <button className="family-primary-btn" onClick={goNext}>
                      Next — Add Family Member →
                    </button>
                  </div>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  <div className="form-card-header">
                    <div>
                      <h2>👨‍👩‍👧 Member Details</h2>
                      <p>Add the family member for this pass</p>
                    </div>
                  </div>

                  <div className="member-form">
                    <div className="family-field">
                      <label>MEMBER NAME *</label>

                      <input
                        name="name"
                        value={member.name}
                        onChange={updateMember}
                        placeholder="Enter family member name"
                      />
                    </div>

                    <div className="family-field">
                      <label>RELATION *</label>

                      <select
                        name="relation"
                        value={member.relation}
                        onChange={updateMember}
                      >
                        <option>Daughter</option>
                        <option>Son</option>
                        <option>Spouse</option>
                        <option>Father</option>
                        <option>Mother</option>
                      </select>
                    </div>

                    <div className="family-field">
                      <label>AGE *</label>

                      <input
                        type="number"
                        name="age"
                        value={member.age}
                        onChange={updateMember}
                        placeholder="Enter age"
                      />
                    </div>
                  </div>

                  <div className="form-button-row">
                    <button className="family-back-btn" onClick={goBack}>
                      ← Back
                    </button>

                    <button className="family-primary-btn" onClick={goNext}>
                      Continue to Review →
                    </button>
                  </div>
                </>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <>
                  <div className="form-card-header">
                    <div>
                      <h2>🔎 Review & Submit</h2>
                      <p>Check your details before submitting</p>
                    </div>
                  </div>

                  <div className="review-container">
                    <div className="review-section">
                      <h3>Employee Information</h3>

                      <div className="review-row">
                        <span>Employee Name</span>
                        <strong>{employee.name}</strong>
                      </div>

                      <div className="review-row">
                        <span>Employee No.</span>
                        <strong>{employee.employeeId}</strong>
                      </div>

                      <div className="review-row">
                        <span>Depot</span>
                        <strong>{employee.depot}</strong>
                      </div>
                    </div>

                    <div className="review-section">
                      <h3>Pass Information</h3>

                      <div className="review-row">
                        <span>Pass Type</span>
                        <strong>{form.passType}</strong>
                      </div>

                      <div className="review-row">
                        <span>Route</span>
                        <strong>
                          {form.from || "VALAPADY"} → {form.to || "CHENNAI"}
                        </strong>
                      </div>

                      <div className="review-row">
                        <span>Via</span>
                        <strong>{form.via || "ATTUR"}</strong>
                      </div>
                    </div>

                    <div className="review-section">
                      <h3>Family Member</h3>

                      <div className="review-row">
                        <span>Name</span>
                        <strong>{member.name || "Not entered"}</strong>
                      </div>

                      <div className="review-row">
                        <span>Relation</span>
                        <strong>{member.relation}</strong>
                      </div>

                      <div className="review-row">
                        <span>Age</span>
                        <strong>{member.age || "Not entered"}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="form-button-row">
                    <button className="family-back-btn" onClick={goBack}>
                      ← Back
                    </button>

                    <button
                      className="family-submit-btn"
                      onClick={submitApplication}
                    >
                      ✓ Submit Application
                    </button>
                  </div>
                </>
              )}
            </section>

            {/* RIGHT SIDE */}
            <aside className="family-right-column">
              <div className="family-side-card">
                <div className="side-card-title">
                  <h2>🎟️ Active Passes</h2>
                  <span>
                    {passHistory.filter((p) => p.status === "Active").length}{" "}
                    Active
                  </span>
                </div>

                {passHistory
                  .filter((p) => p.status === "Active")
                  .map((pass) => (
                    <div className="active-pass" key={pass.id}>
                      <div>
                        <h3>{pass.applicantName}</h3>
                        <p>{pass.relation}</p>
                      </div>

                      <b className="active-badge">✓ Active</b>

                      <small>
                        Pass ID: <strong>{pass.id}</strong>
                        <br />
                        Valid: <strong>{pass.validTo}</strong>
                      </small>
                    </div>
                  ))}

                <div className="renewal-card">
                  <h3>Renewal</h3>

                  <span>⌛ Pending</span>

                  <p>Applied recently</p>

                  <small>Expected approval: 3–5 working days</small>
                </div>
              </div>

              <div className="family-side-card">
                <div className="side-card-title">
                  <h2>📋 Eligibility Rules</h2>
                </div>

                <div className="eligibility-row">
                  <span>✓</span>
                  <p>
                    <strong>Spouse</strong> — 1 pass allowed
                  </p>
                </div>

                <div className="eligibility-row">
                  <span>✓</span>
                  <p>
                    <strong>Children</strong> — Up to 2 members
                  </p>
                </div>

                <div className="eligibility-row">
                  <span>✓</span>
                  <p>
                    <strong>Age</strong> — As per TNSTC rules
                  </p>
                </div>

                <div className="eligibility-row">
                  <span>✓</span>
                  <p>
                    <strong>Validity</strong> — One year
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </>
      )}
            {/* ======================================
          DIGITAL PASS
      ====================================== */}

      {activeTab === "digital" && (
        <div className="digital-page">

          <p className="digital-description">
            Digital version of your family pass — same as the
            physical pass issued by depot.
          </p>

          <div className="digital-layout">

            <div>

              <div className="digital-pass-card">

                <div className="pass-top">

                  <div>
                    <strong>
                      TNSTC LTD {employee.depot || "DEPOT"}
                    </strong>

                    <small>
                      தமிழ்நாடு அரசு போக்குவரத்துக் கழகம்
                    </small>
                  </div>

                  <div className="pass-number">
                    <small>Pass No.</small>
                    <strong>
                      {passHistory.length > 0
                        ? `FP-${passHistory[0].id}`
                        : "----"}
                    </strong>
                  </div>

                </div>

                <div className="pass-table">

                  <div className="pass-label">
                    ஊழியர் பெயர் / EMPLOYEE
                  </div>

                  <div className="pass-value red-text">
                    {employee.name}
                  </div>

                  <div className="pass-label">
                    பதவி / DESIGNATION
                  </div>

                  <div className="pass-value">
                    {employee.designation}
                  </div>

                  <div className="pass-label">
                    ஊழியர் எண் / EMP NO.
                  </div>

                  <div className="pass-value">
                    {employee.employeeId}
                  </div>

                  <div className="pass-label">
                    உறுப்பினர் பெயர் / MEMBER
                  </div>

                  <div className="pass-value red-text">
                    {passHistory[0]?.applicantName || "Family Member"}
                  </div>

                  <div className="pass-label">
                    உறவு / RELATION
                  </div>

                  <div className="pass-value">
                    {passHistory[0]?.relation || "-"}
                  </div>

                  <div className="pass-label">
                    வயது / AGE
                  </div>

                  <div className="pass-value">
                    {passHistory[0]?.age || "-"}
                  </div>

                  <div className="pass-label">
                    வகை / TYPE
                  </div>

                  <div className="pass-value green-text">
                    {passHistory[0]?.passType || "FULL"}
                  </div>

                  <div className="pass-label">
                    FROM DATE
                  </div>

                  <div className="pass-value">
                    {passHistory[0]?.validFrom || "-"}
                  </div>

                  <div className="pass-label">
                    VALID UNTIL
                  </div>

                  <div className="pass-value red-text">
                    {passHistory[0]?.validTo || "-"}
                  </div>

                  <div className="pass-label">
                    STATUS
                  </div>

                  <div className="pass-value green-text">
                    {passHistory[0]?.status || "Pending"}
                  </div>

                </div>

                <div className="pass-footer">
                  This pass is generated from TNSTC Employee Portal
                </div>

              </div>

              <button className="print-pass-btn">
                🖨️ Print / Download Pass
              </button>

            </div>

            <div className="digital-side">

              <div className="family-side-card">

                <div className="side-card-title">
                  <h2>📄 Pass Info</h2>
                </div>

                <div className="info-row">
                  <span>Pass Number</span>
                  <strong>
                    {passHistory.length > 0
                      ? `FP-${passHistory[0].id}`
                      : "--"}
                  </strong>
                </div>

                <div className="info-row">
                  <span>Issued On</span>
                  <strong>{passHistory[0]?.validFrom || "-"}</strong>
                </div>

                <div className="info-row">
                  <span>Valid Until</span>
                  <strong className="red-text">
                    {passHistory[0]?.validTo || "-"}
                  </strong>
                </div>

                <div className="info-row">
                  <span>Status</span>
                  <strong className="green-text">
                    {passHistory[0]?.status || "Pending"}
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}


      {/* ======================================
          PASS STATUS
      ====================================== */}

      {activeTab === "status" && (
        <div className="status-page">

          <div className="status-table-card">

            <div className="status-table-header">
              <h2>📊 All Pass Applications</h2>
            </div>

            <div className="table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>APP NO.</th>
                    <th>MEMBER</th>
                    <th>RELATION</th>
                    <th>TYPE</th>
                    <th>VALID FROM</th>
                    <th>VALID UNTIL</th>
                    <th>STATUS</th>
                  </tr>
                </thead>

                <tbody>

                  {passHistory.length === 0 ? (
                    <tr>
                      <td colSpan="7" style={{ textAlign: "center" }}>
                        No Applications Found
                      </td>
                    </tr>
                  ) : (
                    passHistory.map((pass) => (
                      <tr key={pass.id}>
                        <td>APP-{pass.id}</td>
                        <td>{pass.applicantName}</td>
                        <td>{pass.relation}</td>
                        <td>{pass.passType}</td>
                        <td>{pass.validFrom}</td>
                        <td>{pass.validTo}</td>
                        <td>
                          {pass.status === "Pending" ? (
                            <span className="pending-badge">
                              ⌛ Pending
                            </span>
                          ) : (
                            <span className="active-badge">
                              ✓ {pass.status}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default FamilyPass;