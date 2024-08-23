import { Routes } from '@angular/router';
import { UserloginComponent } from './login/userlogin/userlogin.component';
import { StudentcompComponent } from './student/studentcomp/studentcomp.component';

export const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:UserloginComponent},
  {path:"student",component:StudentcompComponent},

];
