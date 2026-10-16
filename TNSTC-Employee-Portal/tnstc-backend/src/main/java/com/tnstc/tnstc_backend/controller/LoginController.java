package com.tnstc.tnstc_backend.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tnstc.tnstc_backend.dto.LoginRequest;
import com.tnstc.tnstc_backend.entity.Employee;
import com.tnstc.tnstc_backend.repository.EmployeeRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {

    @Autowired
    private EmployeeRepository repository;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginRequest request) {

        Map<String, Object> response = new HashMap<>();

        Optional<Employee> employee =
                repository.findByEmployeeIdAndPassword(
                        request.getEmployeeId(),
                        request.getPassword());

        if (employee.isPresent()) {
            response.put("success", true);
            response.put("employee", employee.get());
        } else {
            response.put("success", false);
            response.put("message", "Invalid Employee ID or Password");
        }

        return response;
    }
}