package com.springproj.springBootProject.dao;

import java.util.Collection;

import com.springproj.springBootProject.entity.Student;

public interface StudentDao {

	Collection<Student> getAllStudents();

	Student getStudentById(int id);

	void removeStudentByid(int id);

	void updateStudent(Student st);

	void insertStudentToDB(Student st);

}