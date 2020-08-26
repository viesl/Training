import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employee: Employee;
  isDataLoading = true;

  constructor(private empService: EmployeeService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      Gender: ['', Validators.required]
    });
    this.getEmployeeID(this.route.snapshot.params.id);
  }

  getEmployeeID(id) {
    this.empService.getEmployeeById(id).subscribe(data => {
      this.isDataLoading = false;
      this.employee = data;
      this.employeeForm.get('name').setValue(data.name);
      this.employeeForm.get('designation').setValue(data.designation);
      this.employeeForm.get('department').setValue(data.department);
      this.employeeForm.get('Gender').setValue(data.Gender);
    });
  }

  onFormSubmit(form: NgForm) {
    this.isDataLoading = true;
    this.employee.name = form.value.name;
    this.employee.department = form.value.department;
    this.employee.designation = form.value.designation;
    this.employee.Gender = form.value.Gender;
    this.empService.editEmployee(this.employee).subscribe(res => {
      const id = res.id;
      this.router.navigate(['details', id]);
    }, (err) => {
        console.log(err);
    });
  }

}
