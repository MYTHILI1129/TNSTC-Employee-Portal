package com.tnstc.tnstc_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnstc.tnstc_backend.entity.IncidentReport;
import com.tnstc.tnstc_backend.repository.IncidentReportRepository;

@Service
public class IncidentReportService {

    @Autowired
    private IncidentReportRepository repository;

    // Get reports by employee
    public List<IncidentReport> getReports(String employeeId) {
        return repository.findByEmployeeId(employeeId);
    }

    // Save new incident report
    public IncidentReport saveReport(IncidentReport report) {
        report.setStatus("Pending");
        return repository.save(report);
    }
}