import { Component } from '@angular/core';
import { CustomserviceService } from '../../../services/customservice.service';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userlogin',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {

  title="Sign In"
tempform = {userid:'',username:'',password:'',roles:'admin'}
result:any

constructor(private customserv: CustomserviceService,private route:Router){}


onSubmit()
{
  let data = {
            userid:0,
            username:this.tempform.username,
            password:this.tempform.password,
            roles:'admin'
          }

          console.log(data)


         this.customserv.checkuser(data).subscribe(
              response =>{ console.log(response)
                this.result=response;
                console.log(this.result)

                 this.route.navigate(["/student"])
              },
              error=> console.log(error)
          )

}

}
