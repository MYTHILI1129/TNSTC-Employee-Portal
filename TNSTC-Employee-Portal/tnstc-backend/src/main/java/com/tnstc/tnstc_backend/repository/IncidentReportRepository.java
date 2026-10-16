package com.tnstc.tnstc_backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.tnstc.tnstc_backend.entity.IncidentReport;

public interface IncidentReportRepository extends JpaRepository<IncidentReport, Integer> {

    List<IncidentReport> findByEmployeeId(String employeeId);

}