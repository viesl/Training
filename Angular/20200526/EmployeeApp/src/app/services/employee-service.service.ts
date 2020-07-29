import { Injectable } from '@angular/core';
import { IEmployee } from '../models/iemployee';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private employees: IEmployee[];

  constructor() {
    this.employees = [{
      id: 1,
      name: 'Mayura',
      location: 'Pune',
      salary: 500.54545454
    },
    {
      id: 2,
      name: 'Sam',
      location: 'LA',
      salary: 148.9754
    },
    {
      id: 3,
      name: 'Swathi',
      location: 'Pune',
      salary: 500.54545454
    },
    {
      id: 4,
      name: 'Jerry',
      location: 'New York',
      salary: 254.9754
    }
    ];
  }

  getEmployees(name: string): Observable<IEmployee[]> {
    if (name)
    {
      return of(this.employees.filter(x => x.name.toLowerCase() === name.toLowerCase()));
    }
    return of(this.employees);
  }

  getEmployeeById(id: number): Observable<IEmployee> {
    return of(this.employees.find(x => x.id === id));
  }

}
