package com.tnstc.tnstc_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tnstc.tnstc_backend.entity.VehicleComplaint;
import com.tnstc.tnstc_backend.service.VehicleComplaintService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class VehicleComplaintController {

    @Autowired
    private VehicleComplaintService service;

    // Get complaints by employee
    @GetMapping("/vehicle-complaint/{employeeId}")
    public List<VehicleComplaint> getComplaints(@PathVariable String employeeId) {
        return service.getComplaints(employeeId);
    }

    // Submit new complaint
    @PostMapping("/vehicle-complaint")
    public VehicleComplaint saveComplaint(@RequestBody VehicleComplaint complaint) {
        return service.saveComplaint(complaint);
    }
}