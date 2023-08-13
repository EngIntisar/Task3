import { Component,OnInit } from '@angular/core';
import { CommonService } from '../common.service'; 

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 alert:boolean= false;
public collection:any= [];
  constructor(private commonService:CommonService) { }


 ngOnInit():void
 {this.commonService.getRestoList().subscribe((result)=>{
   this.collection=result;
   console.log(this.collection)
 });
 }

 deleteResto(resto:any){
  this.collection.splice(resto.id,-1)
  this.commonService.deleteResto(resto).subscribe((result)=>{
    console.log("Data is Deleted Successfull !", result)
    this.alert= true;
  })
}
closeAlert(){
  this.alert= false;
}


}
