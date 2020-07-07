import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from 'util';

@Pipe({
  name: 'exponent'
})
export class ExponentPipe implements PipeTransform {

  transform(value: number, power: number): number {
    if (isNaN(power) || power == null) {
      return Math.pow(value, 1);
    }
    return Math.pow(value, power);
  }

}
