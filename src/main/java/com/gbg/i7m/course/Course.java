package com.gbg.i7m.course;

import lombok.*;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table

//@Data
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
    @Column(nullable = false, unique = true)
    private String name;
    @NotBlank
    @Column(nullable = false)
    private String description;

    public Course(String name, String description) {
        this.name = name;
        this.description = description;
    }
}
