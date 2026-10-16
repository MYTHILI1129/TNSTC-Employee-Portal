package com.tnstc.tnstc_backend.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.tnstc.tnstc_backend.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<Employee> findByEmployeeIdAndPassword(String employeeId, String password);

    Optional<Employee> findByEmployeeId(String employeeId);
}