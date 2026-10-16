package com.tnstc.tnstc_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tnstc.tnstc_backend.entity.Leave;
import com.tnstc.tnstc_backend.service.LeaveService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:5173")
public class LeaveController {

    @Autowired
    LeaveService service;

    @PostMapping("/leave")
    public Leave apply(@RequestBody Leave leave){
        return service.applyLeave(leave);
    }

    @GetMapping("/leave/{employeeId}")
    public List<Leave> get(@PathVariable String employeeId){
        return service.getLeaves(employeeId);
    }
}