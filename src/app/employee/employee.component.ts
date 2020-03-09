import { Component, OnInit } from '@angular/core';
import { employee } from './employee.model';
import { EmployeeDataService } from './employee-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeedata:EmployeeDataService) { 
  }
  employee1:employee={
    id:null,
    firstName:null,
    lastName:null,
    email:null,
    contactNumber: null,
    address:null,
    userName:null,
    password: null,
    gender: null,
    qualification: null,
    experience: null,
    codingLanguages:null
  };
  
  quals:string[];
  exps:number[];
  langs:string[];
  
  ngOnInit(): void {
    this.quals=['bachelors','honours','masters','doctoral'];
    this.exps=[0,1,2,3,4,5,6,7];
    this.langs=['C/C++','Java','C#','PHP','Python'];
    
  }
  
  display(){
    //this.employeedata.emp=this.employee1;
    this.employeedata.addEmployee(this.employee1);
    //this.employeedata.emplist=this.employeelist;
     let output = '';
  for (let property in this.employee1) {
    output= property + ': ' + this.employee1[property];
    console.log(output);
  }
    }
}
