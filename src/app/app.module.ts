import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeEditComponent } from './employee/employee-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
