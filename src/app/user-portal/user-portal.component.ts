import { Component } from '@angular/core';
import { UserClass } from '../user-class';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent {

  user:UserClass=new UserClass();
  message:any;
  uname:any;
  password:any;

  constructor(private service:ServiceService,public router:Router) {

  }
 
 
 public loginUserNow(){
      if(!this.uname){
       alert('Please provide username');
       return;
     }
     if(!this.password){
       alert('Please provide password');
       return;
     }
   let response=this.service.userLogin(this.uname);
   response.subscribe((data:any)=>this.user=data);
 
   if(this.user.password==this.password){
 
     this.router.navigate(['/user-dashboard']);
 
   }else{
 
     this.message="Wrong username or password";
   }
 
   
 
 
 }
 
 }


