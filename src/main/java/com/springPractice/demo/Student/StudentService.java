package com.springPractice.demo.Student;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class StudentService {
    private final StudentDataAccessService studentDataAccessService;
    
    @Autowired
    public StudentService(StudentDataAccessService studentDataAccessService) {
        this.studentDataAccessService = studentDataAccessService;
    }

    public List<Student> getAllStudents() {
        return studentDataAccessService.selectAllStudents();
    }
    public void addNewStudent(UUID id,Student student){
        UUID newId = Optional.ofNullable(id).orElse(UUID.randomUUID());
        if(studentDataAccessService.insertStudent(newId, student) > 0){
            System.out.println("Student added successfully: " + student);
        } else {
            System.out.println("Failed to add student: " + student);
        }
    }
}
