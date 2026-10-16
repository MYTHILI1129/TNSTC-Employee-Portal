package com.tnstc.tnstc_backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tnstc.tnstc_backend.entity.Employee;
import com.tnstc.tnstc_backend.service.EmployeeService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {

    @Autowired
    private EmployeeService service;

    // GET Profile
    @GetMapping("/profile/{employeeId}")
    public Employee getProfile(@PathVariable String employeeId) {
        Optional<Employee> employee = service.getProfile(employeeId);
        return employee.orElse(null);
    }

    // UPDATE Profile
    @PutMapping("/profile")
    public Employee updateProfile(@RequestBody Employee employee) {
        return service.updateProfile(employee);
    }
}