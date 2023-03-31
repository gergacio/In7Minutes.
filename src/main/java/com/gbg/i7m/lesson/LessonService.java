package com.gbg.i7m.lesson;

import com.gbg.i7m.course.exceptions.BadRequestException;
import com.gbg.i7m.course.exceptions.LessonNotFoundException;
import com.gbg.i7m.course.exceptions.UnauthorizedException;
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
        }else{

            throw new UnauthorizedException(
                    "You are not authorized to perform this operation.");
        }
//        lessonRepository.save(lesson);
        //use rest client to test APIs
    }
    public void deleteStudent(Long lessonId) {
        if(!lessonRepository.existsById(lessonId)) {
            throw new LessonNotFoundException(
                    "Lesson with id " + lessonId + " does not exists");
        } else{
            throw new UnauthorizedException(
                    "You are not authorized to perform this operation.");
        }
//        lessonRepository.deleteById(lessonId);
    }

    public Optional<Lesson> getLesson(Long lessonId) {
        return lessonRepository.findById(lessonId);
    }
}

