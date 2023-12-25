package com.crud.systembackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotEmpty( message = "user first name can not be empty")
    @Size(min = 2, message = "user name should have at least 2 characters")
    private String firstName;

    private String lastName;

    @NotEmpty( message = "user email can not be empty")
    @Email
    private String email;

    @NotEmpty( message = "user address can not be empty")
    private String address;

    @NotNull(message = "Phone number can not be null")
    @Min(value = 1, message = "Phone number should be a positive integer")
    private Integer phone;

}
