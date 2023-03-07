package com.ggg.in7min.booking;

import com.ggg.in7min.course.Course;
import com.ggg.in7min.course.CourseRepository;
import com.ggg.in7min.student.exception.BadRequestException;
import com.ggg.in7min.student.exception.StudentNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class BookingService {
    //Service layer encapsulates application logic.
    //interact with repository
    //we use dependency injection to add this class into controller
    private final BookingRepository bookingRepository;
    //define methods
    public List<Booking> getAllBookings() {return bookingRepository.findAll();}

    public void addBooking(Booking booking) {
        //if id taken throw error
        Boolean existsId = bookingRepository
                .selectExistsId(booking.getId());
        if (existsId) {
            throw new BadRequestException(
                    "Id " + booking.getId() + " taken");
        }
        bookingRepository.save(booking);
        //use rest client to test APIs
    }
    public void deleteBooking(Long bookingId) {
        if(!bookingRepository.existsById(bookingId)) {
            throw new StudentNotFoundException(
                    "Booking with id " + bookingId + " does not exists");
        }
        bookingRepository.deleteById(bookingId);
    }

}
