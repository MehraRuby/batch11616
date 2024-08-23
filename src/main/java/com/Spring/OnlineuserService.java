package com.Spring;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service("userserv")
public class OnlineuserService 
{
		@Autowired
		OnlineuserRepo userrepo;
		
		
		public Onlineuser checkuser(String unm,String pwd)
		{
			Onlineuser u = userrepo.findAll().stream().filter(
					m->m.getUsername().equals(unm) &&
					m.getPassword().equals(pwd) 								
					).collect(Collectors.toList()).get(0);
			
			return u;		
		}
		
		
	
}

