package com.springproj.springBootProject.entity;

public class Student {
	
	// ATTRIBUTES
	private int id;
	private String name;
	private String course;
	
	// CONSTRUCTOR
	public Student() { // Empty
		// TODO Auto-generated constructor stub
	} 
	
	public Student(int id, String n, String c) {
		this.id = id;
		this.name = n;
		this.course = c;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
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
