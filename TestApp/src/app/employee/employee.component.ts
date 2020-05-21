import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/IEmployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public showData = false;
  public btnname: any = 'show';
  public ID: string;
  emp: IEmployee[];
  constructor() {
    this.emp = [{
      id: 1,
      name: 'Mayura',
      location: 'Pune',
      isActive: false,
      salary: 500.54545454
    },
    {
      id: 2,
      name: 'Sam',
      location: 'LA',
      isActive: false,
      salary: 148.9754
    },
    {
      id: 3,
      name: 'Swathi',
      location: 'Pune',
      isActive: true,
      salary: 500.54545454
    },
    {
      id: 4,
      name: 'Jerry',
      location: 'New York',
      isActive: false,
      salary: 254.9754
    }
    ];
  }

  public trackByEmployee(ID: any): any {
    return this.ID;
  }
  ngOnInit() {
  }
}
