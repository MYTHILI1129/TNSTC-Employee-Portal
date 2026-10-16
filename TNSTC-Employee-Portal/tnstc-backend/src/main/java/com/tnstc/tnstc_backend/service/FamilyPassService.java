package com.tnstc.tnstc_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnstc.tnstc_backend.entity.FamilyPass;
import com.tnstc.tnstc_backend.repository.FamilyPassRepository;

@Service
public class FamilyPassService {

    @Autowired
    private FamilyPassRepository repository;

    // Get all passes for one employee
    public List<FamilyPass> getPasses(String employeeId) {
        return repository.findByEmployeeId(employeeId);
    }

    // Apply new family pass
    public FamilyPass applyPass(FamilyPass pass) {
        pass.setStatus("Pending");
        return repository.save(pass);
    }
}