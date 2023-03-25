package com.gbg.i7m.lesson;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Long> {
    //all we need to interact with our db
    // Repositories are used between the service layer and the model
    @Query("" +
            "SELECT CASE WHEN COUNT(l) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Lesson l " +
            "WHERE l.title = ?1"
    )
    Boolean selectExistsTitle(String title);

}
