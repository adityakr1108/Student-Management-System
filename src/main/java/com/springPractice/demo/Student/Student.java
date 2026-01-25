package com.springPractice.demo.Student;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.annotation.Nonnull;

public class Student {
    private final UUID id;
    @Nonnull
    private final String firstName;
    @Nonnull
    private final String lastName;
    @Nonnull
    private final String  email;
    @Nonnull
    private final Gender gender;
    public Student(@JsonProperty("id") UUID id, @JsonProperty("firstName") String firstName, @JsonProperty("lastName") String lastName, @JsonProperty("email") String email, @JsonProperty("gender") Gender gender) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;  
    }
    public UUID getId() {
        return id;
    }
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public String toString(){
        return "Student{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", gender=" + gender +
                '}';
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
