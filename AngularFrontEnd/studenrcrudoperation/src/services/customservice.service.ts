import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Student } from '../Student';


@Injectable({
  providedIn: 'root'
})
export class CustomserviceService
{

  public courseobj:Student |any

  constructor(private http:HttpClient) { }

  public checkuser(data:any)
  {
      return this.http.post("http://localhost:8080/user/check",data)
  }

public addcourse(data)
{
  return this.http.post("http://localhost:8080/add",data)
}

public listcourses():Observable<Student[]>
{

  return this.http.get<Student[]>("http://localhost:8080/list")
}



public updatecourse(a:Student)
{
  return this.http.put("http://localhost:8080/update",a)
}

public deletecourse(id:number)
{
  return this.http.delete("http://localhost:8080/delete/"+id)
}



}
