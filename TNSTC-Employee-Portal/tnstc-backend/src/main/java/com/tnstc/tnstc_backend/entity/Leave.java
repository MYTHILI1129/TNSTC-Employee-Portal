package com.tnstc.tnstc_backend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="leave_apply")
public class Leave {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="employee_id")
    private String employeeId;

    @Column(name="leave_type")
    private String leaveType;

    @Column(name="from_date")
    private LocalDate fromDate;

    @Column(name="to_date")
    private LocalDate toDate;

    private String reason;
    private String status;

    public Leave(){}

    public Long getId(){ return id; }
    public void setId(Long id){ this.id=id; }

    public String getEmployeeId(){ return employeeId; }
    public void setEmployeeId(String employeeId){ this.employeeId=employeeId; }

    public String getLeaveType(){ return leaveType; }
    public void setLeaveType(String leaveType){ this.leaveType=leaveType; }

    public LocalDate getFromDate(){ return fromDate; }
    public void setFromDate(LocalDate fromDate){ this.fromDate=fromDate; }

    public LocalDate getToDate(){ return toDate; }
    public void setToDate(LocalDate toDate){ this.toDate=toDate; }

    public String getReason(){ return reason; }
    public void setReason(String reason){ this.reason=reason; }

    public String getStatus(){ return status; }
    public void setStatus(String status){ this.status=status; }
}