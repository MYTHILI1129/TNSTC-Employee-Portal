package com.tnstc.tnstc_backend.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnstc.tnstc_backend.entity.Employee;
import com.tnstc.tnstc_backend.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Optional<Employee> getProfile(String employeeId) {
        return repository.findByEmployeeId(employeeId);
    }

    public Employee updateProfile(Employee employee) {
        return repository.save(employee);
    }
}