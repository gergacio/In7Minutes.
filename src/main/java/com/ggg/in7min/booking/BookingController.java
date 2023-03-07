package com.ggg.in7min.booking;

import com.ggg.in7min.course.Course;
import com.ggg.in7min.course.CourseService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/bookings")
@AllArgsConstructor
public class BookingController {
    private final BookingService bookingService;
    @GetMapping
    public List<Booking> getAllBookings(){
//        throw new IllegalStateException("oops error");
        return bookingService.getAllBookings();
    }
    @PostMapping
    public void addBooking(@Valid @RequestBody Booking booking){
        //check if booking id taken
        bookingService.addBooking(booking);
    }
    @DeleteMapping(path = "{bookingId}")
    public void deleteCourse(@PathVariable("bookingId") Long bookingId){
        //check if booking exists
        bookingService.deleteBooking(bookingId);
    }
}
