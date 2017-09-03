/**
 * Created by dattaram on 2/9/17.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'custom'
})

export class CustomPipe implements PipeTransform {
  transform(value: any, exponent: string): any {

    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
