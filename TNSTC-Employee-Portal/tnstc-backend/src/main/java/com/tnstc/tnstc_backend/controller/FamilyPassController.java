package com.tnstc.tnstc_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tnstc.tnstc_backend.entity.FamilyPass;
import com.tnstc.tnstc_backend.service.FamilyPassService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class FamilyPassController {

    @Autowired
    private FamilyPassService service;

    // Get employee family pass history
    @GetMapping("/family-pass/{employeeId}")
    public List<FamilyPass> getPasses(@PathVariable String employeeId) {
        return service.getPasses(employeeId);
    }

    // Apply new family pass
    @PostMapping("/family-pass")
    public FamilyPass applyPass(@RequestBody FamilyPass pass) {
        return service.applyPass(pass);
    }
}