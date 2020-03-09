import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from './employee-data.service';
import { employee } from './employee.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  constructor(private employeedata:EmployeeDataService, private route:Router,private ar:ActivatedRoute, private http:HttpClient) { }
  quals:string[];
  exps:number[];
  langs:string[];
  id:number;
  editedEmployee:employee;
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
  url:string;
  
  ngOnInit(): void {
    this.quals=['bachelors','honours','masters','doctoral'];
    this.exps=[0,1,2,3,4,5,6,7];
    this.langs=['C/C++','Java','C#','PHP','Python'];
    this.ar.params.subscribe(params =>{
    this.id= +params['id'];
    });
    this.employeedata.getEmployee(this.id).subscribe(
      e1 => this.employee1 = e1
    );
    this.url=`http://localhost:3000/employees/${this.id}`;
  }

  editEmployee(){
    this.http.put(this.url, JSON.stringify(this.employee1),{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
      ()=>{
        return this.employeedata.getEmployees();
      }
    );
    this.route.navigate(['/employeeList']);
  }
}
