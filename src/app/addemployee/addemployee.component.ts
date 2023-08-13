import { CommonService } from '../common.service'; 
import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent  implements OnInit{
  alert:boolean = false;
  addEmployee=new FormGroup({
    name: new FormControl(''),
     Adress: new FormControl(''),
     email: new FormControl('')
  })

constructor(private mproject:CommonService){}
ngOnInit(): void {

}
craeteMproject(){
  // console.log(this.addRestaurent.value);
  this.mproject.addEmployee(this.addEmployee.value).subscribe((result)=>{
    this.alert = true;
    this.addEmployee.reset({});
    console.log("Get Data From Service", result)
  })
}
closeAlert(){
  this.alert = false;
}

}