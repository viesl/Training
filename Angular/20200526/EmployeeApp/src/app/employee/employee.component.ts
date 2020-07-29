import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { IEmployee } from '../models/iemployee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: IEmployee[];

  constructor(private employeeService: EmployeeServiceService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees(this.activateRoute.snapshot.queryParamMap.get('name'))
      .subscribe(
        employees => this.employees = employees,
        error => console.log(error),
        () => console.log('Done')
      );
  }

}
