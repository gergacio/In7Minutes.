package com.ggg.in7min.booking;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    @Query("" +
            "SELECT CASE WHEN COUNT(b) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Booking b " +
            "WHERE b.id = ?1"
    )
    Boolean selectExistsId(Long id);
}
