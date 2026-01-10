package com.springPractice.demo.Student;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class StudentDataAccessService {
    
    private final JdbcTemplate jdbcTemplate;
    @Autowired
    public StudentDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<Student> selectAllStudents() {
        // This method will interact with the database to fetch all students
        String sql = "" + 
                    "SELECT " +
                    "students_id, " +
                    "first_name, " +
                    "last_name, " +
                    "email, " +
                    "gender " +
                    "FROM student";
        return jdbcTemplate.query(sql, mapStudentFromDb());
    }
    boolean addNewStudent(UUID id, Student student){
        String sql = "" +
                    "INSERT " +
                    "INTO student (students_id, first_name, last_name, email, gender) " +
    }

    private RowMapper<Student> mapStudentFromDb() {
        return (resultSet, i) -> {
            String studentIDStr =  resultSet.getString("students_id");
            UUID studentID = UUID.fromString(studentIDStr);
            String firstName = resultSet.getString("first_name");
            String lastName = resultSet.getString("last_name");
            String email = resultSet.getString("email");
            String genderStr = resultSet.getString("gender").toUpperCase();
            Student.Gender gender = Student.Gender.valueOf(genderStr);
            return new Student(
                        studentID,
                        firstName,
                        lastName,
                        email,
                        gender
            );
        };
    }
}
            
