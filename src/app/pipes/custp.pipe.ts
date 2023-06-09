import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custp'
})
export class CustpPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
   const [price] = args
    return value*price;
  }

}
