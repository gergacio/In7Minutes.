package com.ggg.in7min.student;

import com.ggg.in7min.student.exception.BadRequestException;
import com.ggg.in7min.student.exception.StudentNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class StudentService {
    //Service layer encapsulates application logic.
    //interact with repository
    //we use dependency injection to add this class into controller
    private final StudentRepository studentRepository;
    //define methods
    public List<Student> getAllStudents() {return studentRepository.findAll();}

    public void addStudent(Student student) {
        //if email is taken throw error
        Boolean existsEmail = studentRepository
                .selectExistsEmail(student.getEmail());
        if (existsEmail) {
            throw new BadRequestException(
                    "Email " + student.getEmail() + " taken");
        }
        studentRepository.save(student);
        //use rest client to test APIs
    }
    public void deleteStudent(Long studentId) {
        if(!studentRepository.existsById(studentId)) {
            throw new StudentNotFoundException(
                    "Student with id " + studentId + " does not exists");
        }
        studentRepository.deleteById(studentId);
    }
}
