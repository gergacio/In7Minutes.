package com.gbg.i7m.course;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.gbg.i7m.lesson.Lesson;
import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
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

    @JsonIgnoreProperties({"course"})
    @OneToMany(mappedBy = "course", fetch = FetchType.LAZY,cascade=CascadeType.REMOVE)
    private List<Lesson> lessons;

    public Course(String name, String description) {
        this.name = name;
        this.description = description;
        this.lessons = new ArrayList<>();
    }
}
