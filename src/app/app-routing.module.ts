import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeEditComponent } from './employee/employee-edit.component';


const routes: Routes = [
    { path: 'employeeAdd', component: EmployeeComponent },
    { path: 'employeeList', component: EmployeeListComponent },
    { path: 'employeeEdit/:id', component: EmployeeEditComponent },
    { path: '', redirectTo: 'employeeList', pathMatch: 'full' },
    { path: '**', redirectTo: 'employeeList', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
