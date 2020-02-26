import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Fliter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?:any): any {
    var result= value.filter(function(a,i){
      var s= JSON.stringify(a) ;
       s=s.toLowerCase()
       
      if(s.indexOf(args) != -1){
        return true
      }
      
      else {
      return false
      }
    })
    if(args==undefined){
      return value
    }
    return result
    }
  }
