package com.ggg.in7min.course;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/courses")
@AllArgsConstructor
public class CourseController {
    private final CourseService courseService;
    @GetMapping
    public List<Course> getAllCourses(){
//        throw new IllegalStateException("oops error");
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
