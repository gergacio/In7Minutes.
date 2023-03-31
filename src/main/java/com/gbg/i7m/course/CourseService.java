package com.gbg.i7m.course;

import com.gbg.i7m.course.exceptions.BadRequestException;
import com.gbg.i7m.course.exceptions.CourseNotFoundException;
import com.gbg.i7m.course.exceptions.UnauthorizedException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class CourseService {
    //Service layer encapsulates application logic.
    //interact with repository
    //we use dependency injection to add this class into controller
    private final CourseRepository courseRepository;
    //define methods
    public List<Course> getAllCourses() {return courseRepository.findAll();}

    public void addCourse(Course course) {
        //if name taken throw error
        Boolean existsName = courseRepository
                .selectExistsName(course.getName());
        if (existsName) {
            throw new BadRequestException(
                    "Name " + course.getName() + " taken");
        } else{

            throw new UnauthorizedException(
                    "You are not authorized to perform this operation.");
        }
//                TODO: Implement security
//        courseRepository.save(course);
        //use rest client to test APIs
    }
    public void deleteCourse(Long courseId) {
        if(!courseRepository.existsById(courseId)) {
            throw new CourseNotFoundException(
                    "Course with id " + courseId + " does not exists");
        } else{

            throw new UnauthorizedException(
                    "You are not authorized to perform this operation.");
        }
////        TODO: Implement security
//        courseRepository.deleteById(courseId);

    }
}
