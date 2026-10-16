package com.tnstc.tnstc_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tnstc.tnstc_backend.entity.Salary;

public interface SalaryRepository extends JpaRepository<Salary, Long> {

    Optional<Salary> findByEmployeeId(String employeeId);

}