package com.tnstc.tnstc_backend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "incident_report")
public class IncidentReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "employee_id")
    private String employeeId;

    @Column(name = "incident_date")
    private LocalDate incidentDate;

    @Column(name = "incident_time")
    private LocalTime incidentTime;

    private String location;

    @Column(name = "incident_type")
    private String incidentType;

    private String description;
    private String injury;
    private String status;

    public IncidentReport() {}

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getEmployeeId() { return employeeId; }
    public void setEmployeeId(String employeeId) { this.employeeId = employeeId; }

    public LocalDate getIncidentDate() { return incidentDate; }
    public void setIncidentDate(LocalDate incidentDate) { this.incidentDate = incidentDate; }

    public LocalTime getIncidentTime() { return incidentTime; }
    public void setIncidentTime(LocalTime incidentTime) { this.incidentTime = incidentTime; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getIncidentType() { return incidentType; }
    public void setIncidentType(String incidentType) { this.incidentType = incidentType; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getInjury() { return injury; }
    public void setInjury(String injury) { this.injury = injury; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}