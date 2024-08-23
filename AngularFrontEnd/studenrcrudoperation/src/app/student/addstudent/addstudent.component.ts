import { Component } from '@angular/core';
import { CustomserviceService } from '../../../services/customservice.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-addstudent',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent {


stname:any
score:any
pic:any

selectedFile:File=null



constructor(private customserv:CustomserviceService){

}


addnewsave() {

  let data = {
    stname :this.stname,
    score:this.score,
    role:'admin'
  }

  const formData = new FormData();

  formData.append('data',new Blob([JSON.stringify(data)],{ type: "application/json"}));
  formData.append('pic', this.selectedFile);

this.customserv.addcourse(formData).subscribe(response=>
{
    console.log("Added !")
    this.customserv.listcourses().subscribe(response=>
       {
          this.customserv.courseobj = response

          console.log(this.customserv.courseobj)
      })
}

)


}

onFileSelected($event: any) {
  this.selectedFile = (event.target as HTMLInputElement).files[0];
}

}
