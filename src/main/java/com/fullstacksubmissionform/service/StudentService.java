package com.fullstacksubmissionform.service;

import com.fullstacksubmissionform.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
