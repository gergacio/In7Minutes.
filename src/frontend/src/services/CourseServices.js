const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllCourses = () =>
    fetch("api/v1/courses")
        .then(checkStatus);

export const addNewCourse = course =>
    fetch("api/v1/courses", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(course)
        }
    ).then(checkStatus)

export const deleteCourse = courseId =>
    fetch(`api/v1/courses/${courseId}`, {
        method: 'DELETE'
    }).then(checkStatus);