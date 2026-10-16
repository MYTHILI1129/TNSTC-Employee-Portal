import React, { useEffect, useState } from "react";
import "./Profile.css";
import API from "../api";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const employee = JSON.parse(localStorage.getItem("employee"));

    if (!employee) {
      window.location.href = "/login";
      return;
    }

    API.get(`/profile/${employee.employeeId}`)
      .then((res) => setProfile(res.data))
      .catch(() => alert("Profile load failed"));
  }, []);

  const saveProfile = async () => {
    try {
      await API.put("/profile", profile);
      alert("✅ Profile Updated Successfully!");
    } catch {
      alert("❌ Update Failed");
    }
  };

  if (!profile) return <h2>Loading...</h2>;

  return (
    <div className="profile-page">

      {/* Header */}
      <div className="profile-header">
        <div>
          <h1>My Profile</h1>
          <p>TNSTC Employee Information</p>
        </div>

        <button
          className="back-btn"
          onClick={() => (window.location.href = "/dashboard")}
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Employee Summary */}
      <div className="employee-card">
        <div className="employee-title">Employee Summary</div>

        <div className="emp-grid">
          <div>
            <span>Name</span>
            <h4>{profile.name}</h4>
          </div>

          <div>
            <span>Employee ID</span>
            <h4>{profile.employeeId}</h4>
          </div>

          <div>
            <span>Designation</span>
            <h4>{profile.designation}</h4>
          </div>

          <div>
            <span>Depot</span>
            <h4>{profile.depot}</h4>
          </div>

          <div>
            <span>Blood Group</span>
            <h4>{profile.bloodGroup}</h4>
          </div>

          <div>
            <span>Status</span>
            <h4 style={{ color: "green" }}>Active</h4>
          </div>
        </div>
      </div>

      <div className="top-layout">

        <div className="cards-grid">

          {/* Personal Details */}
          <div className="info-card">
            <h3>👤 Personal Details</h3>

            <div className="row">
              <span>Full Name</span>
              <b>{profile.name}</b>
            </div>

            <div className="row">
              <span>Date of Birth</span>
              <b>{profile.dob}</b>
            </div>

            <div className="row">
              <span>Blood Group</span>
              <b>{profile.bloodGroup}</b>
            </div>

            <button className="card-btn">Edit Personal</button>
          </div>

          {/* Contact Information */}
          <div className="info-card">
            <h3>📞 Contact Information</h3>

            <div className="row">
              <span>Email</span>
              <b>{profile.email}</b>
            </div>

            <div className="row">
              <span>Phone</span>
              <b>{profile.phone}</b>
            </div>

            <div className="row">
              <span>Address</span>
              <b>{profile.address}</b>
            </div>

            <button className="card-btn">Update Contact</button>
          </div>

          {/* Employment Details */}
          <div className="info-card">
            <h3>💼 Employment Details</h3>

            <div className="row">
              <span>Employee ID</span>
              <b>{profile.employeeId}</b>
            </div>

            <div className="row">
              <span>Designation</span>
              <b>{profile.designation}</b>
            </div>

            <div className="row">
              <span>Depot</span>
              <b>{profile.depot}</b>
            </div>

            <div className="row">
              <span>Joining Date</span>
              <b>{profile.joiningDate}</b>
            </div>

            <button className="card-btn">View Service</button>
          </div>

        </div>

        {/* Profile Photo */}
        <div className="photo-card">
          <h3>Profile Photo</h3>

          <div className="avatar-circle">👤</div>

          <button className="upload-btn">
            Upload Photo
          </button>

          <small>JPG / PNG (Max 2MB)</small>
        </div>

      </div>

      {/* Save Bar */}
      <div className="save-bar">
        <p>✓ Your profile is synchronized with TNSTC database.</p>

        <button className="save-btn" onClick={saveProfile}>
          Save Changes
        </button>
      </div>

      <div className="profile-footer">
        © 2026 TNSTC Employee Portal
      </div>

    </div>
  );
}

export default Profile;