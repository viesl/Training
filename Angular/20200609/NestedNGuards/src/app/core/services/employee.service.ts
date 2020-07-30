import { Injectable } from '@angular/core';
import { IEmployee } from '../models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: IEmployee[];

  constructor() {
    this.employees = [
      // {
      //   id: 1,
      //   name: 'Dude',
      //   location: 'Dudeland'
      // }
    ];
  }

  getEmployees(): IEmployee[] {
    return this.employees;
  }

  addEmployee(emp: IEmployee): void {
    this.employees.push(emp);
  }
}
