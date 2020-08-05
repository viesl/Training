import { Component, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { IEmployee } from '../core/models/iemployee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-emp-view-child',
  templateUrl: './emp-view-child.component.html',
  styleUrls: ['./emp-view-child.component.scss']
})
export class EmpViewChildComponent implements OnInit {
  @ViewChild('searchViewChild', {static: false}) searchViewChildTerm: ElementRef;

  @ContentChild('searchContentChild', {static: false}) searchContentChildTerm: ElementRef;
  employeeList: IEmployee[];

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(
      response => {
        this.employeeList = response;
      }
    );
  }

  searchViewChildName(): void {
    this.empService.search(this.searchViewChildTerm.nativeElement.value).subscribe(
      response => {
        if (response.length === 0) {
          alert('Search did not return anything');
        }
        this.employeeList = response;
      }
    );
  }

  searchContentChildName(): void{
    this.empService.search(this.searchContentChildTerm.nativeElement.value).subscribe(
      response => {
        if (response.length === 0) {
          alert('Search did not return anything');
        }
        this.employeeList = response;
      }
    );
  }

}
