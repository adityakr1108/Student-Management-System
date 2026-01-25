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

    int checkEmailExists(String email){
        String sql = "" +
                    "SELECT COUNT(*) " +
                    "FROM student " +
                    "WHERE email = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, email);
        return count != null ? count : 0;
    }

    int insertStudent(UUID id, Student student){
        String sql = "" +
                    "INSERT INTO student ( " +
                    " students_id," +
                    " first_name," +
                    " last_name," +
                    " email," +
                    " gender)" +
                    "VALUES (?, ?, ?, ?, ?)";
            int rowsAffected = jdbcTemplate.update(sql,
                id,
                student.getFirstName(),
                student.getLastName(),
                student.getEmail(),
                student.getGender().name().toUpperCase()
            );
            if(rowsAffected > 0){
                return rowsAffected;
            } else {
                return 0;
            }
    }

    public void deleteStudentById(UUID id) {
        String sql = "DELETE FROM student WHERE students_id = ?";
        jdbcTemplate.update(sql, id);
    }

    public boolean existsById(UUID id) {
        String sql = "SELECT COUNT(*) FROM student WHERE students_id = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, id);
        return count != null && count > 0;
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

