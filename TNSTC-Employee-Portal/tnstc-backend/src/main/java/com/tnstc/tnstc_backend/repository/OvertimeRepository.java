package com.tnstc.tnstc_backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.tnstc.tnstc_backend.entity.Overtime;

public interface OvertimeRepository extends JpaRepository<Overtime, Long> {

    List<Overtime> findByEmployeeId(String employeeId);

}