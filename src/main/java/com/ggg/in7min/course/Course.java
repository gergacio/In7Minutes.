package com.ggg.in7min.course;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.ggg.in7min.booking.Booking;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Course {
    @Id
    @SequenceGenerator(
            name = "course_sequence",
            sequenceName = "course_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "course_sequence",
            strategy = GenerationType.SEQUENCE)
    private Long id;
    @NotBlank
    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String description;

    @JsonIgnoreProperties({"course"})
    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY,cascade=CascadeType.REMOVE)
    private List<Booking> bookings;

    public Course(String name, String description) {
        this.name = name;
        this.description = description;
        this.bookings = new ArrayList<>();
    }
}
