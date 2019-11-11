package com.springproj.springBootProject.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springproj.springBootProject.dao.StudentDao;
import com.springproj.springBootProject.entity.Student;

@Service
public class StudentService {
	
	@Autowired
	private StudentDao studentDao;
	
	public Collection<Student> getAllStudents() {
		return this.studentDao.getAllStudents();
	}
	
	public Student getStudentById(int id) {
		// Returns only one student, matching the id
		return this.studentDao.getStudentById(id);
	}

	public void removeStudentByid(int id) {
		// TODO Auto-generated method stub
		this.studentDao.removeStudentByid(id);
	}
	
	public void updateStudent(Student st) {
		this.studentDao.updateStudent(st);
	}

	public void insertStudent(Student st) {
		// TODO Auto-generated method stub
		this.studentDao.insertStudentToDB(st);
	}
}
