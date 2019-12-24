package com.springbootdb.apistudents.model;

import java.io.Serializable;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

@Entity
@Table(name = "students_v2")
public class Student implements Serializable {
	
	// ATTRIBUTES
	
	private static final long serialVersionUID = 1L;
	
	@NotNull(message = "Please enter id")
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	@Type(type = "pg-uuid") // only works for postgres
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(name = "student_id", columnDefinition = "uuid")
	private UUID id;
	
	@NotNull
	@Column(name = "name")
	private String name;
	
	@NotNull
	@Column(name = "course")
	private String course;
	
	// CONSTRUCTOR
	
	public Student() {
		// TODO Auto-generated constructor stub
	}
	
	public Student(String name, String course) {
		// TODO Auto-generated constructor stub
		this.name = name;
		this.course = course;
		this.id = UUID.randomUUID();
	}
	
	// GETTERS AND SETTERS

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}
	
}
