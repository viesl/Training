import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }

  uppercaseValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const valid = (control.value as string) === (control.value as string).toUpperCase();
      return valid ? null : { invalidUsername: true };
    };
  }

  companyNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const companyList = ['EMI', 'Microsoft', 'Apple', 'Samsung'];
      const valid = (companyList.indexOf(control.value) > -1);
      return valid ? null : { invalidCompanyName: true };
    };
  }

}
