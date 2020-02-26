import { Injectable,EventEmitter } from '@angular/core';
import{Observable,Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UpdteService {

  constructor() { }
  pevent= new EventEmitter();
  currentdata={}
  updatecurrent(p){

   this.currentdata= p;
   this.pevent.emit(this.currentdata)
  }
 
}
