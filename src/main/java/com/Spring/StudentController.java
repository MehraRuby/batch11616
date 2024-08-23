package com.Spring;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StudentController 
{
	@Autowired
	StudentService serv;
	
	@GetMapping("list")
	@CrossOrigin(origins={"http:/localhost:4200/","http:/localhost:3000/"})
	public List<Student> getallrecords()
	{
		return serv.listallrecords();
	}
	
	
	
	@GetMapping("find/{id}")  // {} is the url parameter and fetched by @PathVariable annotation
	@CrossOrigin(origins={"http:/localhost:4200/","http:/localhost:3000/"})
	public Student findRecord(@PathVariable("id") int d)  // @PathVariable annotation will fetch url parameter "id" from the URL
	{
		return serv.search(d);
	}
	
	
	
	@PostMapping("add")
	@CrossOrigin(origins={"http:/localhost:4200/","http:/localhost:3000/"})
	public void addcourse(@RequestPart("data") Student c,@RequestPart("pic")  MultipartFile pic)
	{
		try {
			InputStream I = pic.getInputStream();
			byte arr[] = I.readAllBytes();
						
				c.setPic(arr);	
									
		} 
		catch (IOException e) {			
			e.printStackTrace();
		}
		serv.add(c);
	}
	
	@PostMapping("addstud")
	@CrossOrigin(origins={"http:/localhost:3000/"})
	public void addcourse(@RequestBody Student c)
	{																					
		serv.add(c);
	}
	
	
	
	@PutMapping("update")
	@CrossOrigin(origins={"http:/localhost:4200/","http:/localhost:3000/"})
	public Student update(@RequestBody Student s)
	{
		return serv.update(s.getStid(), s.getScore());
	}
	
	
	
	@DeleteMapping("delete/{id}")
	@CrossOrigin(origins={"http:/localhost:4200/","http:/localhost:3000/"})
	public String deleterecord(@PathVariable("id")int id)
	{
		return serv.delete(id);
	}
		
}
