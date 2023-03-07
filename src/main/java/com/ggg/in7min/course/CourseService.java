package com.ggg.in7min.course;
import com.ggg.in7min.student.exception.BadRequestException;
import com.ggg.in7min.student.exception.StudentNotFoundException;
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
        }
        courseRepository.save(course);
        //use rest client to test APIs
    }
    public void deleteCourse(Long courseId) {
        if(!courseRepository.existsById(courseId)) {
            throw new StudentNotFoundException(
                    "Course with id " + courseId + " does not exists");
        }
        courseRepository.deleteById(courseId);
    }
}
