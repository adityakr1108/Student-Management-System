
export const getAllStudents = () => fetch("/api/students");

export const addNewStudent = (student) => fetch("/api/students", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
});