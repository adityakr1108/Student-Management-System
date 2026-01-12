package com.springPractice.demo.Student;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

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
    @ResponseStatus(HttpStatus.NOT_IMPLEMENTED)
    List<Student> getAllStudents() {
        throw new UnsupportedOperationException("API not implemented yet");
        // return studentService.getAllStudents();
    }
    @PostMapping
    public void addNewStudent(@RequestBody Student student) {
        studentService.addNewStudent(null, student);
    }

}
