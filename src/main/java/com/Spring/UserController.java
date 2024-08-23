package com.Spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@RestController
@RequestMapping("user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController 
{

	@Autowired
	OnlineuserService userserv;
	
	@PostMapping("check")
	@CrossOrigin(origins={"http:/localhost:4200/","http:/localhost:3000/"})
	public boolean checkUser(@RequestBody Onlineuser u)
	{
		Onlineuser z = userserv.checkuser(u.getUsername(), u.getPassword());
		if(z!=null)return true;
		return false;
	}
	
	
	
	
	
	
	
	
}
