package com.Spring;

import jakarta.persistence.*;

@Entity
@Table(name="student")
public class Student 
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int stid;
	
	@Column(name="stname")
	private String stname;
	
	@Column(name="score")
	private int score;
	
	
	@Column(name="pic")
	private byte pic[];
	
		
	public byte[] getPic() {
		return pic;
	}
	public void setPic(byte[] pic) {
		this.pic = pic;
	}
	public int getStid() {
		return stid;
	}
	public void setStid(int stid) {
		this.stid = stid;
	}
	public String getStname() {
		return stname;
	}
	public void setStname(String stname) {
		this.stname = stname;
	}
	public int getScore() 
	{
		return score;
	}
	public void setScore(int score) 
	{
		this.score = score;
	}
		
}
