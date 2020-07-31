import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../core/models/iemployee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-resolve',
  templateUrl: './employee-resolve.component.html',
  styleUrls: ['./employee-resolve.component.scss']
})
export class EmployeeResolveComponent implements OnInit {
  employees: IEmployee[];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employees = this.activatedRoute.snapshot.data.empData;
  }

}
