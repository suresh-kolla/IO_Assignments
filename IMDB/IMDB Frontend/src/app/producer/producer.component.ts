import { Component, OnInit } from '@angular/core';
import {HttpClient}  from  '@angular/common/http'
import { UpdteService } from '../updte.service';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

  array:any
  cp
  url='http://localhost:3000/add'
  constructor(public http:HttpClient,public up:UpdteService) {
    this.http.get(this.url).subscribe(res=>{
      this.array=res
    })
    this.up.pevent.subscribe(e=>{
      this.cp=e
    })
  }
  ngOnInit(): void {
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
  upd={
    'producername':'',
    'pdob':'',
    'pgender':'',
    'pbio':'',
    'cid':''
  }
  edit(i){
    this.up.updatecurrent(i)
   this.upd={
     'producername':this.cp.producername,
     'pdob':this.cp.pdob,
     'pgender':this.cp.pgender,
     'pbio':this.cp.pbio,
     'cid':this.cp._id
   }
  }
  finalupdate(){
    this.http.put("http://localhost:3000/add/update",this.upd).subscribe((res)=>{
      
    })
  }
  refresh(){
    this.http.get(this.url).subscribe(res=>{
      this.array=res
    })
  }
}
