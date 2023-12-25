package com.crud.systembackend.service;

import com.crud.systembackend.model.Student;

import java.util.List;

public interface StudentService {

    Student saveStudent(Student student);

    Student updateStudent(Student student, Long id);

    List<Student> getAllStudents();

    Student getById(Long id);

     String deleteById(Long id);

}
