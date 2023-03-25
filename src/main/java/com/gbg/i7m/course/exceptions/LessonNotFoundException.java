package com.gbg.i7m.course.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class LessonNotFoundException extends RuntimeException{

    public LessonNotFoundException(String msg) {
        super(msg);
    }
}
