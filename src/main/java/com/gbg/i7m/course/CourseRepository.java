package com.gbg.i7m.course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    //all we need to interact with our db
    // Repositories are used between the service layer and the model
    @Query("" +
            "SELECT CASE WHEN COUNT(c) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Course c " +
            "WHERE c.name = ?1"
    )
    Boolean selectExistsName(String name);
}
