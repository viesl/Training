import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOfLetters'
})
export class NumberOfLettersPipe implements PipeTransform {

  transform(value: string): number {
    return value.replace(/[^a-zA-Z]/g, '').length;
  }

}
