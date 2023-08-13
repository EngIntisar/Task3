import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  alert:boolean = false;
  email:any;
  password:any;
  constructor(private resto:CommonService, private router:Router) { }

  ngOnInit(): void {
    
    }
    logIn(){
    if(this.email == "admin@gmail.com" && this.password =="Admin@123"){
      this.router.navigate(["./employee-list"]);
    }
    else{
      alert("Please Enter Valid Details");
    }
    }
}
