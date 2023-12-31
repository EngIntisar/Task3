import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-redister',
  templateUrl: './redister.component.html',
  styleUrls: ['./redister.component.css']
})
export class RedisterComponent implements OnInit{
  alert:boolean = false;
  createUser= new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto:CommonService) { }


  ngOnInit(): void {
  }
  regUser(){
    console.log(this.createUser.value);
    this.resto.createUser(this.createUser.value).subscribe((result)=>{
      console.log(result,"data created sucessfull")
    })
  }

}
