import { Component, OnInit } from '@angular/core';
import {HttpClient}  from  '@angular/common/http'
import { UpdteService } from '../updte.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
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
    'moviename':'',
    'yor':'',
    'plot':'',
    'cid':''
  }
  edit(i){
    this.up.updatecurrent(i)
   this.upd={
     'moviename':this.cp.moviename,
     'yor':this.cp.yor,
     'plot':this.cp.plot,
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
