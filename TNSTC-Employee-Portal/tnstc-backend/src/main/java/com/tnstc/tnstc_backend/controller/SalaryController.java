package com.tnstc.tnstc_backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tnstc.tnstc_backend.entity.Salary;
import com.tnstc.tnstc_backend.service.SalaryService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class SalaryController {

    @Autowired
    private SalaryService service;

    @GetMapping("/salary/{employeeId}")
    public Salary getSalary(@PathVariable String employeeId){

        Optional<Salary> salary = service.getSalary(employeeId);

        return salary.orElse(null);
    }
}