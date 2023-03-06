package com.ggg.in7min.lesson;

import com.ggg.in7min.student.Student;
import com.ggg.in7min.student.StudentService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/lessons")
@AllArgsConstructor
public class LessonController {
    private final LessonService lessonService;
    @GetMapping
    public List<Lesson> getAllLessons(){
//        throw new IllegalStateException("oops error");
        return lessonService.getAllLessons();
    }
    @PostMapping
    public void addLesson(@Valid @RequestBody Lesson lesson){
        //check if title is taken
        lessonService.addLesson(lesson);
    }
    @DeleteMapping(path = "{lessonId}")
    public void deleteLesson(@PathVariable("lessonId") Long lessonId){
        //check if lesson exists
        lessonService.deleteStudent(lessonId);
    }
}
