package com.gbg.i7m.course;

import lombok.AllArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

//gives ability to express resources - end point that client can consume
@RestController
@RequestMapping(path = "api/v1/courses") //changing url
@AllArgsConstructor
public class CourseController {
    private final CourseService courseService;
    //create some api endpoints - expose as endpoits add get mapping
    @GetMapping
    public List<Course> getAllStudents(){
//                throw new IllegalStateException("oops error");
//        return Arrays.asList(
//                new Course(1L, "Data Structures local", "Data Structures description local"),
//                new Course(2L, "Algorithms local", "Algorithms description local")
//        );
        return courseService.getAllCourses();
    }
    @PostMapping
    public void addCourse(@Valid @RequestBody Course course){
        //check if course name taken
        courseService.addCourse(course);
    }
    @DeleteMapping(path = "{courseId}")
    public void deleteCourse(@PathVariable("courseId") Long courseId){
        //check if course exists
        courseService.deleteCourse(courseId);
    }
}
