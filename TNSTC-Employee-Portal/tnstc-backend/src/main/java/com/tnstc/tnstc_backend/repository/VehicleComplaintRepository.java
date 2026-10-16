package com.tnstc.tnstc_backend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.tnstc.tnstc_backend.entity.VehicleComplaint;

public interface VehicleComplaintRepository extends JpaRepository<VehicleComplaint, Integer> {

    List<VehicleComplaint> findByEmployeeId(String employeeId);

}