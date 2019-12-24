package com.springbootdb.apistudents.dao;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springbootdb.apistudents.model.Student;

public interface StudentRepositoryDao extends JpaRepository<Student, UUID> {

}
