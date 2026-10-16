package com.tnstc.tnstc_backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "salary")
public class Salary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "employee_id")
    private String employeeId;

    @Column(name = "salary_month")
    private String salaryMonth;

    private Double basic;
    private Double hra;
    private Double da;
    private Double overtime;
    private Double pf;
    private Double tax;

    @Column(name = "net_salary")
    private Double netSalary;

    public Salary() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmployeeId() { return employeeId; }
    public void setEmployeeId(String employeeId) { this.employeeId = employeeId; }

    public String getSalaryMonth() { return salaryMonth; }
    public void setSalaryMonth(String salaryMonth) { this.salaryMonth = salaryMonth; }

    public Double getBasic() { return basic; }
    public void setBasic(Double basic) { this.basic = basic; }

    public Double getHra() { return hra; }
    public void setHra(Double hra) { this.hra = hra; }

    public Double getDa() { return da; }
    public void setDa(Double da) { this.da = da; }

    public Double getOvertime() { return overtime; }
    public void setOvertime(Double overtime) { this.overtime = overtime; }

    public Double getPf() { return pf; }
    public void setPf(Double pf) { this.pf = pf; }

    public Double getTax() { return tax; }
    public void setTax(Double tax) { this.tax = tax; }

    public Double getNetSalary() { return netSalary; }
    public void setNetSalary(Double netSalary) { this.netSalary = netSalary; }
}