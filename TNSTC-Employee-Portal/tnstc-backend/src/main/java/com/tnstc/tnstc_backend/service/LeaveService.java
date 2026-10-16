package com.tnstc.tnstc_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnstc.tnstc_backend.entity.Leave;
import com.tnstc.tnstc_backend.repository.LeaveRepository;

@Service
public class LeaveService {

    @Autowired
    LeaveRepository repo;

    public Leave applyLeave(Leave leave){
        leave.setStatus("Pending");
        return repo.save(leave);
    }

    public List<Leave> getLeaves(String employeeId){
        return repo.findByEmployeeId(employeeId);
    }
}