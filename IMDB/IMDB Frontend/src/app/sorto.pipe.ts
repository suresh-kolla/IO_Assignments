import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorto'
})
export class SortoPipe implements PipeTransform {

  transform(value: any, args: any): any {

    value.sort(function(a, b){
      if (a[args] >b[args]) {
        return 1
      }
      else{
        return -1
      }
    })
    return value;
  }

}

