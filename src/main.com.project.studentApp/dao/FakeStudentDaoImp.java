package com.springproj.springBootProject.dao;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.springproj.springBootProject.entity.Student;

@SuppressWarnings("serial")
@Repository
public class FakeStudentDaoImp implements StudentDao {

	private static Map<Integer, Student> studentsMap;
	
	static {
		
		studentsMap = new HashMap<Integer, Student>(){
			
			{
				put(1,  new Student(1, "Thiago", "Engineering"));
				put(2,  new Student(2, "Victor", "Business"));
				put(3,  new Student(3, "Elisabete", "Finance"));
			}
		};
	}
	
	@Override
	public Collection<Student> getAllStudents() {
		// Returns all the students from the map
		return FakeStudentDaoImp.studentsMap.values();
	}
	
	@Override
	public Student getStudentById(int id) {
		// Returns only one student, matching the id
		return FakeStudentDaoImp.studentsMap.get(id);
	}

	@Override
	public void removeStudentByid(int id) {
		// TODO Auto-generated method stub
		FakeStudentDaoImp.studentsMap.remove(id);
	}
	
	@Override
	public void updateStudent(Student st) {
		// Retrieve from map the same student id
		Student s = studentsMap.get(st.getId());
		// Set its course
		s.setCourse(st.getCourse());
		// Set its name
		s.setName(st.getName());
		// Then put into the map
		studentsMap.put(st.getId(), st);
	}

	@Override
	public void insertStudentToDB(Student st) {
		// TODO Auto-generated method stub
		FakeStudentDaoImp.studentsMap.put(st.getId(), st);
	}
	
}
