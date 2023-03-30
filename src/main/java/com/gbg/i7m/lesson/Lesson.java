package com.gbg.i7m.lesson;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.gbg.i7m.course.Course;
import lombok.*;
import org.hibernate.Length;
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
public class Lesson {
    @Id
    @SequenceGenerator(
            name = "student_sequence",
            sequenceName = "student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "student_sequence",
            strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String title;
//    @Column(name = "learning_objective")
//    private String learningObjective;
//    @Column(name = "learning_goal")
//    private String learningGoal;
    @Column(name = "content",length = Length.LOB_DEFAULT)
    private String content;
    @ManyToOne
    @JsonIgnoreProperties({"lessons"})
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    public Lesson(String title, String content, Course course) {
        this.title = title;
//        this.learningObjective = learningObjective;
//        this.learningGoal = learningGoal;
        this.content = content;
        this.course = course;
    }
}

