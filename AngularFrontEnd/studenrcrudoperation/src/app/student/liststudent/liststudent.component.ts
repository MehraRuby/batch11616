import { Component, ElementRef, ViewChild } from '@angular/core';
import { CustomserviceService } from '../../../services/customservice.service';
import { Student } from '../../../Student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-liststudent',
  standalone: true,
  imports: [FormsModule,CommonModule,NgxPaginationModule],
  templateUrl: './liststudent.component.html',
  styleUrl: './liststudent.component.css'
})
export class ListstudentComponent {
  stname='';
  score:number=0;

  updaterec:Student | any



updatesave()
{

  var result = window.confirm("Do you want to update the record: ");
  if(result)
  {
    this.updaterec.score=this.score;
    this.customserv.updatecourse(this.updaterec).subscribe(res=>console.log(res),error=>console.log(error));
  }
  else{
    alert("Record is not update ! ")
  }

  (this.mod_2?.nativeElement as HTMLElement).style.display="none";
  document.body.classList.remove('model-open');



}


@ViewChild("mod_2",{static:false}) mod_2?:ElementRef;

updateclose()
  {
    (this.mod_2?.nativeElement as HTMLElement).style.display="none"
     document.body.classList.remove('model-open');
  }


deleteprdt(id:number)
{
  var result = window.confirm("Do you want to delete the record: ");
  if(result)
  {
    this.customserv.deletecourse(id).subscribe(response=>{

    console.log(response)

    },error=>console.log(error))
  }
  else{
    alert("Record is not deleted ! ")
  }
}

updateprdtid(a :Student) {

this.stname=a.stname;
this.score=a.score;



this.updaterec=a;
console.log(this.updaterec)

}

  courselist :Student |any

  count=5
  p=1;


  constructor(private customserv:CustomserviceService)
  {
    this.customserv.listcourses().subscribe(response=>
      {
         this.customserv.courseobj = response
         console.log(this.customserv.courseobj)
      })

  }

  ngDoCheck()
  {
  this.courselist = this.customserv.courseobj;
  }



}
