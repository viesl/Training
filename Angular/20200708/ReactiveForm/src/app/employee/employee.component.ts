import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Employee } from '../core/models/employee';
import { CustomValidationService } from '../core/services/custom-validation.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employee: Employee = new Employee();

  constructor(private fb: FormBuilder,
              private customValidator: CustomValidationService) {
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      username: ['', this.customValidator.uppercaseValidator()],
      email: ['', Validators.email],
      employeeInfo: this.fb.array([this.buildEmployeeInfo()])
    });
  }

  get employeeInfo(): FormArray {
    return this.employeeForm.get('employeeInfo') as FormArray;
  }

  getSkills(i): FormArray {
    return this.employeeInfo.controls[i].get('skill') as FormArray;
  }

  addEmployeeInfo(): void {
    this.employeeInfo.push(this.buildEmployeeInfo());
  }

  addSkill(i): void {
    (this.employeeInfo.controls[i].get('skill') as FormArray).push(this.buildSkill());
  }

  buildEmployeeInfo(): FormGroup {
    return this.fb.group({
      companyName: ['', this.customValidator.companyNameValidator()],
      jobTitle: [''],
      fromDate: [''],
      toDate: [''],
      skill: this.fb.array([this.buildSkill()])
    });
  }

  buildSkill(): FormGroup {
    return this.fb.group({
      skillName: ['']
    });
  }

}
