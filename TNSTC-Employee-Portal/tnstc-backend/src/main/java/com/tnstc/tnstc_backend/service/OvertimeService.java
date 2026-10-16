package com.tnstc.tnstc_backend.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnstc.tnstc_backend.entity.Overtime;
import com.tnstc.tnstc_backend.repository.OvertimeRepository;

@Service
public class OvertimeService {

    @Autowired
    OvertimeRepository repo;

    public List<Overtime> getOvertime(String employeeId){
        return repo.findByEmployeeId(employeeId);
    }
}