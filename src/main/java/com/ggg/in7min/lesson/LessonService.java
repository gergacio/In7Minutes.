package com.ggg.in7min.lesson;

import com.ggg.in7min.student.exception.BadRequestException;
import com.ggg.in7min.student.exception.StudentNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class LessonService {
    private final LessonRepository lessonRepository;
    //define methods
    public List<Lesson> getAllLessons() {return lessonRepository.findAll();}



    public void addLesson(Lesson lesson) {
        //if title is taken throw error
        Boolean existsTitle = lessonRepository
                .selectExistsTitle(lesson.getTitle());
        if (existsTitle) {
            throw new BadRequestException(
                    "Title " + lesson.getTitle() + " taken");
        }
        lessonRepository.save(lesson);
        //use rest client to test APIs
    }
    public void deleteStudent(Long lessonId) {
        if(!lessonRepository.existsById(lessonId)) {
            throw new StudentNotFoundException(
                    "Lesson with id " + lessonId + " does not exists");
        }
        lessonRepository.deleteById(lessonId);
    }

    public Optional<Lesson> getLesson(Long lessonId) {
        return lessonRepository.findById(lessonId);
    }
}
