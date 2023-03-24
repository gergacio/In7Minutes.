//const checkStatus = response => {
//    if (response.ok) {
//        return response;
//    }
//    // convert non-2xx HTTP responses into errors:
//    const error = new Error(response.statusText);
//    error.response = response;
//    return Promise.reject(error);
//}
//
//export const getAllBookings = () =>
//    fetch("api/v1/bookings")
//        .then(checkStatus);
//
//export const addNewBooking = booking =>
//    fetch("api/v1/bookings", {
//            headers: {
//                'Content-Type': 'application/json'
//            },
//            method: 'POST',
//            body: JSON.stringify(booking)
//        }
//    ).then(checkStatus)
//
//export const deleteBooking = bookingId =>
//    fetch(`api/v1/bookings/${bookingId}`, {
//        method: 'DELETE'
//    }).then(checkStatus);