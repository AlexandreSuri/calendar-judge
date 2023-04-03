import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let dataTransform: string;
    dataTransform = value.slice(0,10);
    dataTransform = dataTransform.split("-").reverse().join("-");

    return dataTransform;
  }

}
