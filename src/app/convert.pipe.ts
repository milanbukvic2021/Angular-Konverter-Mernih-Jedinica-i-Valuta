//#61:Custom Pipes

import { Pipe, PipeTransform } from '@angular/core';
//import { throwError } from 'rxjs';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnits: string): any {
    if (!value) {
      return 'No Value';
    }

    switch (targetUnits) {
      case 'km':
        return value * 1.609;
      case 'm':
        return value * 1.609 * 1000;
      case 'cm':
        return value * 1.609 * 1000 * 1000;
      default:
        throw new Error('target units not supported');
    }
  }
}
