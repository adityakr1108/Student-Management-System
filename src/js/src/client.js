const checkStatus = response => {
    if (response.ok) {
        return response;
    } else {
        return response.json().then(errorData => {
            let error = new Error(response.statusText);
            error.response = response;
            error.error = errorData.message || "An unexpected error occurred"; // Extract error message
            console.log("Error data from server:", errorData);
            return Promise.reject(error); // Pass the error to the caller
        });
    }
};

export const getAllStudents = () => fetch("/api/students")
        .then(checkStatus);

export const addNewStudent = (student) => fetch("/api/students", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
}).then(checkStatus);