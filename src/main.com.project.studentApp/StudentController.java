package com.springproj.springBootProject.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springproj.springBootProject.entity.Student;
import com.springproj.springBootProject.service.StudentService;

@RestController
@RequestMapping("/students")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@RequestMapping(method = RequestMethod.GET)
	public Collection<Student> getAllStudents() {
		return studentService.getAllStudents();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Student getStudentById(@PathVariable("id") int id) {
		// Returns only one student, matching the id
		return this.studentService.getStudentById(id);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteStudentById(@PathVariable("id") int id) {
		this.studentService.removeStudentByid(id);
	}
	
	@RequestMapping( method = RequestMethod.PUT)
	public void updateStudent(@RequestBody Student st) {
		this.studentService.updateStudent(st);
	}
	
	@RequestMapping( method = RequestMethod.POST)
	public void insertStudent(@RequestBody Student st) {
		this.studentService.insertStudent(st);
	}
	
}
