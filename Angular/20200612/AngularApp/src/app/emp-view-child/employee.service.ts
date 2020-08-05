import { Injectable } from '@angular/core';
import { IEmployee } from '../core/models/iemployee';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: IEmployee[];

  constructor() {
    this.employees = [
      {
        id: 1,
        name: 'Mayura',
        location: 'Pune'
      },
      {
        id: 2,
        name: 'Sam',
        location: 'LA'
      },
      {
        id: 3,
        name: 'Swathi',
        location: 'Pune'
      },
      {
        id: 4,
        name: 'Jerry',
        location: 'New York'
      },
      {
        id: 5,
        name: 'Sam',
        location: 'Texas'
      }
    ];
  }

  getEmployees(): Observable<IEmployee[]> {
    return of(this.employees);
  }

  search(name: string): Observable<IEmployee[]> {
    return of(this.employees.filter(employee => employee.name.toLowerCase() === name.toLowerCase() ));
  }
}
