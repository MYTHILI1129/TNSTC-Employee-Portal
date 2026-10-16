package com.tnstc.tnstc_backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tnstc.tnstc_backend.entity.Overtime;
import com.tnstc.tnstc_backend.service.OvertimeService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class OvertimeController {

    @Autowired
    OvertimeService service;

    @GetMapping("/overtime/{employeeId}")
    public List<Overtime> getOvertime(@PathVariable String employeeId){
        return service.getOvertime(employeeId);
    }
}