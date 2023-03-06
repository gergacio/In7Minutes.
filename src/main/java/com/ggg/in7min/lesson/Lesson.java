package com.ggg.in7min.lesson;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.Length;
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
//    @Column(name = "duration")
//    private int duration;


    public Lesson(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
