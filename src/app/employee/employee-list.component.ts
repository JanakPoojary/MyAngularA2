import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from './employee-data.service';
import { employee } from './employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
errorMessage:string;
  constructor(private employeedata:EmployeeDataService) { }
  e1:Array<employee>;
  ngOnInit(): void {
    this.employeedata.getEmployees().subscribe(
      e1 => {
        return this.e1 = e1;
      },
      error => this.errorMessage = <any>error
    );
  }
delete(id:number){
this.employeedata.deleteEmployee(id);

}
}
