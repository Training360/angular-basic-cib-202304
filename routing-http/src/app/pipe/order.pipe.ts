import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe<T extends {[key: string]: any}> implements PipeTransform {

  transform(value: T[], column: string, direction: number = 1): unknown {
    if (!Array.isArray(value) || !column || typeof column !== 'string') {
      return value;
    }

    return value.sort( (a: T, b: T) => {
      if (typeof a[column] === 'number' && typeof b[column] === 'number') {
        return (a[column] - b[column]) * direction;
      }

      return String(a[column]).toLowerCase().localeCompare( String(b[column]).toLowerCase() ) * direction;
    });
  }

}
