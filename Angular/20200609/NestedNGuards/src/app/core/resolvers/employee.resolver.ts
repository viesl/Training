import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeeResolveService } from '../services/employee-resolve.service';
import { IEmployee } from '../models/iemployee';
import { delay } from 'rxjs/internal/operators';


@Injectable()
export class EmployeeResolver implements Resolve<Observable<IEmployee[]>> {
  constructor(private empResolveService: EmployeeResolveService) {}

  resolve(): Observable<IEmployee[]> {
    return of(this.empResolveService.getEmployees()).pipe(delay(3000));
  }
}
