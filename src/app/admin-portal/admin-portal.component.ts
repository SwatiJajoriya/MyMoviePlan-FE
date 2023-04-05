import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit  {
  admin:Admin=new Admin();
  message:any;
  username:any;
  password:any;

  constructor(private service:ServiceService,public router:Router) { }

  ngOnInit(): void {
    
  }

  loginadNow(){

    if(!this.username){
      alert('Please provide username');
      return;
    }
    if(!this.password){
      alert('Please provide password');
      return;
    }
    let response=this.service.adminLogin(this.username);
    response.subscribe((data:any)=>this.admin=data);
   
    if(this.username===this.password){

      this.router.navigate(['\admin-dashboard']);

    }else{

      this.message="Wrong username or password";
    }

    


  }

    
  
}
