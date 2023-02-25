package com.ggg.in7min.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/students")
public class StudentController {
    @GetMapping
    public List<Student> getAllStudents(){
        List<Student> students = Arrays.asList(
                new Student(1l, "Georgi", "ggeorgeuk@gamil.com", Gender.MALE),
                new Student(2l, "Alex", "alex@gamil.com", Gender.FEMALE)

        );
        return students;
    }
}
