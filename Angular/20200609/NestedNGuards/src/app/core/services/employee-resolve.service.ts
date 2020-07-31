import { Injectable } from '@angular/core';
import { IEmployee } from '../models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolveService {

  private employees: IEmployee[];

  constructor() {
    this.employees = [
      {
        id: 1,
        name: 'Dude',
        location: 'Dudeland'
      }
    ];
  }

  getEmployees(): IEmployee[] {
    return this.employees;
  }
}
