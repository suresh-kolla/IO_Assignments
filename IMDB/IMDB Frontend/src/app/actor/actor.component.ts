import { Component, OnInit,DoCheck } from '@angular/core';
import {HttpClient}  from  '@angular/common/http'
import { UpdteService } from '../updte.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  array:any
  cp
  
  url='http://localhost:3000/add'
  constructor(public http:HttpClient,public up:UpdteService, public rr:Router) {
    this.http.get(this.url).subscribe(res=>{
      this.array=res
    })
    this.up.pevent.subscribe(e=>{
      console.log(e._id)
      this.cp=e
    })
   
  }
  ngOnInit(): void {
  }
upd={
  'actorname':'',
  'adob':'',
  'agender':'',
  'abio':'',
  'cid':''
}
 update(i){
   this.up.updatecurrent(i)
 }
 delete(id){
   console.log(id)
   this.http.delete(`http://localhost:3000/add/${id}`).subscribe(res=>{
     console.log(res)
     this.http.get(this.url).subscribe(res=>{
      this.array=res
    })
   })
 }
 upmovie
 edit(i){
   this.up.updatecurrent(i)
  this.upd={
    'actorname':this.cp.actorname,
    'adob':this.cp.adob,
    'agender':this.cp.agender,
    'abio':this.cp.abio,
    'cid':this.cp._id
  }
    
  
 }
 finalupdate(){
   this.http.put("http://localhost:3000/add/update",this.upd).subscribe((res)=>{})
   
  
 }
 refresh(){
  this.http.get(this.url).subscribe(res=>{
    this.array=res
  })
}
 
}
