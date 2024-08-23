import { Component } from '@angular/core';
import { AddstudentComponent } from "../addstudent/addstudent.component";
import { ListstudentComponent } from "../liststudent/liststudent.component";

@Component({
  selector: 'app-studentcomp',
  standalone: true,
  imports: [AddstudentComponent, ListstudentComponent],
  templateUrl: './studentcomp.component.html',
  styleUrl: './studentcomp.component.css'
})
export class StudentcompComponent {

}
