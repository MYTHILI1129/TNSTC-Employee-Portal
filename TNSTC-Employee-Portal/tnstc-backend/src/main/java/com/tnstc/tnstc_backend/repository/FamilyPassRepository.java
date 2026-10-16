package com.tnstc.tnstc_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tnstc.tnstc_backend.entity.FamilyPass;

public interface FamilyPassRepository extends JpaRepository<FamilyPass, Integer> {

    List<FamilyPass> findByEmployeeId(String employeeId);

}