package com.springPractice.demo.Student;
import java.util.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("students")
public class studentController {
    @GetMapping
   List<StudentRecord> getAllStudents (){
    return List.of(
        new StudentRecord(UUID .randomUUID(), "Aditya", "Kumar", "aditya.kumar@example.com", StudentRecord.Gender.MALE),
        new StudentRecord(UUID .randomUUID(), "Priya", "Sharma", "priya.123@gmail.com", StudentRecord.Gender.FEMALE)
    );
   }

   @GetMapping("getByName")
   

}
