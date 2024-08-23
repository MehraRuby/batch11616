package com.Spring;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("serv")
public class StudentService 
{
	@Autowired
	StudentRepo strepo;
	
	
	public void add(Student s)
	{
		strepo.save(s);
		
	}
	
	
	public List<Student> listallrecords()
	{
	
		return strepo.findAll();
	}
	
	
	public Student search(int id)
	{	
		return strepo.findById(id).get();
	}
	
	public Student update(int id,int score)
	{
		Student s = strepo.findById(id).get();
		s.setScore(score);
		strepo.saveAndFlush(s);
		return s;
		
	}
	
	
	public String delete(int id)
	{
		strepo.deleteById(id);
		return "Deleted !";
	}
	
	
	

}
