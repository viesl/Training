import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEmployee } from '../core/models/iemployee';
import { EmployeeService } from '../core/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  @Output() employee = new EventEmitter<IEmployee>();

  id: number;
  name: string;
  location: string;

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee(): void {
    this.empService.addEmployee({id: this.id, name: this.name, location: this.location});
  }

}
