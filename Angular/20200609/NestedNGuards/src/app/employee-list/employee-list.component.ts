import { Component, OnInit, Input } from '@angular/core';
import { IEmployee } from '../core/models/iemployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input() employeelist: IEmployee[];
  constructor() { }

  ngOnInit(): void {
  }

}
