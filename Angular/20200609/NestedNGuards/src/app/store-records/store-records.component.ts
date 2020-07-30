import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../core/models/iemployee';
import { EmployeeService } from '../core/services/employee.service';

@Component({
  selector: 'app-store-records',
  templateUrl: './store-records.component.html',
  styleUrls: ['./store-records.component.scss']
})
export class StoreRecordsComponent implements OnInit {
  employees: IEmployee[];

  constructor(private empService: EmployeeService) {
    this.employees = this.empService.getEmployees();
  }

  ngOnInit(): void {
  }

  getEmployee(event) {
    this.employees.push(event);
  }

}
