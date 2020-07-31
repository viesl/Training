import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './core/services/employee.service';
import { StoreRecordsComponent } from './store-records/store-records.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeResolveComponent } from './employee-resolve/employee-resolve.component';
import { EmployeeResolver } from './core/resolvers/employee.resolver';
import { EmployeeResolveService } from './core/services/employee-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    StoreRecordsComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeResolveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService, EmployeeResolveService, EmployeeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
