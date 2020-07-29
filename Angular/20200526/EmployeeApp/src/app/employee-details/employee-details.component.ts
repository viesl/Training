import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { IEmployee } from '../models/iemployee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: IEmployee;

  constructor(private employeeService: EmployeeServiceService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.employeeService.getEmployeeById(+this.activateRoute.snapshot.paramMap.get('id'))
      .subscribe(
        employee => {
          this.employee = employee;
        },
        error => {
          console.log(error);
        }
      );
  }

}
