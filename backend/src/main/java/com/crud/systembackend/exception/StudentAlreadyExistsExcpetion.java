package com.crud.systembackend.exception;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

public class StudentAlreadyExistsExcpetion extends RuntimeException {
    public StudentAlreadyExistsExcpetion(String message) {
        super(message);
    }
}
