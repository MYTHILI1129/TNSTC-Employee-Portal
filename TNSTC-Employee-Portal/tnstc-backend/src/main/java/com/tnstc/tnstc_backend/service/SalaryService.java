package com.tnstc.tnstc_backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnstc.tnstc_backend.entity.Salary;
import com.tnstc.tnstc_backend.repository.SalaryRepository;

@Service
public class SalaryService {

    @Autowired
    private SalaryRepository repository;

    public Optional<Salary> getSalary(String employeeId) {
        return repository.findByEmployeeId(employeeId);
    }
}