const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllLessons = () =>
    fetch("api/v1/lessons")
        .then(checkStatus);

export const addNewLesson = lesson =>
    fetch("api/v1/lessons", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(lesson)
        }
    ).then(checkStatus)

export const deleteLesson = lessonId =>
    fetch(`api/v1/lessons/${lessonId}`, {
        method: 'DELETE'
    }).then(checkStatus);