package com.crud.systembackend.controller;

import com.crud.systembackend.model.Student;
import com.crud.systembackend.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//(origins = "http://localhost:3000")
@CrossOrigin
@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public ResponseEntity<Student> add(@Valid @RequestBody Student student){
        Student savedStudent = studentService.saveStudent(student);
        return new ResponseEntity<Student>(savedStudent, HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public List<Student> getAll(){
        return studentService.getAllStudents();
    }

    @PutMapping("/update/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable Long id){
        return studentService.updateStudent(student, id);
    }

    @GetMapping("/byId/{id}")
    public Student getById(@PathVariable Long id){
        return studentService.getById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id) {
        return studentService.deleteById(id);
    }
}
