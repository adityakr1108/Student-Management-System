package com.springPractice.demo.Student;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.springPractice.demo.exception.ApiRequestException;

@RestController
@RequestMapping("students")
@CrossOrigin
public class studentController {
    private final StudentService studentService;

    @Autowired
    public studentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    // @ResponseStatus(HttpStatus.NOT_IMPLEMENTED)
    List<Student> getAllStudents() {
        return new ArrayList<>(studentService.getAllStudents());
        // throw new ApiRequestException("Api not implemented yet");
    }
    @PostMapping
    public void addNewStudent(@RequestBody Student student) {
        if (student.getFirstName() == null || student.getFirstName().trim().isEmpty() ||
            student.getLastName() == null || student.getLastName().trim().isEmpty() ||
            student.getEmail() == null || student.getEmail().trim().isEmpty() ||
            student.getGender() == null) {
            throw new ApiRequestException("All fields (firstName, lastName, email, gender) must be provided and non-empty");
        }

        if (studentService.isEmailTaken(student.getEmail())) {
            throw new ApiRequestException("Email " + student.getEmail() + " already exists");
        }

        studentService.addNewStudent(null, student);
    }

    

}
