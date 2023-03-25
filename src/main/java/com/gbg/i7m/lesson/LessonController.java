package com.gbg.i7m.lesson;




import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/lessons")
@AllArgsConstructor
public class LessonController {
    private final LessonService lessonService;

    @GetMapping(path = "{lessonId}")
    public Optional<Lesson> getLesson(@PathVariable("lessonId") Long lessonId){
//        throw new IllegalStateException("oops error");
        return lessonService.getLesson(lessonId);
    }

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
