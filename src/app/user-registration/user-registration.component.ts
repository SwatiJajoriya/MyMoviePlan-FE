import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{
  constructor(public service:ServiceService, private router: Router){}
  user:UserClass=new UserClass();
  uname:any;
  password:any;
  name:any;
  email:any;
  mobileNo:any;
  address:any;
  message:any;
  ngOnInit(): void {
   this.addUser();
  }
  addUser(){
    let response=this.service.addUser(this.user);
    response.subscribe((data:any)=>this.user=data);
   
    if(this.user.uname!==null){
      this.message="Welcome to NMS Cinemas";
    }
    else{
      this.message="Check";
    }
    
  }
  } {

}
