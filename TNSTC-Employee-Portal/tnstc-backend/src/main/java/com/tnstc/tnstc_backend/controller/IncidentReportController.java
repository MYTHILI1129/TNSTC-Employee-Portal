package com.tnstc.tnstc_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tnstc.tnstc_backend.entity.IncidentReport;
import com.tnstc.tnstc_backend.service.IncidentReportService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class IncidentReportController {

    @Autowired
    private IncidentReportService service;

    // Get all reports of one employee
    @GetMapping("/incident/{employeeId}")
    public List<IncidentReport> getReports(@PathVariable String employeeId) {
        return service.getReports(employeeId);
    }

    // Submit new incident report
    @PostMapping("/incident")
    public IncidentReport saveReport(@RequestBody IncidentReport report) {
        return service.saveReport(report);
    }
}