import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends {[key: string]: any}> implements PipeTransform {

  transform(value: T[], phrase: string, key?: string): T[] {
    if (!Array.isArray(value) || !phrase || typeof phrase !== 'string') {
      return value;
    }

    phrase = phrase.toLowerCase();

    if (!key || typeof key !== 'string') {
      return value.filter( item => Object.values(item).join(' ').toLowerCase().includes(phrase) );
    }

    return value.filter( item => item[key].toLowerCase().includes(phrase) );
  }

}
