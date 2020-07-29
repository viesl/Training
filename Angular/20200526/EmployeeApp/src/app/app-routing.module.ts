import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { OptionalParamComponent } from './optional-param/optional-param.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';


const routes: Routes = [
  { path : 'employee', component : EmployeeComponent},
  { path: 'employee/:id', component: EmployeeDetailsComponent},
  { path: 'optional', component: OptionalParamComponent},
  { path: 'from', component: FromOperatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
