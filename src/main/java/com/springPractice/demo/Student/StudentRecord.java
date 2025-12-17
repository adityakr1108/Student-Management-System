package com.springPractice.demo.Student;

import java.util.UUID;

public class StudentRecord {
    private final UUID id;
    private final String firstName;
    private final String lastname;
    private final String  email;
    private final Gender gender;
    public StudentRecord(UUID id, String firstName, String lastname, String email, Gender gender) {
        this.id = id;
        this.firstName = firstName;
        this.lastname = lastname;
        this.email = email;
        this.gender = gender;  
    }
    public UUID getId() {
        return id;
    }
    public String getFirstName() {
        return firstName;
    }
    public String getLastname() {
        return lastname;
    }
    public String getEmail() {
        return email;
    }
    public Gender getGender () {
        return gender;
    }

    
    enum Gender {
        MALE, FEMALE, OTHER;
    }




}
