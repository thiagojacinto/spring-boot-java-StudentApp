package com.springbootdb.apistudents.controller;

import java.util.Collection;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootdb.apistudents.dao.StudentRepositoryDao;
import com.springbootdb.apistudents.model.Student;

@RestController
@CrossOrigin(maxAge = 3600, origins = "*")
@RequestMapping(value = "/students")
public class StudentController {

	@Autowired
	private StudentRepositoryDao studentRepository;
	
	
	@GetMapping("/findall")
	public Collection<Student> getAllStudents() {
		return studentRepository.findAll();
	}
	
	@GetMapping("/findbyid/{id}")
	public Optional<Student> getStudentById(@PathVariable(value="id") UUID id) {
		return studentRepository.findById(id);
	}
	
	@PutMapping("/update/{id}")
	public void updateStudentInfo(
			@PathVariable(value="id") UUID id, 
			@RequestBody Student updatedInfo
			) throws Exception {
		
		// Verify if student exists
		if (studentRepository.existsById(id)) {
			
			Student oldInfo = studentRepository.getOne(id);
			oldInfo.setName(updatedInfo.getName());
			oldInfo.setCourse(updatedInfo.getCourse());
			studentRepository.flush();
		} else {
			throw new Exception("Not found");
		}
	}
	
	@PostMapping("/new")
	public Student insertStudent(@RequestBody Student student) {
		
		// Saves it inside repository
		return studentRepository.save(student);
	}
	
	@DeleteMapping("/remove/{id}")
	public void deleteStudentFromDB(@PathVariable(value = "id") UUID id) {
		studentRepository.deleteById(id);
	}
	
	
}
