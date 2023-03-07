package com.ggg.in7min.booking;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.ggg.in7min.course.Course;
import com.ggg.in7min.student.Student;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Booking {
    @Id
    @SequenceGenerator(
            name = "booking_sequence",
            sequenceName = "booking_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "booking_sequence",
            strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String date;

    @ManyToOne
    @JsonIgnoreProperties({"bookings"})
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @ManyToOne
    @JsonIgnoreProperties({"bookings"})
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    public Booking(String date, Course course, Long studentId) {
        this.date = date;
        this.course = course;
        this.student = student;
    }

}
