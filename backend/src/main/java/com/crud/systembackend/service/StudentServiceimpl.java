package com.crud.systembackend.service;

import com.crud.systembackend.exception.StudentAlreadyExistsExcpetion;
import com.crud.systembackend.exception.StudentNotFoundException;
import com.crud.systembackend.model.Student;
import com.crud.systembackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class StudentServiceimpl implements StudentService{

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        if (studentAlreadyExists(student.getEmail())){
            throw new StudentAlreadyExistsExcpetion("Student Already Exists by this email: " + student.getEmail());
        }
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student updateStudent(Student student, Long id) {
        return studentRepository.findById(id).map(student1 -> {
            student1.setFirstName(student.getFirstName());
            student1.setLastName(student.getLastName());
            student1.setEmail(student.getEmail());
            student1.setAddress(student.getAddress());
            student1.setPhone(student.getPhone());
            return studentRepository.save(student1);
        }).orElseThrow(() -> new StudentNotFoundException("Sorry, Student could not be found"));
    }

    @Override
    public Student getById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException("Sorry, Student could not be found"));
    }

    @Override
    public String deleteById(Long id) {
        if (!studentRepository.existsById(id)){
            throw new StudentNotFoundException("Sorry, Student could not be found");
        }
        studentRepository.deleteById(id);
        return "Successfully Deleted!";
    }

    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }

}
