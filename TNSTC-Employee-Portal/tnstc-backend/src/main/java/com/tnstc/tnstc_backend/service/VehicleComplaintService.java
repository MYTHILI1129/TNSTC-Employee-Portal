package com.tnstc.tnstc_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnstc.tnstc_backend.entity.VehicleComplaint;
import com.tnstc.tnstc_backend.repository.VehicleComplaintRepository;

@Service
public class VehicleComplaintService {

    @Autowired
    private VehicleComplaintRepository repository;

    // Get all complaints of one employee
    public List<VehicleComplaint> getComplaints(String employeeId) {
        return repository.findByEmployeeId(employeeId);
    }

    // Save new complaint
    public VehicleComplaint saveComplaint(VehicleComplaint complaint) {
        complaint.setStatus("Pending");
        return repository.save(complaint);
    }
}